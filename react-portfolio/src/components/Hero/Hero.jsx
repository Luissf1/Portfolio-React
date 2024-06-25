import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Luis</h1>
        <p className={styles.description}>
          I am a versatile developer specializing in both web and mobile
          applications. With expertise in C#, Flutter, and PHP Laravel, I create
          dynamic and user-friendly solutions across various platforms. My
          experience in SQL database management ensures robust and efficient
          data handling for all my projects. Whether building from the ground up
          or enhancing existing applications, I am committed to delivering
          high-quality, scalable, and maintainable software that meets diverse
          client needs.
        </p>
        <a href="mailto:luis.silva1252@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
