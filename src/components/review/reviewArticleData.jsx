import React, { useEffect, useRef } from "react";

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

export default function ReviewArticleData({ article }) {
    const headingsRef = useRef([]);

    // 🔹 Transform API content
    const contentWithIds = (() => {
        if (!article) return "";

        let html = decodeHtml(article);

        // Reset headings before parsing
        headingsRef.current = [];

        // Handle h1, h2, h3 → convert into h5 with IDs
        html = html.replace(/<h([1-3])>(.*?)<\/h\1>/gi, (match, level, p1, index) => {
            const cleanTitle = p1.replace(/<[^>]+>/g, "").trim();
            const id = cleanTitle.replace(/\s+/g, "")
            return `<h2 id="${id}" class="contentChildHEd">${cleanTitle}</h2>`;
        });

        // Wrap <img> inside custom div
        html = html.replace(
            /<p[^>]*>\s*<img\s+[^>]*src="([^"]+)"[^>]*>\s*<\/p>|<img\s+[^>]*src="([^"]+)"[^>]*>/gi,
            (match, p1, p2) => {
                const src = p1 || p2;
                return `
          <div class="BlogContentImg">
            <img src="${src}" alt="Blog Image" class="articleimageblog" />
          </div>
        `;
            }
        );

        // Wrap <table>
        html = html.replace(/<table[^>]*>([\s\S]*?)<\/table>/gi, (match, inner) => {
            return `
          <table class="table custom-table">
            ${inner}
          </table>
      `;
        });

        // Wrap <iframe> (videos)
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

        // Twitter embeds
        html = html.replace(
            /<pre[^>]*class="[^"]*\bql-syntax\b[^"]*"[^>]*>([\s\S]*?twitter-tweet[\s\S]*?)<\/pre>/gi,
            (match, inner) => {
                const decoded = decodeHtml(inner);
                return `<div class="BlogEmbed BlogTwitter">${decoded}</div>`;
            }
        );

        // Facebook embeds
        html = html.replace(
            /<pre[^>]*class="[^"]*\bql-syntax\b[^"]*"[^>]*>([\s\S]*?facebook[\s\S]*?)<\/pre>/gi,
            (match, inner) => {
                const decoded = decodeHtml(inner);
                return `<div class="BlogEmbed BlogFacebook">${decoded}</div>`;
            }
        );

        // Instagram embeds
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
            className=""
            dangerouslySetInnerHTML={{ __html: contentWithIds }}
        />
    );
}
