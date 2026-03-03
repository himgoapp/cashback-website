import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import styles from './newsLetterSubscription.module.css';
import shoppingchip from '../../../assets/Logos_and_illustration/Chip_red.svg';
import subscriberBackgroundTop from "../../../assets/Logos_and_illustration/subscriberBackgroundTop.svg"
import SuccessSubscribe from "../../../assets/Logos_and_illustration/SuccessSubscribe.svg"
import { CreateSubscriber } from '../../../servicefile/subscriberservice';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

 const handleCreate = async (e) => {
  e.preventDefault();
  if (!email) return;

  setIsSubmitting(true);
  try {
    const response = await CreateSubscriber({ email });
    console.log("Subscriber created successfully:", response);
    setIsSuccess(true);

    setTimeout(() => {
      setIsSuccess(false);
      setEmail('');
    }, 3000);

  } catch (error) {
    console.error("Error creating subscriber:", error);
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <>
      <div className="container-fluid CashbackNewsletter">
          <div className='container'>
              <div className='row'>
                  <div className="col-lg-8 text-left GetStartedhead">
                      <h1 className="title">
                            Subscribe to our <br/> Newsletter 
                      </h1>
                      <p className="subtitle">
                         Join thousands of shopping players staying  ahead with tips, offers, and platform updates. No spam, just pure value.
                      </p>  
                  </div>
                  <div className='col-lg-4 d-flex align-items-center'>
                      <form onSubmit={handleCreate} className="form">
                          <div className="inputContainer">
                            <input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="Enter your email address"
                              className="emailInput"
                              required
                              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                              disabled={isSuccess}
                            />
                            {isSuccess ? (
                              <img
                                src={SuccessSubscribe}
                                alt="Subscribed Successfully"
                                style={{ width: '36px', height: '36px' }}
                              />
                            ) : (
                              <button
                                type="submit"
                                className="submitButton"
                                disabled={isSubmitting}
                              >
                                {isSubmitting ? 'Submitting...' : 'Get in touch'}
                              </button>
                            )}

                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>


      {/* <div className={styles.container}>
        <img
          src={subscriberBackgroundTop}
          className={styles.decorativeBackground}
        />
        <div className={styles.card}>
          <div className={styles.chipContainer}>
            <div className={styles.chip}>
              <img src={shoppingchip} />
            </div>
          </div>

          <div className={styles.content}>
            <h1 className={styles.subtitle}>Subscribe to our Newsletter</h1>

            <p className={styles.description}>
              Join thousands of shopping players staying<br></br> ahead with tips, offers, and platform updates.<br></br> No spam, just pure value.
            </p>

            <form onSubmit={handleCreate} className={styles.form}>
              <div className={styles.inputContainer}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className={styles.emailInput}
                  required
                  pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                  disabled={isSuccess}
                />
                {isSuccess ? (
                  <img
                    src={SuccessSubscribe}
                    alt="Subscribed Successfully"
                    style={{ width: '36px', height: '36px' }}
                  />
                ) : (
                  <button
                    type="submit"
                    className={styles.submitButton}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Get in touch'}
                  </button>
                )}

              </div>
            </form>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default NewsletterSubscription;