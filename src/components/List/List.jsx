import "./List.css";
import ButtonComp from "../Button/Button";
import Header from "../Header/Header";
import Card from "../Card/Card";

const List = ({ listTransactions, delet, showAll, showEntry, showExpense }) => {
  return (
    <div className="despesas">
      <Header className="resButtons">
        <span className="resumo">Resumo financeiro</span>
        <ButtonComp className={"btnAll"} onClick={showAll}>
          Todos
        </ButtonComp>
        <ButtonComp className={"btnEnt"} onClick={showEntry}>
          Entradas
        </ButtonComp>
        <ButtonComp className={"btnDes"} onClick={showExpense}>
          Despesas
        </ButtonComp>
      </Header>
      <ul>
        <Card listTransactions={listTransactions} delet={delet}></Card>
      </ul>
    </div>
  );
};

export default List;
