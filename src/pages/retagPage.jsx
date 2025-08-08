import { useState, useEffect } from "react";
import Navbar from "../components/common/navbar/navbar";
import MainContainer from "../layout/mainContainer";
import NewsletterSubscription from "../components/home/subscribe/newsLetterSubscription";
import NewFooter from "../components/common/footer/newFooter";
import Meta from "../Meta";

const RetagPage = () => {
  useEffect(() => { }, []);
  return (
    <div>
      <Meta
        title="Best Poker Rakeback Site India | Win Real Money "
        description="Top Poker Rakeback and Cashback Site in India | Play Online Poker Games in India with Your Choice of Poker Website and Win Real Money 2025."
        link="https://rakebackk.com"
      />

      {/*---Latest Code--*/}
      {/* <Navbar page="home" /> */}

      <MainContainer>
        <div className="container-fluid ContactUS RetagPage">
          <div className="container">
            <div className="row">

              <div className="col-lg-12">
                <div className="Contactform">
                  <div className="ContactInfoleft">
                    <h1 className="mb-3">Retag</h1>
                    <p>We may be able to get your existing poker account retagged to us for a rakeback/VIP program. Please fill in the form below and click submit.</p>
                  </div>
                  <div className=" formsection">
                    <div class="row mb-4">
                      <div className="col-lg-12">
                        <p className="RetagDesc"><b>Please note: </b><br />This process can take up to 2-5 working days to complete so please be patient with us while we work on it. We will email you with details when we have them.
                          If it turns out your account is already tracked/tagged to another affiliate, it will normally be because of a cookie placed on your computer (as a result of clicking a banner/advert for that poker room some time ago). The affiliate you are tagged to is almost certainly NOT a rakeback affiliate and the room will not tell us who it is sorry!</p>
                      </div>
                      <div class="col-md-12 mb-3 mt-3 ">
                        <div className="form-container ">
                          <div className="formControl">
                            <select class="form-control form-select" >
                              <option selected>Select Poker Room</option>
                              <option>Select Poker Room</option>
                              <option>Select Poker Room</option>
                            </select>
                          </div>
                        </div>

                      </div>
                      <div className="col-lg-12 mb-3 text-center">Before we can handle your retag request, please login to your RakeTheRake account or register below.</div>
                    </div>
                    <div class="text-end">
                      <button type="submit" class="btn btn-submit">Login/Signup <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"></path></svg></button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <NewsletterSubscription />
        {/* <NewFooter /> */}
      </MainContainer>
    </div>
  );
};

export default RetagPage;
