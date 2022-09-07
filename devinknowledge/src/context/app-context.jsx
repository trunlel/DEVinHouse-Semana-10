import React from "react";
import { useState } from "react";

const appContext = React.createContext(null);
const ContextProvider = appContext.Provider;

export const useAppContext = () => {
  const context = React.useContext(appContext);
  return context;
};

export const AppContextProvider = ({ children }) => {
  const [allTips, setAllTips] = useState([
    {
      titulo: "Uma dica",
      descricao:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, quo.",
      categoria: "front-end",
      linguagem: "css (flexbox)",
      video: "https://www.youtube.com/watch?v=3elGSZSWTbM",
    },
  ]);
  const [filter, setFilter] = useState(null);

  const createTip = (tip) => {
    setAllTips((pTips = [...pTips, tip]));
  };

  const filterTip = (query) => {
    if (query) {
      setFilter(query);
    } else {
      setFilter(null);
    }
  };

  const tips = filter
    ? allTips.filter((tip) => tip.titulo.includes(filter))
    : allTips;

  return (
    <ContextProvider value={{ filterTip, createTip, tips }}>
      {children}
    </ContextProvider>
  );
};
