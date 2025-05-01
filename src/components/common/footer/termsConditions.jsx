import React, { useEffect, useRef, useState } from "react";
import Navbar from "../../common/navbar/navbar";
import Footer from "../../common/footer/footer";
import styles from "./termsConditions.module.css";
import Reveal from "../../common/reveal/Reveal";
import Meta from "../../../Meta";

const TermsConditions = () => {
    const [activeSection, setActiveSection] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [tocVisible, setTocVisible] = useState(!isMobile);
    const headingsRef = useRef([]);
    const sectionRefs = useRef({});
    const tocRef = useRef(null);
    const [activeProgress, setActiveProgress] = useState(0);

    const content = `
    <h2>Introduction</h2>
    <p>Welcome to www.lorem-ipsum.info. This site is provided as a service to our visitors and may be used for informational purposes only. Because the Terms and Conditions contain legal obligations, please read them carefully.</p>

    <h2>YOUR AGREEMENT</h2>
    <p>By using this Site, you agree to be bound by, and to comply with, these Terms and Conditions. If you do not agree to these Terms and Conditions, please do not use this site.

PLEASE NOTE: We reserve the right, at our sole discretion, to change, modify or otherwise alter these Terms and Conditions at any time. Unless otherwise indicated, amendments will become effective immediately. Please review these Terms and Conditions periodically. Your continued use of the Site following the posting of changes and/or modifications will constitute your acceptance of the revised Terms and Conditions and the reasonableness of these standards for notice of changes. For your information, this page was last updated as of the date at the top of these terms and conditions.</p>

    <h2>PRIVACY</h2>
    <p>Please review our Privacy Policy, which also governs your visit to this Site, to understand our practices.</p>

    <h2>Limitation of Liability</h2>
    <p>We are not liable for damages resulting from the use of our services.</p>

    <h2>LINKED SITES</h2>
    <p>This Site may contain links to other independent third-party Web sites ("Linked Sites"). These Linked Sites are provided solely as a convenience to our visitors. Such Linked Sites are not under our control, and we are not responsible for and does not endorse the content of such Linked Sites, including any information or materials contained on such Linked Sites. You will need to make your own independent judgment regarding your interaction with these Linked Sites.</p>
    <h2> FORWARD LOOKING STATEMENTS</h2>
    <p>All materials reproduced on this site speak as of the original date of publication or filing. The fact that a document is available on this site does not mean that the information contained in such document has not been modified or superseded by events or by a subsequent document or filing. We have no duty or policy to update any information or statements contained on this site and, therefore, such information or statements should not be relied upon as being current as of the date you access this site.</p>
    <h2>DISCLAIMER OF WARRANTIES AND LIMITATION OF LIABILITY</h2>
    <p>This Site and all its Contents are intended solely for personal, non-commercial use. Except as expressly provided, nothing within the Site shall be construed as conferring any license under our or any third party's intellectual property rights, whether by estoppel, implication, waiver, or otherwise. Without limiting the generality of the foregoing, you acknowledge and agree that all content available through and used to operate the Site and its services is protected by copyright, trademark, patent, or other proprietary rights. You agree not to: (a) modify, alter, or deface any of the trademarks, service marks, trade dress (collectively "Trademarks") or other intellectual property made available by us in connection with the Site; (b) hold yourself out as in any way sponsored by, affiliated with, or endorsed by us, or any of our affiliates or service providers; (c) use any of the Trademarks or other content accessible through the Site for any purpose other than the purpose for which we have made it available to you; (d) defame or disparage us, our Trademarks, or any aspect of the Site; and (e) adapt, translate, modify, decompile, disassemble, or reverse engineer the Site or any software or programs used in connection with it or its products and services.

The framing, mirroring, scraping or data mining of the Site or any of its content in any form and by any method is expressly prohibited.</p>
  `;

    // Extract headings
    headingsRef.current = [];
    const contentWithIds = content.replace(/<h2>(.*?)<\/h2>/g, (match, p1, index) => {
        const sectionId = `section-${index}`;
        headingsRef.current.push({ id: sectionId, title: p1 });
        return `<h2 id="${sectionId}" class="${styles.sectionHeading}">${p1}</h2>`;
    });

    useEffect(() => {
        const refs = {};
        headingsRef.current.forEach(section => {
            const element = document.getElementById(section.id);
            if (element) refs[section.id] = element;
        });
        sectionRefs.current = refs;
        if (headingsRef.current.length > 0 && !activeSection) {
            setActiveSection(headingsRef.current[0].id);
        }

        // Add CSS variable to track active section progress
        updateActiveLineProgress();
    }, []);

    useEffect(() => {
        updateActiveLineProgress();
    }, [activeSection]);

    const updateActiveLineProgress = () => {
        if (!activeSection || !tocRef.current) return;

        // Find the index of the active section
        const activeIndex = headingsRef.current.findIndex(item => item.id === activeSection);
        if (activeIndex === -1) return;

        // Find the active TOC item element
        const activeTocItem = tocRef.current.querySelector(`.${styles.active}`);
        if (!activeTocItem) return;

        // Calculate position for the blue line to reach
        const tocUl = tocRef.current.querySelector('ul');
        if (!tocUl) return;

        // Get all completed items including active one
        const completedItems = Array.from(tocRef.current.querySelectorAll(`.${styles.completed}, .${styles.active}`));
        const lastItem = completedItems[completedItems.length - 1];

        // Calculate the position - height should be to the bottom of the active item
        const itemPosition = lastItem.offsetTop + lastItem.offsetHeight;

        // Update the CSS variable for the blue line height
        tocUl.style.setProperty('--active-section-bottom', `${itemPosition}px`);
    };


    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const visibleSections = entries.filter(e => e.isIntersecting).map(e => e.target.id);
            if (visibleSections.length > 0) {
                setActiveSection(visibleSections[0]);
            }
        }, {
            root: null,
            rootMargin: "-100px 0px -70% 0px",
            threshold: 0,
        });

        headingsRef.current.forEach(section => {
            const element = document.getElementById(section.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const toggleToc = () => setTocVisible(!tocVisible);

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            window.scrollTo({ top: el.offsetTop - 100, behavior: "smooth" });
            setActiveSection(id);
            if (isMobile) setTocVisible(false);
        }
    };


    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            if (!mobile) setTocVisible(true);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div>
            <Meta title="Terms and Conditions" description="Terms of using our website" />
            <Navbar page="home" />
            <Reveal>
                <div className={styles.blogDetail}>
                    <div className={styles.blogHeader}>
                        <h1 className={styles.title}>Terms and Conditions</h1>
                        <h3 className={styles.subheading}>Please read these carefully before using our site</h3>
                    </div>

                    <div className={styles.blogContainer}>
                        <div className={styles.blogContent}>
                            <div
                                ref={tocRef}
                                className={`${styles.toc} ${tocVisible ? styles.expanded : ""}`}
                            >
                                {isMobile ? (
                                    <div className={styles.mobileTocToggle}>
                                        <button className={styles.dropdownButton} onClick={toggleToc}>
                                            📖 Table of Contents
                                            <span className={styles.arrow}>{tocVisible ? "▾" : "▸"}</span>
                                        </button>
                                    </div>
                                ) : (
                                    <h4 className={styles.tocTitle}>📖 Table of Contents</h4>
                                )}


                                {tocVisible && headingsRef.current.length > 0 && (
                                    <ul>
                                        {headingsRef.current.map((item, index) => (
                                            <li
                                                className={`${styles.tocItem} ${activeSection === item.id ? styles.active :
                                                    index < headingsRef.current.findIndex(h => h.id === activeSection) ? styles.completed : ""
                                                    }`}
                                                key={index}
                                                onClick={() => scrollToSection(item.id)}
                                            >
                                                {item.title}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                            <div className={styles.description}>
                                <div
                                    dangerouslySetInnerHTML={{ __html: contentWithIds }}
                                    style={{ overflowWrap: "break-word", wordWrap: "break-word" }}
                                />
                            </div>
                        </div>

                        <div className={styles.rightSidebar}></div>
                    </div>
                </div>

                <div className="flex_center" style={{ width: "100%", backgroundColor: "#0052cc" }}>
                    <Footer />
                </div>
            </Reveal>
        </div>
    );
};

export default TermsConditions;