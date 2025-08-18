import React, { useEffect, useRef } from "react";
import styles from "./latest_news.module.css";

// Decode escaped HTML
function decodeHtml(html) {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

// Load external scripts safely once
function loadScript(src, id) {
    if (document.getElementById(id)) return;
    const script = document.createElement("script");
    script.id = id;
    script.src = src;
    script.async = true;
    document.body.appendChild(script);
}

export default function NewsArticleHTMLData({ article }) {
    const headingsRef = useRef([]);

    // 🔹 Transform API content
    const contentWithIds = (() => {
        if (!article?.content) return "";

        let html = decodeHtml(article.content);

        // Replace h2 → h5 with IDs
        html = html.replace(/<h2>(.*?)<\/h2>/g, (match, p1, index) => {
            const cleanTitle = p1.replace(/<[^>]+>/g, "");
            const sectionId = `section-${index}`;
            headingsRef.current.push({ id: sectionId, title: cleanTitle });
            return `<h5 id="${sectionId}" class="contentChildHEd">${cleanTitle}</h5>`;
        });

        // Wrap <img> inside custom div
        html = html.replace(
            /<p[^>]*>\s*<img\s+[^>]*src="([^"]+)"[^>]*>\s*<\/p>|<img\s+[^>]*src="([^"]+)"[^>]*>/g,
            (match, p1, p2) => {
                const src = p1 || p2;
                return `
          <div class="BlogContentImg">
            <img src="${src}" alt="Blog Image" class="articleimageblog" />
          </div>
        `;
            }
        );

        // Wrap <table> inside div and replace classes
        html = html.replace(/<table[^>]*>([\s\S]*?)<\/table>/gi, (match, inner) => {
            return `
        <div class="table-responsive customTableResponsive">
          <table class="table custom-table">
            ${inner}
          </table>
        </div>
      `;
        });

        // Wrap <iframe> (videos) inside custom div, similar to images
        html = html.replace(
            /<iframe[^>]*class="[^"]*ql-video[^"]*"[^>]*src="([^"]+)"[^>]*><\/iframe>/gi,
            (match, src) => {
                return `
      <div class="BlogContentVideo">
        <iframe src="${src}" frameborder="0" allowfullscreen class="articlevideoblog"></iframe>
      </div>
    `;
            }
        );

        // Handle Twitter embeds
        html = html.replace(
            /<pre[^>]*class="[^"]*\bql-syntax\b[^"]*"[^>]*>([\s\S]*?twitter-tweet[\s\S]*?)<\/pre>/gi,
            (match, inner) => {
                const decoded = decodeHtml(inner);
                return `<div class="BlogEmbed BlogTwitter">${decoded}</div>`;
            }
        );

        // Handle Facebook embeds
        html = html.replace(
            /<pre[^>]*class="[^"]*\bql-syntax\b[^"]*"[^>]*>([\s\S]*?facebook[\s\S]*?)<\/pre>/gi,
            (match, inner) => {
                const decoded = decodeHtml(inner);
                return `<div class="BlogEmbed BlogFacebook">${decoded}</div>`;
            }
        );

        // Handle Instagram embeds
        html = html.replace(
            /<pre[^>]*class="[^"]*\bql-syntax\b[^"]*"[^>]*>([\s\S]*?instagram[\s\S]*?)<\/pre>/gi,
            (match, inner) => {
                const decoded = decodeHtml(inner);
                return `<div class="BlogEmbed BlogInstagram">${decoded}</div>`;
            }
        );

        return html;
    })();

    // 🔹 Load/refresh SDKs
    useEffect(() => {
        // Twitter
        if (window.twttr && window.twttr.widgets) {
            window.twttr.widgets.load();
        } else {
            loadScript("https://platform.twitter.com/widgets.js", "twitter-wjs");
        }

        // Facebook
        if (window.FB) {
            window.FB.XFBML.parse();
        } else {
            loadScript(
                "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0",
                "facebook-jssdk"
            );
        }

        // Instagram
        if (window.instgrm && window.instgrm.Embeds) {
            window.instgrm.Embeds.process();
        } else {
            loadScript("https://www.instagram.com/embed.js", "instagram-embed");
        }
    }, [contentWithIds]);

    return (

        <div
            className={styles.newsContent}
            dangerouslySetInnerHTML={{ __html: contentWithIds }}
        />
    );
}
