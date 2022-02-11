import useTranslation from "./useTranslation";

export default function TranslationComponent() {
  const { language, setLanguage, setFallbackLanguage, t } = useTranslation();

  return (
    <section>
      <div>{language}</div>
      <div>{t("hi")}</div>
      <div>{t("bye")}</div>
      <div>{t("nested.value")}</div>
      <button onClick={() => setLanguage("sp")}>Change to Spanish</button>
      <button onClick={() => setLanguage("en")}>Change to English</button>
      <button onClick={() => setFallbackLanguage("sp")}>
        Change FB Language
      </button>
    </section>
  );
}
