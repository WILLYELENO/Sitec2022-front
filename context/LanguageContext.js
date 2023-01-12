import { createContext, useState } from "react";

const LanguageContext = createContext();
const initialLanguage = "es";

const translations = {
  es: {
    Inicio: "Inicio",
    Acerca: "Acerca De",
    Contacto: "Contacto",
    Novedades: "Novedades",
    IniciarSesion: "Iniciar Sesion",
    CerrarSesion: "Cerrar Sesion"

  },

  en: {
    Inicio: "Index",
    Acerca: "About",
    Contacto: "Contact",
    Novedades: "News",
    IniciarSesion: "Login",
    CerrarSesion: "Logout"
  },
};

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(translations[language]);
  const handleLanguage = (e) => {
    console.log(e.target.value);
    if (e.target.value === "es") {
      setLanguage("es");
      setTexts(translations.es);
    } else {
      setLanguage("en");
      setTexts(translations.en);
    }
  };
  const data = { texts, handleLanguage };
  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
}
export { LanguageProvider };
export default LanguageContext;