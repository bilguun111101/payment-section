import React from 'react'
import css from "./PaymentStyle.module.scss";
import Order from './Build/Order/Order';
import { useState } from 'react';
import clx from "classnames";
import { addScaleCorrector, motion } from "framer-motion";

// import sections 
import Summary from './Build/Summary/Summary';
import ContactInformation from './Build/Contact/ContactInformation';

const Bag = () => {
    const datas = new Array(20).fill(1);
    const [switchSections, setSwitchSections] = useState(false);
    const switchBtn = () => {
        setSwitchSections(true);
    }
  return (
    <motion.div 
        className={css.bagSection}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
    >
        <ContactInformation 
            switchSections={switchSections} 
        />
        <Summary 
            datas={datas} 
            switchBtn={switchBtn} 
            switchSections={switchSections} 
        />
    </motion.div>
  )
}

export default Bag