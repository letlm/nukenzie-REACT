import "./App.css";
import { useState } from "react";
import HomePage from "./components/HomePage/HomePage";
import NuKenzie from "./components/NuKenzie/NuKenzie";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const [listTransactions, setListTransactions] = useState([]);

  function login() {
    setIsLoggedIn(false);
  }

  function logout() {
    setIsLoggedIn(true);
  }

  function delet(deletes) {
    const filterDelete = listTransactions.filter((transaction) => {
      return transaction !== deletes;
    });
    setListTransactions([...filterDelete]);
  }

  function showAll() {
    const filter = listTransactions.filter((all) => {
      all.visible = true;
      return all;
    });
    setListTransactions(filter);
  }

  function showEntry() {
    const filter = listTransactions.filter((entry) => {
      if (entry.type === "Entrada") {
        entry.visible = true;
      } else {
        entry.visible = false;
      }
      return entry;
    });
    setListTransactions(filter);
  }

  function showExpense() {
    const filter = listTransactions.filter((expense) => {
      if (expense.type === "Despesa") {
        expense.visible = true;
      } else {
        expense.visible = false;
      }
      return expense;
    });
    setListTransactions(filter);
  }

  return (
    <div className="App">
      {isLoggedIn ? (
        <div className="appStart">
          <HomePage login={login} />
        </div>
      ) : (
        <div className="pageRegister">
          <NuKenzie
            setIsLoggedIn={setIsLoggedIn}
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
            delet={delet}
            showAll={showAll}
            showEntry={showEntry}
            showExpense={showExpense}
            logout={logout}
          ></NuKenzie>
        </div>
      )}
    </div>
  );
}

export default App;
