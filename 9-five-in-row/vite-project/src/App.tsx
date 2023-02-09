import { useState } from "react";
import "./App.css";
import History from "./components/History";
import Map from "./components/Map";
import { MAP_SIZE, winnerCombination } from "./settings";

function App() {
  const [mapItems, setMapItems] = useState(
    Array(MAP_SIZE * MAP_SIZE).fill(null)
  );

  const [currentPlayer, setCurrentPlayer] = useState("X");

  const checkWinner = () => {
    winnerCombination.forEach((winnerRow) => {
      let checkPlayer = null;

      winnerRow.forEach((winnerIndex) => {
        checkPlayer = mapItems[winnerIndex];
      });
    });
  };

  const onClickHandler = (index: number): void => {
    if (mapItems[index] !== null) {
      return;
    }

    const newMapItems = [...mapItems];
    newMapItems[index] = currentPlayer;

    setMapItems(newMapItems);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");

    // kdo vyhral?
  };

  return (
    <div className="App">
      <h1>APP</h1>

      <Map
        mapItems={mapItems}
        onClickHandler={onClickHandler}
        currentPlayer={currentPlayer}
      />
      <History />
    </div>
  );
}

export default App;
