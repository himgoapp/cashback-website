import React from "react";
import styles from "./NewsArticlesSecondPage.module.css"; // Adjust the path if necessary

function NewsArticlesSecondPage() {
  const documentData = [
    {
      title: "Wyoming: Bill 612",
      content: {
        subheading:
          "The law defines 'online gambling' as online versions of games like poker, blackjack, and slots, which can be accessed through PCs, mobile devices, or any other digital platform.",
        parastart:
          "The law excludes lotteries and fantasy games; in Wyoming, these can only be played on local tribal lands.",
        contentMainName: "Key points of the law:",
        contentMain: [
          "The Gaming Commission will issue licenses to gaming operators for $100,000, and the renewal fee for operators will be $50,000. Gaming providers must pay $10,000 for the initial license and $5,000 for the renewal.",
          "The profits tax will be 16% and will have to be paid monthly. The first $300,000 received per year will be allocated to health programs, including assistance to people with gambling addiction problems.",
          "The remaining funds will be distributed among the state's counties (40%), schools (50%), and other social programs (10%).",
          "Operators must use geolocation systems to ensure that players are in Wyoming.",
          "Websites must include descriptions of how operators ensure fair play and how they punish cheaters.",
          "Operating without a license will be a crime in the state.",
        ],
        contentType: "list",
      },
    },
    {
      title: "Wyoming: Will the law be passed in 2025?",
      content: {
        subheading:
          "In recent years, Wyoming's efforts to legalize online gambling focused on sports betting, which has been regulated since 2021. It has brought $2.9 million in taxes to the budget in three years.",
        parastart:
          "In September 2024, the House and the Gaming Commission confirmed that Spectrum Gaming Group was doing a detailed study on the possible consequences of legalizing online casinos.",
        contentpara: [
          "The results of the study were positive for those who support broader legalized gambling. Based on the findings, changes were made to the law.",
          "Experts note that if the law is registered for discussion in the House of Representatives in the next session, there would be a high probability that Wyoming will have a new iGaming law in 2025.",
        ],
        contentType: "list",
      },
    },
    {
      title: "Indiana: Act 1432",
      content: {
     contentMainName:"Key points of the law:",
        contentMain: [
          "Only organizations already operating in Indiana can become licensed operators to provide access to online gaming.",
          "The cost of the license will be $500,000 and would allow up to 3 sites to open.",
          "The list of online games includes poker, roulette, blackjack, slots, and lotteries.",
          "A unique program is specified to monitor support for responsible gaming."
        ],
        contentType: "list",
      },
    },
    {
      title: "Indiana: Will the law be approved in 2025?",
      subheading:"Indiana legalized sports betting two years before Wyoming.",
     
      content: {
        subheading1:"In 2024, a corruption scandal broke out in the state, forcing Senate leaders to postpone creating any legislative initiative.",
     contentMainName:"Key points of the law:",
        contentMain: [
          "The culprit was Sean Eberhart, a member of the State Policy Committee who was involved in monitoring compliance with gambling legislation. Sean was caught taking a bribe from Spectacle Entertainment, who were lobbying for the legalization of iGaming and hoping to obtain licenses for two casinos.",
          
        ],
        contentpara: [
          "At the same time, it is possible that the iGaming law will be passed in Indiana in 2025. The bill is ready (the first reading took place on January 21), and the state has a new governor, Mike Braun, who has expressed his support for the legalization of gambling in the state."
        ],
        contentType: "list",
      },
    },
  ];

  return (
    <div className={styles.main_container}>
      <main>
        {/* Table of Contents Section */}
        <aside className={styles.table_of_contents}>
          <h2>Table of Contents</h2>
          <ul>
            {documentData.map((item, ind) => (
              <li key={ind}>
                <a href={`#section-${ind}`}>{item.title}</a>
              </li>
            ))}
          </ul>
        </aside>

        {/* Law Details Section */}
        <section className={styles.law_details}>
          {documentData.map((item, ind) => {
            return (
              <section id={`section-${ind}`} className={styles.law} key={ind}>
                <h2>{item.title}</h2>
                {item.content.subheading && <p>{item.content.subheading}</p>}
                {item.content.subheading1 && <p>{item.content.subheading1}</p>}
                {item.content.parastart && <p>{item.content.parastart}</p>}
                {item.content.contentMainName && <p><strong>{item.content.contentMainName}</strong></p>}
                {item.content.contentpara &&<p>{item.content.contentpara}</p>}
                {item.content.contentMain && Array.isArray(item.content.contentMain) && (
                  <ol>
                    {item.content.contentMain.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ol>
                )}
              </section>
            );
          })}
        </section>
      </main>
    </div>
  );
}

export default NewsArticlesSecondPage;
