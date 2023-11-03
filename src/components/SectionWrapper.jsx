import React from 'react';
import assets from '../assets';
import styles from '../styles/Global';
import Button from './Button';

const SectionWrapper = ({
  title,
  description,
  showBtn,
  mockupImg,
  banner,
  reverse,
}) => {
  return (
    <div
      className={`min-h-screen ${styles.section} ${
        reverse ? styles.bgWhite : styles.bgPrimary
      } ${banner}`}
    >
      <div
        className={`flex items-center w-11/12 sm:w-full md:w-3/4 ${
          reverse ? styles.boxReverseClass : styles.boxClass
        }`}
      >
        <div
          className={`${styles.descDiv} ${
            reverse ? 'fadeRightMini' : 'fadeLeftMini'
          } ${reverse ? styles.textRight : styles.textLeft}`}
        >
          <h1
            className={`${styles.h1Text} ${
              reverse ? styles.blackText : styles.whiteText
            }`}
          >
            {title}
          </h1>
          <p
            className={`${styles.descriptionText}  ${
              reverse ? styles.blackText : styles.whiteText
            }`}
          >
            {description}
          </p>
          {showBtn && (
            <Button
              assetUrl={assets.expo}
              link='https://www.yildizskylab.com/'
            />
          )}
        </div>
        <div className={`flex-1 ${styles.flexCenter} p-8 sm:px-0`}>
          <img
            src={mockupImg}
            alt='mockup'
            className={`${reverse ? 'fadeLeftMini' : 'fadeRightMini'} ${
              styles.sectionImg
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper;
