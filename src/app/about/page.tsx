import HeaderComponent from '@/components/common/HeaderComponent';
import Link from 'next/link';
import React from 'react';
import styles from '@/styles/header.module.scss';

const About = (): JSX.Element => {
  return (
    <>
      <HeaderComponent
        rightElements={[
          <button
            key="share"
            className={styles.box}
            onClick={() => {
              alert('지도공유');
            }}
          >
            공유
          </button>,
          <Link key="feedback" href="/feedback" className={styles.box}>
            피드백
          </Link>,
          <Link key="about" href="/about" className={styles.box}>
            서비스소개
          </Link>,
        ]}
      />
      <main>서비스 소개입니다</main>
    </>
  );
};

export default About;
