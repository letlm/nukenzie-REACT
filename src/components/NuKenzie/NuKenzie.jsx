import Header from "../Header/Header";
import Form from "../Form/Form";
import List from "../List/List";
import TotalMoney from "../TotalMoney/TotalMoney";
import "./NuKenzie.css";
import ButtonComp from "../Button/Button";
import nuKenzie from "../img/nuKenzieTwo.png";
import NoneRegister from "../NoneRegister/NoneRegister";

const PageRegister = ({
  logout,
  listTransactions,
  setListTransactions,
  delet,
  showAll,
  showEntry,
  showExpense,
}) => {
  return (
    <div className="bodyKenzie">
      <Header className={"headerNu"}>
        <nav>
          <img className="imgLogo" src={nuKenzie} alt="Nu Kenzie" />
        </nav>
        <ButtonComp className={"btnStart"} onClick={() => logout()}>
          Inicio
        </ButtonComp>
      </Header>

      <div className="restrictedCenter">
        <div className="restrictedLeft">
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          ></Form>
          <TotalMoney listTransactions={listTransactions}></TotalMoney>
        </div>
        <div className="restrictedRigth">
          {listTransactions.length === 0 ? (
            <NoneRegister></NoneRegister>
          ) : (
            <List
              listTransactions={listTransactions}
              delet={delet}
              showAll={showAll}
              showEntry={showEntry}
              showExpense={showExpense}
            ></List>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageRegister;
