import { useEffect } from "react";
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
        title="Account Linking — Cashback & Coupons Hub"
        description="Link your existing store accounts or register to start earning cashback and track rewards in one place."
        link="https://cashbackhub.example.com/account-linking"
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
                    <h1 className="mb-3">Account Linking</h1>
                    <p>We may be able to link your existing store accounts to your Cashback Hub profile for tracking and offers. Please fill in the form below and click submit.</p>
                  </div>
                  <div className=" formsection">
                    <div class="row mb-4">
                      <div className="col-lg-12">
                        <p className="RetagDesc"><b>Please note: </b><br />This process can take up to 2-5 working days to complete so please be patient with us while we work on it. We will email you with details when we have them.
                          If it turns out your account is already tracked/tagged to another affiliate, it will normally be because of a cookie placed on your computer (as a result of clicking a banner/advert for that shopping room some time ago). The affiliate you are tagged to is almost certainly NOT a cashback affiliate and the room will not tell us who it is sorry!</p>
                      </div>
                      <div class="col-md-12 mb-3 mt-3 ">
                        <div className="form-container ">
                          <div className="formControl">
                            <select class="form-control form-select" >
                              <option selected>Select Store</option>
                              <option>Select Store</option>
                              <option>Select Store</option>
                            </select>
                          </div>
                        </div>

                      </div>
                      <div className="col-lg-12 mb-3 text-center">Before we can handle your request, please login to your Cashback Hub account or register below.</div>
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
