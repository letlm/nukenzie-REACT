import { useState } from "react";
import ButtonComp from "../Button/Button";
import "./Form.css";

const Form = ({ listTransactions, setListTransactions }) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("Entrada");

  function addTransactions(newDescription, newValue, newType) {
    const finances = {
      description: newDescription,
      type: newType,
      value: newValue,
      visible: true,
    };
    setListTransactions([...listTransactions, finances]);
  }

  return (
    <>
      <form onSubmit={(event) => event.preventDefault()}>
        <div className="first">
          <label>Descrição</label>
          <input
            type="text"
            placeholder="Digite aqui sua descrição"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <span>Ex: Compra de roupas</span>
        </div>
        <div className="seconds">
          <div className="second">
            <label>Valor</label>
            <input
              className="inputPlace"
              type="number"
              placeholder="R$"
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />
          </div>
          <div className="three">
            <label>Tipo de valor</label>
            <select
              value={type}
              name="select"
              onChange={(event) => setType(event.target.value)}
            >
              <option value="Entrada">Entrada</option>
              <option value="Despesa">Despesa</option>
            </select>
          </div>
        </div>

        <ButtonComp
          type="submit"
          onClick={() =>
            addTransactions(
              description,
              value,
              type,
              setDescription(""),
              setValue(""),
              setType("Entrada")
            )
          }
          className={"buttonInsert"}
        >
          Inserir valor
        </ButtonComp>
      </form>
    </>
  );
};

export default Form;
