import React from "react";
import styles from "./content_deposit.module.css";

const ContentDeposit = () => {
    const DepositBonus=[{
        text:"All new players who register in the Pokerdom poker room from our site have the opportunity to receive 2 bonuses at once: an instant bonus of ₽1,000 in the form of tournament money, available for immediate use, as well as a 100% wagering bonus on the first deposit up to ₽50,000."
    }]
    const InstantBonus = [
      {  text: "The ₽1,000 instant bonus in tournament money is an exclusive offer from our site and is available to all our players who registered in the poker room after October 1, 2023 and made a deposit of more than 1,000 rubles."
}]
    const WageringBonus =[
 {       text:"Pokerdom offers all new players a 100% deposit bonus up to 50,000 rubles. The bonus will give players an additional 25% rakeback for wagering. It is paid off in 4 equal parts over 100 days."
  }  ]
	return (
		<div id="content-deposit">
	<div>
		<h1 className={styles.content_deposit_main_heading}>100% Bonus for new players up to ₽50,000 + Instant ₽1,000 tournament money to your account
        </h1>
       <div className={styles.content_deposit_para}>{DepositBonus.map((list, index) => (
									<div key={index} className={styles.content_deposit_para}>
										<div className={styles.text}>{list.text}</div>
									</div>
								))} </div>
        
        </div>
        	<div className={styles.content_deposit}>
                <div>
 <h2 className={styles.content_deposit_heading}>Instant bonus ₽1,000 from us</h2>
 <div >{InstantBonus.map((list, index) => (
									<div key={index} className={styles.content_deposit_para}>
										<div className={styles.text}>{list.text}</div>
									</div>
								))}</div>
                               
 </div>
<div><h2 className={styles.content_deposit_heading}>Wagering bonus 100% up to ₽50,000 from the room</h2>
<div className={styles.content_deposit_para}>
{WageringBonus.map((list, index) => (
									<div key={index} className={styles.content_deposit_para}>
										<div className={styles.text}>{list.text}</div>
									</div>
								))}
    </div></div>
            </div>
          <div className={styles.receipt}>  <div>
                                    <h3>Instructions for receipt:</h3>
                                   <ol  className={styles.receipt_list}>
                                    <li >Register using the button above with the code when registering  PEKARSTAS</li>
                                    <li>Make  your first deposit  in the amount of ₽ 1,000;</li>
                                    <li >After depositing, contact Imant PekarStas directly via Skype: ohmywka or Telegram: @pekarstas and request a promo code for ₽1,000 tournament money.</li>
                                    <li>You will need to enter the received code in the cashier of the game client:  Poker lobby - cashier - promo code.</li>
                                    </ol>
                                </div>
                                <div>
                                    <h3>Instructions for receipt:</h3>
                                    <ol className={styles.receipt_list}>
                                        <li>Register using the button above with the code when registering  PEKARSTAS</li>
  <li>Make  your first deposit  from ₽ 1,000 to ₽ 50,000;</li>
  <li>The bonus will be activated automatically immediately after the deposit and you can start wagering it.</li>
                                    </ol>
                                </div></div>
                                <div className={styles.choose_loyality_program}>
                                    <h1>Which loyalty program to choose at Pokerdom
                                    </h1>
                                </div>
                                <div className={styles.choose_loyality_program_desc}>
                                    <p>By default, all Pokerdom players will be automatically connected to the loyalty program "100 steps to a million" . But if you generate a large amount of rake, then it will be more profitable for you to switch to the loyalty program "Time Machine". To do this, you need to:</p>
                                <ol className={styles.choose_loyality_program_desc}><li>Login to Pokerdom client</li>
                                <li>Go to the "Cashier" section</li>
                                <li>Next, click the "Promo code" button</li>
                                <li>In the window that opens, enter the code TIMEMACHINE</li>
                                </ol>
                                <p className={styles.choose_loyality_program_para}>If the player wants to return to the terms of the loyalty program "100 steps to a million" , then in the "Promo code" section he will need to enter the code ONEHUNDRED .

</p>
                                </div>
        </div>
   		
            
	);
};

export default ContentDeposit;

