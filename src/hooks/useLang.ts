import { useEffect, useState } from "react";

// <select><option> text is rendered natively by the browser and ignores CSS on
// nested elements, so anywhere that needs a localized <option> (unlike the
// rest of the page, which uses dual i18n-en/i18n-zh spans) needs actual
// JS-driven language state instead.
export const useLang = () => {
  const [lang, setLang] = useState<"en" | "zh">("en");

  useEffect(() => {
    setLang((document.documentElement.dataset.lang as "en" | "zh") || "en");

    const handler = (event: Event) => setLang((event as CustomEvent<"en" | "zh">).detail);
    window.addEventListener("ntuqc:lang-change", handler);
    return () => window.removeEventListener("ntuqc:lang-change", handler);
  }, []);

  return lang;
};
