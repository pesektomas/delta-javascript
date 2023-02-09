import React, { type ReactElement, useState } from 'react';
import Counters from './Components/Counters';
import NavBar from './Components/NavBar';

class CounterObject {
  readonly id: number;
  readonly value: number;

  constructor(id: number, value: number) {
    this.id = id;
    this.value = value;
  }

  getId(): number {
    return this.id;
  }

  getValue(): number {
    return this.value;
  }
}

export interface CounterInterface {
  id: number;
  value: number;
}

const initCounters: CounterInterface[] = [
  { id: 1, value: 0 },
  { id: 2, value: 0 },
  { id: 3, value: 0 },
  { id: 4, value: 0 },
];

function App(): ReactElement {
  const [counters, setCounters] = useState<CounterInterface[]>(initCounters);

  const handleIncrement = (counter: CounterInterface): void => {
    const updatedCounter = [...counters];
    const index = updatedCounter.indexOf(counter);

    updatedCounter[index] = { ...updatedCounter[index] };

    updatedCounter[index].value++;

    setCounters(updatedCounter);
  };

  const handleDecrement = (counter: CounterInterface): void => {
    const updatedCounters = [...counters];
    const index = updatedCounters.indexOf(counter);
    updatedCounters[index] = { ...updatedCounters[index] };
    updatedCounters[index].value--;

    setCounters(updatedCounters);
  };

  const handleReset = (): void => {
    const updatedCounters = counters.map((c: CounterInterface) => {
      c.value = 0;
      return c;
    });
    setCounters(updatedCounters);
  };

  const handleDelete = (counterId: number): void => {
    const updatedCounters = counters.filter(
      (c: CounterInterface) => c.id !== counterId
    );
    setCounters(updatedCounters);
  };

  const handleRestart = (): void => {
    window.location.reload();
  };

  return (
    <div className="main__wrap">
      <main className="container">
        <div className="card__box">
          <NavBar
            totalCounters={
              counters.filter((c: CounterInterface) => c.value > 0).length
            }
          />
          <Counters
            counters={counters}
            onReset={handleReset}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onDelete={handleDelete}
            onRestart={handleRestart}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
