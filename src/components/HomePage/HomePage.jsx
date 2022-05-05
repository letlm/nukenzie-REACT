import circleCenter from "../img/circleCenter.png";
import nuKenzie from "../img/nuKenzie.png";
import ButtonComp from "../Button/Button";
import "./HomePage.css";

const HomePage = ({ login }) => {
  return (
    <>
      <div className="appText">
        <img className="nuKenzie" src={nuKenzie} alt="Nu Kenzie" />
        <span className="textCenter">
          Centralize o controle das suas finanças
        </span>
        <span className="textSob">de forma rápida e segura</span>
        <ButtonComp className={"buttonStart"} onClick={() => login()}>
          Iniciar
        </ButtonComp>
      </div>

      <div className="imgCenter">
        <img src={circleCenter} alt="Circulo inicial com cards" />
      </div>
    </>
  );
};

export default HomePage;
