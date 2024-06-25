import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" />
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
            <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon" />
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
            <img src={getImageUrl("about/uiIcon.png")} alt="Ui Icon" />
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
