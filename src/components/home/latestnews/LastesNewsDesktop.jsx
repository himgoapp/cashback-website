import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./latest_news.module.css";
import Navbar from "../../common/navbar/navbar";
import Footer from "../../common/footer/footer";
import { Tab, Tabs, TabList } from "react-tabs";
import { getBlogs } from "../../../servicefile/blogservice";
import Meta from "../../../Meta";






const LatestNewsDesktop = ({ userData }) => {
    const [activeTab, setActiveTab] = useState("Latest News");
    const [allArticles, setAllArticles] = useState([]);
    const [currentArticles, setCurrentArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 575);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 575);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleTabs = (type) => {
        setActiveTab(type);
        setPage(1);
    };

    const filterArticles = async () => {
        let type = activeTab === "Latest News" ? undefined : activeTab;
        const response = await getBlogs(type, page);
        if (response && response.blogsList) {
            let length = response.length < 10 ? 1 : Math.ceil(response.length / 9);
            setCurrentArticles(response.blogsList);
            setTotalPage(length);
            setLoading(false);
        }
    };

    useEffect(() => {
        filterArticles();
    }, [activeTab, page]);

    const typeColors = {
        Blog: "#3a63e3",
        Promotions: "#00c6bb",
        Guides: "#ff6b6b",
        Interviews: "#7c5cf5",
        "MTT Series": "#38b47e",
        "Live Poker": "#5271ff",
        "Latest News": "#e6a919",
    };

    const formatDate = (dateString) => {
        const options = {
            month: "short",
            day: "numeric",
            year: "numeric",
        };
        return new Date(dateString).toLocaleDateString("en-US", options);
    };

    return (
        <>
            <Meta
                title="Latest Online Poker News India | Rakebackk"
                description="Check Today's Latest Poker News in India at Rakebackk."
                link="https://www.rakebackk.com/latest-news"
            />
            <Navbar page="home" />
            <div className={styles.latest_news_container}>
                Desktop View
            </div>
        </>
    );
};

export default LatestNewsDesktop;
