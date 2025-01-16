import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ravi</h1>
        <p className={styles.description}>
        I'm an enthusiastic Java developer with 3 years of experience and a Certified Scrum Product Owner (CSPO) .
        Reach out if you'd like to learn more!
        </p>
        <a href="mailto:k.ravidahiya98@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src="assets\hero\Image.png"
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
