import { useTranslation } from "next-i18next";

export default function ContactForm({ className }) {
  const { t } = useTranslation();

  return (
    <form
      data-netlify="true"
      action="/pages/contactFormSubmitted"
      netlify-honeypot="bot-field"
      name="contact"
      method="POST"
      className={className}
    >
      <p class="hidden">
        <label>
          Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
      </p>
      <label>
        {t("contact.form name")}
        <input type="text" className="mt-1 h-9 w-full p-3 text-darkorange" />
      </label>
      <label>
        {t("contact.form email")}
        <input type="email" className="mt-1 h-9 w-full p-3 text-darkorange" />
      </label>
      <label className="flex flex-grow flex-col">
        {t("contact.form message")}
        <textarea className="mt-1 min-h-[10rem] w-full flex-grow resize-none p-3 text-darkorange"></textarea>
      </label>
      <button
        type="submit"
        className="mt-auto flex cursor-pointer items-center justify-center rounded-full bg-darkorange p-4 transition-all hover:-translate-y-2 active:translate-y-2 active:bg-brightorange"
      >
        {t("contact.form button")}
      </button>
    </form>
  );
}
