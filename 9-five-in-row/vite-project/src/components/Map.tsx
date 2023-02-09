import { ReactElement } from "react";
import "./Map.css";

interface MapPropsInterface {
  mapItems: string[] | null[];
  onClickHandler: (index: number) => void;
  currentPlayer: string;
}

export default function Map(props: MapPropsInterface): ReactElement {
  return (
    <div>
      <div className="mapWrapper">
        {props.mapItems.map((value, index) => {
          return (
            <div
              key={index}
              className="mapItem"
              onClick={() => props.onClickHandler(index)}
            >
              {index}: {value}
            </div>
          );
        })}
      </div>

      <div>Next player: {props.currentPlayer}</div>
      <button>RESET</button>
    </div>
  );
}
