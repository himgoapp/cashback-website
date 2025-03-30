import { Helmet } from "react-helmet-async";

const Meta = ({ title, description, link }) => {
  return (
    <Helmet>
      <title>
        {title || "Best Poker Rakeback Site India | Win Real Money"}
      </title>
      <meta
        name="description"
        content={
          description ||
          "Top Poker Rakeback and Cashback Site in India | Play Online Poker Games in India with Your Choice of Poker Website and Win Real Money 2025."
        }
      />
      <link rel="canonical" href={link || "https://rakebackk.com"} />
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
};

export default Meta;
