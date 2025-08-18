import React, { useEffect } from "react";
import styles from "./latest_news.module.css";

// ✅ Decode escaped HTML (from API)
function decodeHtml(html) {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

// ✅ Utility: load external scripts only once
function loadScript(src, id) {
    if (document.getElementById(id)) return;
    const script = document.createElement("script");
    script.id = id;
    script.src = src;
    script.async = true;
    document.body.appendChild(script);
}

export default function NewsArticleHTMLData({ article }) {
    // API gives escaped HTML → decode it
    const decodedHtml = decodeHtml(article?.content || "");

    useEffect(() => {
        // ---- Twitter ----
        if (window.twttr && window.twttr.widgets) {
            window.twttr.widgets.load();
        } else {
            loadScript("https://platform.twitter.com/widgets.js", "twitter-wjs");
        }

        // ---- Facebook ----
        if (window.FB) {
            window.FB.XFBML.parse();
        } else {
            loadScript(
                "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0",
                "facebook-jssdk"
            );
        }

        // ---- Instagram ----
        if (window.instgrm && window.instgrm.Embeds) {
            window.instgrm.Embeds.process();
        } else {
            loadScript("https://www.instagram.com/embed.js", "instagram-embed");
        }
    }, [decodedHtml]);

    return (
        <div
            className="article-content"
            dangerouslySetInnerHTML={{ __html: decodedHtml }}
        />
    );
}
