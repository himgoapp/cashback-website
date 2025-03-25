import { Helmet } from "react-helmet-async";

const Meta = ({ title, description, link }) => {
  return (
    <Helmet>
      <title>{title || "Rakebackk | Poker Cashback Site in India"}</title>
      <meta
        name="description"
        content={
          description ||
          "Online Poker Rakeback Deal Offers for 2025 - Best Reviews of the Poker Sites in India. Play Online Poker Games and Win Real Money. Get up to ₹50000 welcome Bonus"
        }
      />
      <link rel="canonical" href={link || "https://rakebackk.com"} />
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
};

export default Meta;
