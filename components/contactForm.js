import { useTranslation } from "next-i18next";

export default function ContactForm({ className }) {
  const { t } = useTranslation();

  return (
    <form
      method="POST"
      netlify-honeypot="bot-field"
      name="contact-form"
      data-netlify="true"
      className={className}
    >
      <input type="hidden" name="form-name" value="contact-form" />
      <p class="hidden">
        <label>
          Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
      </p>
      <div>
        <label htmlFor="name">{t("contact.form name")}</label>
        <input
          id="name"
          name="name"
          className="mt-1 h-9 w-full p-3 text-darkorange"
          required
          type="text"
        />
      </div>
      <div>
        <label htmlFor="email">{t("contact.form message")}</label>
        <input
          id="email"
          type="email"
          name="email"
          className="mt-1 h-9 w-full p-3 text-darkorange"
          required
        />
      </div>
      <div>
        <label htmlFor="message">{t("contact.form message")}</label>
        <textarea
          id="message"
          name="message"
          className="mt-1 min-h-[10rem] w-full flex-grow resize-none p-3 text-darkorange"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="mt-auto flex cursor-pointer items-center justify-center rounded-full bg-darkorange p-4 transition-all hover:-translate-y-2 active:translate-y-2 active:bg-brightorange"
      >
        {t("contact.form button")}
      </button>
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
