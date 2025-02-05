import React from 'react';
import './NewArticlesFirstPage.css';

const NewArticlesFirstPage = () => {
  return (
    <div className="page_container">
      {/* Header Section */}
      <div className="article_card">
        <div className="header_flex_container">
          <img 
            src="https://cms.worldpokerdeals.com/assets/20c0567f-ce1c-4981-a6ce-3ad9e9493a46?format=webp&quality=75" 
            alt="Best Online Poker Sites In Texas 2025" 
            className="header_image"
          />
          <div className="header_title_container">
            <h1 className="header_title">
              Best Online Poker Sites In Texas 2025
            </h1>
          </div>
        </div>

        {/* Meta Info */}
        <div className="meta_info">
          <span>Author - Vargoso</span>
          <span>Published - 1/31/2025</span>
        </div>

        {/* Content Section */}
        <div className="content_section">
          <blockquote className="content_quote">
           " Poker is one of the most popular games among gambling enthusiasts in the USA. 
            However, those who decide to play online poker in Texas for real money may face challenges. 
            First of all, this relates to a complex legal landscape. Compared to Pennsylvania, West Virginia, 
            Michigan, and five more states, Texans can only choose among offshore online poker rooms and 
            sweepstakes platforms. Don’t want to deal with the subtleties of Texas poker regulation and start 
            playing as soon as possible? We prepared a comprehensive guide on the topic and compiled a list of 
            the best poker sites for Texas poker players you can check out right away. "
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default NewArticlesFirstPage;
