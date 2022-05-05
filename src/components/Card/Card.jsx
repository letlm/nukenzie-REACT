import "./Card.css";
import ButtonComp from "../Button/Button";
import ButtonTrash from "../img/ButtonTrash.png";

const Card = ({ listTransactions, delet }) => {
  function filterCards() {
    const cardsTransactions = listTransactions.map((transaction, index) => {
      if (
        transaction.type === "Entrada" &&
        transaction.value > 0 &&
        transaction.visible === true
      ) {
        const { description, type, value } = transaction;
        return (
          <li key={index} className="liEnter">
            <div className="textDescription">
              <span className="description">{description}</span>
              <span className="type">{type}</span>
            </div>
            <span className="value">R$ {value}</span>
            <ButtonComp
              className={"btnDelete"}
              onClick={() => delet(transaction)}
            >
              <img src={ButtonTrash} alt="Botão de deletar despesa" />
            </ButtonComp>
          </li>
        );
      }
      if (
        transaction.type === "Despesa" &&
        transaction.value > 0 &&
        transaction.visible === true
      ) {
        const { description, type, value } = transaction;
        return (
          <div className="divUlDespesa">
            <li key={index} className="liDespesa">
              <div className="textDescriptionDespesa">
                <span className="descriptionDespesa">{description}</span>
                <span className="typeDespesa">{type}</span>
              </div>

              <span className="valueDespesa">- R$ {value}</span>
              <ButtonComp
                className={"btnDeleteDespesa"}
                onClick={() => delet(transaction)}
              >
                <img src={ButtonTrash} alt="Botão de deletar despesa" />
              </ButtonComp>
            </li>
          </div>
        );
      }
    });

    return cardsTransactions;
  }

  return filterCards();
};

export default Card;
