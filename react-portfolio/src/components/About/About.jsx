import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <LazyLoadImage
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          effect="blur"
          width="100%"
          height="auto"
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <LazyLoadImage
              src={getImageUrl("about/cursorIcon.png")}
              alt="Cursor Icon"
              effect="blur"
              width="100%"
              height="auto"
            />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I am a passionate frontend developer with a knack for creating
                visually appealing and highly functional user interfaces. With a
                strong foundation in HTML, CSS, and JavaScript, I specialize in
                crafting responsive and interactive web applications.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <LazyLoadImage
              src={getImageUrl("about/serverIcon.png")}
              alt="Server Icon"
              effect="blur"
              width="100%"
              height="auto"
            />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I am a dedicated backend developer specializing in C# and SQL.
                With a solid foundation in building efficient and scalable
                server-side applications, I excel at creating robust solutions
                that drive seamless performance.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <LazyLoadImage
              src={getImageUrl("about/uiIcon.png")}
              alt="Ui Icon"
              effect="blur"
              width="100%"
              height="auto"
            />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I am a passionate UI designer with a talent for creating
                intuitive and visually appealing user interfaces. Specializing
                in mobile and web prototypes, I leverage Figma to design
                interactive and user-friendly experiences.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
