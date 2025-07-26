// import React from "react";

// const ClientTable = () => {
//   const clientData = [
//     {
//       name: "PokerBaazi",
//       logo: "/images/pokerbaazi.png",
//       offer: "STRATEGY",
//       date: "6/23/2025",
//       description: "Pietrangelo hopes he'll sign contract to remain with Blues",
//       features: [
//         "Pietrangelo hopes he'll sign contract",
//         "Pietrangelo hopes he'll sign contract",
//         "Pietrangelo hopes he'll sign contract",
//       ],
//       promoCode: "POKERBAAZI25",
//     },
//     {
//       name: "PokerDangal",
//       logo: "/images/pokerdangal.png",
//       offer: "STRATEGY",
//       date: "6/23/2025",
//       description: "Pietrangelo hopes he'll sign contract to remain with Blues",
//       features: [
//         "Pietrangelo hopes he'll sign contract",
//         "Pietrangelo hopes he'll sign contract",
//         "Pietrangelo hopes he'll sign contract",
//       ],
//       promoCode: "POKERBAAZI25",
//     },
//     {
//       name: "ACR Poker",
//       logo: "/images/acrpoker.png",
//       offer: "STRATEGY",
//       date: "6/23/2025",
//       description: "Pietrangelo hopes he'll sign contract to remain with Blues",
//       features: [
//         "Pietrangelo hopes he'll sign contract",
//         "Pietrangelo hopes he'll sign contract",
//         "Pietrangelo hopes he'll sign contract",
//       ],
//       promoCode: "POKERBAAZI25",
//     },
//     // Add more rows as needed
//   ];

//   return (
//     <div className={styles.clientTableContainer}>
//       <h2 className={styles.tableHeading}>
//         What our clients have to <span>say</span>
//       </h2>
//       <p className={styles.tableSubHeading}>
//         With Rakebackk, it's not just about playing, it's about earning more
//         every time you do.
//       </p>

//       <table className={styles.clientTable}>
//         <thead>
//           <tr>
//             <th>Platform</th>
//             <th>Offer</th>
//             <th>Features</th>
//             <th>Promo</th>
//           </tr>
//         </thead>
//         <tbody>
//           {clientData.map((client, index) => (
//             <tr key={index}>
//               {/* PLATFORM CELL */}
//               <td className={styles.platformCell}>
//                 <img src={client.logo} alt={`${client.name} Logo`} />
//                 <span>{client.name}</span>
//               </td>

//               {/* OFFER CELL */}
//               <td>
//                 <div className={styles.offerBadge}>{client.offer}</div>
//                 <div className={styles.offerDate}>{client.date}</div>
//                 <p className={styles.offerDesc}>{client.description}</p>
//               </td>

//               {/* FEATURES CELL */}
//               <td>
//                 <ul className={styles.featureList}>
//                   {client.features.map((feat, idx) => (
//                     <li key={idx}>{feat}</li>
//                   ))}
//                 </ul>
//               </td>

//               {/* PROMO CELL */}
//               <td className={styles.promoCell}>
//                 <a href="#" className={styles.promoReview}>
//                   Promo Review
//                 </a>
//                 <button className={styles.promoCode}>
//                   {client.promoCode}
//                   <span>Promo Code</span>
//                 </button>
//                 <button className={styles.claimBtn}>Claim Now!</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ClientTable;
