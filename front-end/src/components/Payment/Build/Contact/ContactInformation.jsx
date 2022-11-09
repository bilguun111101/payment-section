import React from 'react';
import clx from "classnames";
import { useState } from 'react';
import { motion } from 'framer-motion';
import ci from "../../styles/ContactStyle.module.scss";

// import images ((((()))))
import pocketLogo from "./pocket.png";
import storeLogo from "./storePay.png";
import creditCartLogo from "./credit.png";

const ContactInformation = props => {
    const { switchSections } = props;
    const [pocket, setPocket] = useState(false);
    const [credit, setCredit] = useState(false);
    const [storePay, setStorePay] = useState(false);
  return (
    <motion.div 
        className={clx(ci.bagSection__contactInformation)} 
        initial={{ opacity: 1, x: 0, transitionDuration: '0.1s', transition: { x: 0.2 } }}
        exit={{ x: '100%' }}
        animate={switchSections && { opacity: 1, x: '100%' }}
    >
        <div className={ci.bagSection__contactInformation__container}>
            <h1 className={ci.title}>{!switchSections ? "Contact information": "Payment method"}</h1>
            <div className={clx(ci.emailSection)}>
                {
                    !switchSections ? 
                        <>
                            <input type="email" placeholder="Your email *" className={ci.emailSection__emailInput} />
                            <div className={ci.emailSection__checkBox}>
                                <input type="checkbox"/>
                                <p>Receive occasional newsletter</p>
                            </div>
                        </>
                    :
                        <>
                        </>
                }
            </div>

            <div className={clx(ci.importantInformation)}>
                <h3 className={clx(ci.addressTitle, switchSections && ci.removeBtn)}>Shipping address</h3>

                <div className={clx(ci.importantInformation__register, !switchSections && ci.banks)}>
                    {
                        !switchSections ? 
                            <>
                                <input type="text" name="" id="" placeholder="First name*"/>
                                <input type="text" name="" id="" placeholder="Last name*" />
                                <input type="text" name="" id="" placeholder="Phone number*" />
                                <input type="text" name="" id="" placeholder="Postal code" />
                                <input type="text" name="" id="" className={ci.addressInput} placeholder="Address" />
                            </>
                        :
                            <>
                                <>
                                    <div className={ci.importantInformation__register__chooseOrganization}>
                                        <div className={ci.checkBox}>
                                            <div className={clx(ci.button, credit && ci.buttonActive)} onClick={(() => setCredit(!credit))} />
                                            <p>Credit card</p>
                                        </div>
                                        <img src={creditCartLogo} alt="credit card" />
                                    </div>
                                    <div className={ci.importantInformation__register__chooseOrganization}>
                                        <div className={ci.checkBox}>
                                            <div className={clx(ci.button, pocket && ci.buttonActive)} onClick={(() => setPocket(!pocket))} />
                                            <p>Pocket</p>
                                        </div>
                                        <img src={pocketLogo} alt="pocket" />
                                    </div>
                                    <div className={ci.importantInformation__register__chooseOrganization}>
                                        <div className={ci.checkBox}>
                                            <div className={clx(ci.button, storePay && ci.buttonActive)} onClick={(() => setStorePay(!storePay))} />
                                            <p>Store pay</p>
                                        </div>
                                        <img src={storeLogo} alt="store pay" />
                                    </div>
                                </>
                            </>
                    }
                </div>
                {
                    !switchSections ? 
                        <>
                            <p>Receive occasional newsletter billing address same as shipping address</p>
                            <div className={ci.importantInformation__ship__checkBox}>
                                <input type="checkbox" />
                                <p>Billing address same as shipping address</p>
                            </div>
                            <div className={ci.importantInformation__ship__checkBox}>
                                <input type="checkbox" />
                                <p>I have read and accept the&nbsp; <p className={ci.blackColorFont}>term & conditions</p></p>
                            </div>
                        </>
                    :
                        <div className={clx(ci.importantInformation__payBtnSection)}>
                            <button className={ci.importantInformation__payBtnSection__payBtn}>Pay now</button>
                            <div className={ci.importantInformation__payBtnSection__footerSection}>
                                <p>Secure payment via Stripe</p>
                                <img src={creditCartLogo} alt="" />
                            </div>
                        </div>
                }
            </div>
        </div>
    </motion.div>
  )
}

export default ContactInformation