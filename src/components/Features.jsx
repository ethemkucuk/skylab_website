import React from 'react';
import styles from '../styles/Global';


const FeatureCard= ({iconUrl,iconText}) => (
<div className={styles.featureCard}>
    <img src={iconUrl} alt="icon" className={styles.featureImg} />
    <p className={styles.featureText}>{iconText}</p>
  </div>
);
  

const Features = () => {
  return (
    <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.whiteText}`}>
          Empowering Your Design Dreams
          </h1>
          <p  className={`${styles.pText} ${styles.whiteText}`}>Transform Ideas into Masterpieces.</p>
        </div>
        <div className={styles.flexWrap}>
        
        
        </div>
      </div>
    </div>
  );
};

export default Features;