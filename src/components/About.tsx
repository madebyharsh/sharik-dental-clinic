import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>

        <div className={styles.imagePlaceholder} aria-hidden="true">
          <span className={styles.icon}>🦷</span>
        </div>

        <div className={styles.content}>
          <span className={styles.label}>About the Doctor</span>
          <h2 className={styles.name}>Dr. Mohd Sharik</h2>
          <p className={styles.qualifications}>BDS &nbsp;·&nbsp; MIDA (C.I.M.S.T)</p>
          <p className={styles.bio}>
            Dr. Mohd Sharik is a qualified and compassionate dental professional
            committed to delivering high-quality oral healthcare to patients of all
            ages. With formal training in modern dental techniques and a focus on
            patient comfort, he brings trusted expertise to every treatment — from
            routine cleanings to advanced smile designing and implants.
          </p>
          <p className={styles.bio}>
            At <strong>Family Dental Care</strong>, the approach is simple: treat
            every patient like family, with honesty, care, and clinical precision.
          </p>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statValue}>7+</span>
              <span className={styles.statLabel}>Years Experience</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>5000+</span>
              <span className={styles.statLabel}>Patients Treated</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>7</span>
              <span className={styles.statLabel}>Services Offered</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}