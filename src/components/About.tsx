import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.about} id="about" aria-labelledby="about-heading">
      <div className={styles.container}>

        <div className={styles.avatar}>
          <div
            className={styles.imagePlaceholder}
            role="img"
            aria-label="Illustration representing Dr. Mohd Sharik, dental professional"
          >
            <span className={styles.icon} aria-hidden="true">🦷</span>
          </div>
        </div>

        <div className={styles.content}>
          <span className={styles.label}>About the Doctor</span>
          <h2 className={styles.name} id="about-heading">Dr. Mohd Sharik</h2>
          <p className={styles.qualifications}>
            <abbr title="Bachelor of Dental Surgery">BDS</abbr>
            &nbsp;·&nbsp;
            <abbr title="Member of Indian Dental Association — Certificate in Implant and Modern Smile Techniques">
              MIDA (C.I.M.S.T)
            </abbr>
          </p>
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

          <dl className={styles.stats} aria-label="Clinic statistics">
            <div className={styles.stat}>
              <dt className={styles.statLabel}>Experience</dt>
              <dd className={styles.statValue}>7+ Yrs</dd>
            </div>
            <div className={styles.stat}>
              <dt className={styles.statLabel}>Patients Treated</dt>
              <dd className={styles.statValue}>5000+</dd>
            </div>
            <div className={styles.stat}>
              <dt className={styles.statLabel}>Services</dt>
              <dd className={styles.statValue}>7</dd>
            </div>
          </dl>
        </div>

      </div>
    </section>
  );
}