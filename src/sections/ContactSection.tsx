import { FormEvent, useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { siteContent } from '../content/siteContent';
import styles from './ContactSection.module.css';

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name')?.toString() ?? '';
    const email = formData.get('email')?.toString() ?? '';
    const message = formData.get('message')?.toString() ?? '';
    const subject = encodeURIComponent('Axiomplay Studios inquiry');
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

    window.location.href = `mailto:${siteContent.contact.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className={`section ${styles.section}`}>
      <div className="container">
        <SectionHeader title={siteContent.contact.title} subtitle={siteContent.contact.subtitle} />
        <div className={styles.grid}>
          <div className={styles.info}>
            <h3>Contact</h3>
            <a href={`mailto:${siteContent.contact.email}`}>{siteContent.contact.email}</a>
            <div className={styles.socials}>
              {siteContent.contact.socials.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                  {social.label}
                </a>
              ))}
            </div>
            {submitted && (
              <p className={styles.confirmation}>
                If your email client did not open, contact us directly at {siteContent.contact.email}.
              </p>
            )}
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label>
              Name
              <input name="name" type="text" placeholder="Your name" required />
            </label>
            <label>
              Email
              <input name="email" type="email" placeholder="you@email.com" required />
            </label>
            <label>
              Message
              <textarea name="message" rows={5} placeholder="Tell us about your project" required />
            </label>
            <button type="submit">Send via email</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
