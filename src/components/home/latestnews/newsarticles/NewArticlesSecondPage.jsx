import React, { useState, useEffect } from "react";
import styles from "./NewsArticlesSecondPage.module.css";

function NewsArticlesSecondPage({ articleId }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const allArticlesData = {
    "1": [
      {
        title: "Wyoming: Bill 612",
        content: {
          subheading:
            "The law defines 'online gambling' as online versions of games like shopping, blackjack, and slots, which can be accessed through PCs, mobile devices, or any other digital platform.",
          parastart:
            "The law excludes lotteries and fantasy games; in Wyoming, these can only be played on local tribal lands.",
          contentMainName: "Key points of the law:",
          contentMain: [
            "The Gaming Commission will issue licenses to gaming operators for $100,000, and the renewal fee for operators will be $50,000.",
            "The profits tax will be 16% and will have to be paid monthly.",
            "The first $300,000 received per year will be allocated to health programs.",
            "Operators must use geolocation systems to ensure players are in Wyoming.",
            "Operating without a license will be a crime in the state.",
          ],
        },
      },
      {
        title: "Wyoming: Will the law be passed in 2025?",
        content: {
          subheading:
            "Wyoming's efforts to legalize online gambling focused on sports betting, which has been regulated since 2021.",
          parastart:
            "In September 2024, the House and the Gaming Commission confirmed that Spectrum Gaming Group was doing a detailed study.",
          contentpara: [
            "The results of the study were positive for those who support broader legalized gambling.",
            "Experts note a high probability that Wyoming will have a new iGaming law in 2025.",
          ],
        },
      },
      {
        title: "Indiana: Act 1432",
        content: {
          contentMainName: "Key points of the law:",
          contentMain: [
            "Only organizations already operating in Indiana can become licensed operators.",
            "The cost of the license will be $500,000 and would allow up to 3 sites to open.",
            "A unique program is specified to monitor support for responsible gaming.",
          ],
        },
      },
      {
        title: "Indiana: Will the law be approved in 2025?",
        content: {
          subheading1: "Indiana legalized sports betting two years before Wyoming.",
          parastart:
            "In 2024, a corruption scandal forced Senate leaders to postpone any new legislative initiatives.",
          contentpara: [
            "The bill is ready, and the state has a new governor who supports iGaming legalization.",
          ],
        },
      },
    ],
    "2": [
      {
        title: "A new stage in online gambling licensing in the USA?",
        content: {
          subheading:
            "For the first time in the United States’ history, a state legislature will consider a law to regulate gambling sites operating under the 'sweepstakes' model.",
          parastart:
            "New Jersey Assemblyman Clinton Calabrese introduced Bill #5196, stipulating that sweepstakes operators must apply for a license.",
          contentpara: [
            "Background: The 'sweepstakes' model allows players to purchase virtual currency and receive bonus coins. Bonus coins cannot be purchased directly but can be exchanged for money. All bets on the sites are made using one of these two digital currencies.",
            "The Sweepstakes Game has been gaining a significant market share, but licensed operators and authorities do not like it.",
            "Calabrese says the lack of regulation in this area brings social problems and does not contribute to the budget.",
            "One of the goals of Law #5196 is to ensure the development of a safe and responsible gaming environment in New Jersey. The law's author believes that the existing law in the state can serve as a basis for this.",
            "The law is currently under review by the New Jersey Assembly Tourism, Gaming, and the Arts Committee. It would have to pass through both state houses in this year’s legislature. If the parliament approves the initiative, the new law will come into effect once Governor Phil Murphy signs it."
          ],
        },
      },
      {
        title: "How would the law affect the Sweepstakes Game?",
        content: {
          subheading1: "The Sweepstakes Game has been operating in the United States for several years. Various activists have tried to draw attention to it during this time..",
          parastart:
            "For example, there are several lawsuits against Virtual Gaming Worlds (the owner of Global Shopping) in at least 10 states. The plaintiffs claim that the company offers real-money games disguised as two virtual currencies. The list of states where Global Shopping has stopped operating recently grew to five (Washington, Michigan, Montana, Nevada, and Connecticut).",
          contentpara: [
            "Introducing this new law in New Jersey could cause other states to seek a Sweepstakes Gaming license. The prohibitions on sites that operate with this mechanic could also be increased.",
            "Then, 2025 could be a decisive year for developing the Sweepstakes Gaming model. The industry can join the illegal offshore gaming operators or try to integrate into the new legislative reality."
          ],
        },
      },
    ],
  };

  const documentData = allArticlesData[articleId] || [];

  useEffect(() => {
    const handleScroll = () => {
      documentData.forEach((_, index) => {
        const section = document.getElementById(`section-${index}`);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 200) {
            setActiveIndex(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [documentData]);

  if (documentData.length === 0) {
    return <div className={styles.main_container}>No data available for this article.</div>;
  }

  return (
    <div className={styles.main_container}>
      <div className={styles.table_container}>
        <aside className={styles.table_of_contents}>
          <h2>Table of Contents</h2>
          <ul>
            {documentData.map((item, ind) => (
              <li key={ind} className={ind === activeIndex ? styles.active : ""}>
                <a href={`#section-${ind}`}>{item.title}</a>
              </li>
            ))}
          </ul>
        </aside>

        <section className={styles.law_details}>
          {documentData.map((item, ind) => (
            <section id={`section-${ind}`} className={styles.law} key={ind}>
              <h2>{item.title}</h2>
              {item.content.subheading && <p>{item.content.subheading}</p>}
              {item.content.subheading1 && <p>{item.content.subheading1}</p>}
              {item.content.parastart && <p>{item.content.parastart}</p>}
              {item.content.contentMainName && <p>{item.content.contentMainName}</p>}
              {item.content.contentpara &&
                item.content.contentpara.map((para, i) => <p key={i}>{para}</p>)}
              {item.content.contentMain && (
                <ol>
                  {item.content.contentMain.map((point, i) => (
                    <li key={i} className={styles.list_items}>{point}</li>
                  ))}
                </ol>
              )}
            </section>
          ))}
        </section>
      </div>
    </div>
  );
}

export default NewsArticlesSecondPage;
