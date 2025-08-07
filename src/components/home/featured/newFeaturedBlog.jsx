import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './newFeatredBlog.module.css';
import featuredBlogMain from "../../../assets/Logos_and_illustration/featuredBlogMain.webp"
import sideImage from "../../../assets/Logos_and_illustration/sideImage.png"
import Men from "../../../assets/Logos_and_illustration/men.jpg"
import FeaturedCardImage from "../../../assets/Logos_and_illustration/FeaturedCardImage.svg"

import { getBlogs } from "../../../servicefile/blogservice";

const FeaturedBlogs = () => {
    const [activeTab, setActiveTab] = useState('Latest');
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const tabs = [
        'Latest',
        'News',
        'Promotions',
        'Strategy',        
        'Blog'
    ];

    const fetchBlogs = async () => {
        try {
            setLoading(true);
            let type = activeTab === 'Latest' ? undefined : activeTab;
            const response = await getBlogs(type, 1);
            if (response && response.blogsList) {
                const limitedBlogs = response.blogsList.slice(0, 5);
                setBlogs(limitedBlogs);

            } else {
                setBlogs([]);
            }
        } catch (error) {
            console.error("Error fetching blogs:", error);
            setBlogs([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, [activeTab]);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleBlogClick = (blog) => {
        let blogId = `${blog.title}-${blog._id}`;
        blogId = blogId.replace(/[\s?]/g, "-");
        navigate(`/news/${blogId}`);
    };

    const formatDate = (dateString) => {
        const options = {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    return (
        <>
            <div className='container-fluid  RakebackFeaturedBlog'>
                <div className="container">
                    <div className='row'>
                        <div className="col-lg-12 text-center GetStartedhead">
                                <h1 className="title">
                                     Featured <span className="highlight">Blogs</span>
                                </h1>
                                <p className="subtitle">
                                   Stay updated with poker insights, platform breakdowns, and earning strategies.
                                </p>    
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className="tabsContainer">
                                <div className="tabsWrapper">
                                    {tabs.map((tab, index) => (
                                        <div
                                            key={index}
                                            // className={`$"tab} ${activeTab === tab ? styles.activeTab : ''}`}
                                            className= {activeTab === tab ? "activeTab" : ''}
                                            onClick={() => handleTabClick(tab)}
                                        >
                                            {tab}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {loading ? (
                                <div className="blogGrid">
                                    <div className="mainPost">
                                        <div className="imageContainer">
                                            <img
                                                src={featuredBlogMain}
                                                alt="Featured blog post"
                                                className="mainImage"
                                            />
                                        </div>
                                        <div className="mainContent">
                                            <span className="category">Loading...</span>
                                            <h3 className="mainTitle">Loading...</h3>
                                            <p className="description">
                                                Loading content...
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ) : blogs.length > 0 ? (
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="row">
                                            {/* <div className="col-lg-12 position-relative">
                                                <h1 className='BlogHeading'>Latest articles</h1>
                                            </div> */}
                                            <div className="col-lg-12 blogGrid">
                                                <div className="row">
                                                    <div className='col-lg-6 '>
                                                        <div className="mainPost" onClick={() => handleBlogClick(blogs[0])}>                                        
                                                            <div className="imageContainer">
                                                                <img
                                                                    // src={blogs[0].imageUrl || featuredBlogMain}
                                                                    src={FeaturedCardImage}
                                                                    alt={blogs[0].title}
                                                                    className="mainImage"
                                                                />
                                                                
                                                            </div>
                                                            <div className="mainContent">
                                                                <span className="category">{blogs[0].type || 'Blog'}</span>
                                                                <h3 className="mainTitle">
                                                                    {blogs[0]?.title?.length > 20
                                                                        ? blogs[0].title.slice(0, 20) + "..."
                                                                        : blogs[0]?.title}

                                                                </h3>
                                                                <p className="description">
                                                                    {blogs[0]?.subheading?.length > 90
                                                                        ? blogs[0].subheading.slice(0, 90) + "..."
                                                                        : blogs[0]?.subheading}
                                                                </p>
                                                                <div className='AutherINfo'>
                                                                    <div className='AutherImg'>
                                                                        <img
                                                                            src={Men}
                                                                            alt={blogs[0].title}
                                                                            className="mainImage"
                                                                        />
                                                                    </div>
                                                                    <h3>By Gabie Sheber</h3>
                                                                    <span>.</span>
                                                                    <p>Mar. 28, 2020</p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className='col-lg-6 '>
                                                        <div className="row">
                                                            {blogs.slice(1, 5).map((blog, index) => (
                                                                <div
                                                                    key={blog._id}
                                                                    className="sidePost col-lg-12"
                                                                    onClick={() => handleBlogClick(blog)}
                                                                >
                                                                    <div className="sideImageContainer">
                                                                        <img
                                                                            src={blog.imageUrl || sideImage}
                                                                            alt={blog.title}
                                                                            className="sideImage"
                                                                        />
                                                                    </div>                                                                    
                                                                    <div className="sideContent">
                                                                        <span className="sideCategory">{blog.type || 'Blog'}</span>
                                                                        <p className="sideDescription">
                                                                            {blog.title?.length > 50
                                                                        ? blog.title.slice(0, 50) + "..."
                                                                        : blog.title}
                                                                        </p>
                                                                        <div className='AutherINfo'>
                                                                            {/* <div className='AutherImg'>
                                                                                <img
                                                                                    src={Men}
                                                                                    alt={blogs[0].title}
                                                                                    className="mainImage"
                                                                                />
                                                                            </div> */}
                                                                            <h3>By Gabie Sheber</h3>
                                                                            <span>.</span>
                                                                            <p>Mar. 28, 2020</p>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>              
                                                    </div>
                                                </div>   
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               
                               
                            ) : (
                                <div className="blogGrid">
                                    <div className="mainPost">
                                    
                                        <div className="mainContent" >
                                            <span className="category">No Content</span>
                                            <h3 className="mainTitle">No blogs available</h3>
                                            <p className="description">
                                                No blogs found for this category.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="exploreContainer">
                                <button className="exploreButton" onClick={() => navigate('/latest-news')}>
                                    Explore Blogs
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Featured <span className={styles.highlight}>Blogs</span></h2>
                    <p className={styles.subtitle}>
                        Stay updated with poker insights, platform breakdowns, and earning strategies.
                    </p>
                </div> 
    
                <div className={styles.tabsContainer}>
                    <div className={styles.tabsWrapper}>
                        {tabs.map((tab, index) => (
                            <div
                                key={index}
                                className={`${styles.tab} ${activeTab === tab ? styles.activeTab : ''}`}
                                onClick={() => handleTabClick(tab)}
                            >
                                {tab}
                            </div>
                        ))}
                    </div>
                </div>

                {loading ? (
                    <div className={styles.blogGrid}>
                        <div className={styles.mainPost}>
                            <div className={styles.imageContainer}>
                                <img
                                    src={featuredBlogMain}
                                    alt="Featured blog post"
                                    className={styles.mainImage}
                                />
                            </div>
                            <div className={styles.mainContent}>
                                <span className={styles.category}>Loading...</span>
                                <h3 className={styles.mainTitle}>Loading...</h3>
                                <p className={styles.description}>
                                    Loading content...
                                </p>
                            </div>
                        </div>
                    </div>
                ) : blogs.length > 0 ? (
                    <div className={styles.blogGrid}>
                        <div className={styles.mainPost} onClick={() => handleBlogClick(blogs[0])}>
                            <div className={styles.imageContainer}>
                                <img
                                    src={blogs[0].imageUrl || featuredBlogMain}
                                    alt={blogs[0].title}
                                    className={styles.mainImage}
                                />
                            </div>
                            <div className={styles.mainContent}>
                                <span className={styles.category}>{blogs[0].type || 'Blog'}</span>
                                <h3 className={styles.mainTitle}>
                                    {blogs[0]?.title?.length > 20
                                        ? blogs[0].title.slice(0, 20) + "..."
                                        : blogs[0]?.title}

                                </h3>
                                <p className={styles.description}>
                                    {blogs[0]?.subheading?.length > 90
                                        ? blogs[0].subheading.slice(0, 90) + "..."
                                        : blogs[0]?.subheading}
                                </p>
                            </div>
                        </div>

                        <div className={styles.sidePosts}>
                            {blogs.slice(1, 3).map((blog, index) => (
                                <div
                                    key={blog._id}
                                    className={styles.sidePost}
                                    onClick={() => handleBlogClick(blog)}
                                >
                                    <img
                                        src={blog.imageUrl || sideImage}
                                        alt={blog.title}
                                        className={styles.sideImage}
                                    />
                                    <div className={styles.sideContent}>
                                        <span className={styles.sideCategory}>{blog.type || 'Blog'}</span>
                                        <p className={styles.sideDescription}>
                                            {blog.title?.length > 50
                                        ? blog.title.slice(0, 50) + "..."
                                        : blog.title}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className={styles.blogGrid}>
                        <div className={styles.mainPost}style={{height:"120px"}}>
                        
                            <div className={styles.mainContent} >
                                <span className={styles.category}>No Content</span>
                                <h3 className={styles.mainTitle}>No blogs available</h3>
                                <p className={styles.description}>
                                    No blogs found for this category.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                <div className={styles.exploreContainer}>
                    <button className={styles.exploreButton} onClick={() => navigate('/latest-news')}>
                        Explore Blogs
                    </button>
                </div>
            </div> */}
   </>
    );
};

export default FeaturedBlogs;