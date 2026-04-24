import styles from './Services.module.css';

const services = [
  {
    icon: '🪥',
    title: 'Tooth Cleaning',
    description: 'Professional scaling and polishing to remove plaque and keep your gums healthy.',
  },
  {
    icon: '🦷',
    title: 'Tooth Extraction',
    description: 'Safe and painless removal of damaged or impacted teeth with minimal discomfort.',
  },
  {
    icon: '🔬',
    title: 'Root Canal Treatment',
    description: 'Advanced nerve treatment to save infected teeth and eliminate deep-rooted pain.',
  },
  {
    icon: '⚡',
    title: 'Laser Filling',
    description: 'Precise cavity treatment using laser technology for faster healing and less pain.',
  },
  {
    icon: '😁',
    title: 'Ortho Treatment',
    description: 'Braces and aligners to straighten teeth and correct bite for a confident smile.',
  },
  {
    icon: '🔩',
    title: 'Dental Implant',
    description: 'Permanent, natural-looking tooth replacements anchored securely into the jawbone.',
  },
  {
    icon: '✨',
    title: 'Smile Designing',
    description: 'Cosmetic procedures tailored to give you a beautiful, symmetrical, radiant smile.',
  },
];

export default function Services() {
  return (
    <section className={styles.services} id="services" aria-labelledby="services-heading">
      <div className={styles.container}>

        <header className={styles.header}>
          <span className={styles.label} role="note">What We Offer</span>
          <h2 className={styles.heading} id="services-heading">Our Dental Services</h2>
          <p className={styles.subtext}>
            From routine care to advanced cosmetic procedures — all under one roof.
          </p>
        </header>

        <ul className={styles.grid} role="list" aria-label="List of dental services">
          {services.map((service) => (
            <li key={service.title} className={styles.card}>
              <div className={styles.iconWrap} aria-hidden="true">
                <span className={styles.icon}>{service.icon}</span>
              </div>
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.description}>{service.description}</p>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}