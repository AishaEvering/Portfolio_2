import { Reveal } from "@/components/utils/Reveal";
import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <section className="section-wrapper" id="contact">
      <div className={styles.footerWrapper}>
        <Reveal width="100%">
          <p className={styles.footer}>
            Copyright &#169; 2024 Aisha Evering. All Rights Reserved.
          </p>
        </Reveal>
      </div>
    </section>
  );
};
