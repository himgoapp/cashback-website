import { Helmet } from "react-helmet-async";

const Meta = ({ title, description, link }) => {
  return (
    <Helmet>
          <title>
            {title || "Cashback & Coupons Hub | Best Deals & Rewards"}
          </title>
          <meta
            name="description"
            content={
              description ||
              "Cashback & Coupons Hub — discover top offers, coupons and cashback rates across India's leading stores."
            }
          />
          <link rel="canonical" href={link || "https://cashbackhub.example.com"} />
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
};

export default Meta;
