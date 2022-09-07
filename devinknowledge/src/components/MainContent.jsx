import PropTypes from "prop-types";
import { useAppContext } from "../context/app-context";
import { CardList } from "./CardList";
import { Filter } from "./Filter";
import { Summary } from "./Summary";
import { TipCard } from "./TipCard";

const umaDica = {
  titulo: "Uma dica",
  descricao:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, quo.",
  categoria: "front-end",
  linguagem: "css (flexbox)",
  video: "https://www.youtube.com/watch?v=3elGSZSWTbM",
};

export const MainContent = ({}) => {
  const context = useAppContext();
  console.log(context);

  return (
    <main className="main-container">
      <Summary />
      <Filter />
      <CardList>
        <TipCard tip={umaDica} />
        <TipCard tip={umaDica} />
        <TipCard tip={umaDica} />
        <TipCard tip={umaDica} />
      </CardList>
    </main>
  );
};

MainContent.propTypes = {};
