import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.text}>
            <h2 className={styles.title}>
              About <span className="text-brand">Me</span>
            </h2>
            <p className={styles.description}>
              I'm a passionate full-stack developer with a love for creating clean, 
              efficient, and user-friendly web applications. With expertise in modern 
              technologies like React, TypeScript, and Node.js, I enjoy turning complex 
              problems into simple, beautiful solutions.
            </p>
            <p className={styles.description}>
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or sharing knowledge with the 
              developer community.
            </p>
            <div className={styles.skills}>
              <h3 className={styles.skillsTitle}>Technologies I Work With</h3>
              <div className={styles.skillsGrid}>
                {[
                  'React', 'TypeScript', 'Next.js', 'Node.js',
                  'Supabase', 'PostgreSQL', 'Vercel', 'Git',
                  'HTML', 'CSS', 'JavaScript', 'Python'
                ].map((skill) => (
                  <span key={skill} className={styles.skillTag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
