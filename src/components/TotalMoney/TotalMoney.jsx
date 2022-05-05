import "./TotalMoney.css";

const TotalMoney = ({ listTransactions }) => {
  const reduceValue = () => {
    const filterMoney = [];
    for (const keys in listTransactions) {
      if (
        listTransactions[keys].type === "Entrada" &&
        listTransactions[keys].value > 0
      ) {
        filterMoney.push(listTransactions[keys].value);
      } else if (listTransactions[keys].type === "Despesa") {
        filterMoney.push(-listTransactions[keys].value);
      }
    }

    const some = filterMoney.reduce((acc, value) => {
      acc += parseInt(value);
      return acc;
    }, 0);
    return some;
  };
  reduceValue();
  return (
    <>
      <div className="valuePrice">
        <div className="priceText">
          <span className="total">Valor total:</span>
          <span className="totalText">O valor se refere ao saldo</span>
        </div>
        <span className="valueTotal">$ {reduceValue()}</span>
      </div>
    </>
  );
};

export default TotalMoney;
