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
  const { tips } = useAppContext();

  return (
    <main className="main-container">
      <Summary />
      <Filter />
      <CardList>
        {tips.map((tip, index) => (
          <TipCard key={index} tip={tip} />
        ))}
      </CardList>
    </main>
  );
};

MainContent.propTypes = {};
