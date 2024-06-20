import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Luis</h1>
        <p className={styles.description}>I'm a data analyst</p>
        <a href="mailto:luis.silva1252@gmail.com" className={styles.contactBtn}>Contact Me</a>
      </div>
      <img src={getImageUrl("hero/heroImage.png")} alt="Hero image" className={styles.heroImg}/>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
