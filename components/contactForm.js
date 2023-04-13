import { useTranslation } from "next-i18next";

export default function ContactForm({ className }) {
  const { t } = useTranslation();

  return (
    <form method="POST" name="contact-form" data-netlify="true">
      <input type="hidden" name="form-name" value="contact-form" />
      <label htmlFor="name">Name *</label>
      <input id="name" name="name" required type="text" />
      <label htmlFor="company">Company *</label>
      <input id="company" name="company" required type="text" />
      <label htmlFor="email">E-mail Address *</label>
      <input id="email" type="email" name="email" required />
      <label htmlFor="message">Message *</label>
      <textarea id="message" name="message" required></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
