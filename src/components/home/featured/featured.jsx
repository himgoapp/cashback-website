import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styles from "./featured.module.css";
import Reveal from "../../common/reveal/Reveal";

const Featured = () => {
  const blog = [
    {
      heading: "Online Poker Sites in Georgia: Where to Play at 2025",
      content:
        "Poker is massively popular in the US, yet not all states treat it equally. In contrast to Nevada,...",
      image:
        "https://cms.worldpokerdeals.com/assets/bb7975a9-9208-478e-8cdf-263b4c6a4a2a?width=600&height=355&format=webp&quality=75&fit=cover",
      writer: "Abhi",
      date: "15 Jan 2025",
      type: "Featured",
    },
    {
      heading: "Best Ohio Poker Sites 2025",
      content:
        "Is online poker in Ohio for real money legal? No, it’s not. However, it doesn’t mean ...",
      image:
        "https://cms.worldpokerdeals.com/assets/2a86ee40-49af-4dd7-816b-79c7fb24b665?width=600&height=355&format=webp&quality=75&fit=cover",
      writer: "Lalit",
      date: "12 Jan 2025",
      type: "Poker",
    },
    {
      heading:
        "The Psychology of Fair Play in Online Poker: Strategies for User Retention",
      content:
        "Picture yourself comfortably seated in your favourite armchair, your laptop..",
      image:
        "https://cms.worldpokerdeals.com/assets/c8a08d9a-dcb2-4e5b-8792-18d21d117ef2?width=600&height=357&format=webp&quality=75&fit=cover",
      writer: "Vishal",
      date: "10 Jan 2025",
      type: "Blog",
    },
    {
      heading: "Best Illinois Poker Sites 2025",
      content:
        "Those players looking to play online poker for real money in Illinois are in an awkward position,...",
      image:
        "https://cms.worldpokerdeals.com/assets/d0dfae63-66d5-4051-bd73-2ed96d905875?width=600&height=357&format=webp&quality=75&fit=cover",
      writer: "Abhi",
      date: "17 Jan 2025",
      type: "Featured",
    },
    {
      heading: "Best California Online Poker Sites 2025",
      content:
        "California's online poker industry ranks among the biggest in the U.S. Major poker tournament ser...",
      image:
        "https://cms.worldpokerdeals.com/assets/c67eb478-4a62-49ba-8247-b8175c4b36b7?width=600&height=355&format=webp&quality=75&fit=cover",
      writer: "Lalit",
      date: "27 Jan 2025",
      type: "Poker",
    },
    {
      heading: "Rabbit Hunting in Poker: Unveiling the Hidden Cards",
      content:
        "California's online poker industry ranks among the biggest in the U.S. Major poker tournament ser...",
      image:
        "https://cms.worldpokerdeals.com/assets/a330e0d5-6423-4864-8e25-dd62013c0717?width=600&height=355&format=webp&quality=75&fit=cover",
      writer: "Vishal",
      date: "02 Jan 2025",
      type: "Blog",
    },
  ];

  // Function to chunk the array into sets of three items
  const chunkArray = (array, size) => {
    return array.reduce((acc, item, index) => {
      if (index % size === 0) acc.push(array.slice(index, index + size));
      return acc;
    }, []);
  };

  // Chunk blog items into groups of 3
  const blogChunks = chunkArray(blog, 3);

  return (
    <div className={`${styles.featured_container} container_max`}>
      <div className={styles.featured_content}>
        <div className={styles.header}>
          <Reveal>
            <div className={styles.head}>Featured blogs</div>
            {/* <div className={styles.subhead}>
              Lorem ipsum dolor sit amet consectetur.
            </div> */}
          </Reveal>
        </div>

        <Carousel
          interval={3000}
          controls={true}
          indicators={true}
          className={styles.carouselWrapper}
        >
          {blogChunks.map((chunk, index) => (
            <Carousel.Item key={index}>
              <div className={styles.carouselRow}>
                {chunk.map((item, idx) => (
                  <div className={styles.card} key={idx}>
                    <img
                      src={item.image}
                      alt={item.heading}
                      className={styles.cardImage}
                    />
                    <div className={styles.cardContent}>
						<font className={styles.type}>{item.type}</font>

                      <h5 className={styles.heading_card}>{item.heading}</h5>
                      <p className={styles.para}>{item.content}</p>
                      <div className={styles.cardMeta}>
                        <span className={styles.writer}>{item.writer}</span> | <span className={styles.date}>{item.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Featured;
