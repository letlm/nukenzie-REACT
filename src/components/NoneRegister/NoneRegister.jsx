import "./NoneRegister.css";
import NoCard from "../img/NoCard.png";

const NoneRegister = () => {
  return (
    <div className="noneDiv">
      <span className="none">Você ainda não possuim nenhum lançamento</span>
      <img className="card" src={NoCard} alt="Não possui nenhum lançamento" />
      <img className="card" src={NoCard} alt="Não possui nenhum lançamento" />
      <img className="card" src={NoCard} alt="Não possui nenhum lançamento" />
    </div>
  );
};

export default NoneRegister;
