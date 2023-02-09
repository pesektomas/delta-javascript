import React, {useEffect, useState} from 'react'
import './App.css'

import click1 from './assets/click1.wav';
import click2 from './assets/click2.wav';

const click1Audio = new Audio(click1);
const click2Audio = new Audio(click2);

const beatsPerMeasure = 4;

const App2 = (): React.ReactElement => {

    const [playing, setPlaying] = useState<boolean>(false);
    const [, setCount] = useState<number>(0);
    const [bpm, setBpm] = useState<number>(100);

    useEffect(() => {
        let timer: number | null = null;

        if (playing) {
            timer = !timer && setInterval(playClick, (60 / bpm) * 1000);
            setCount(0);
        }

        return () => {
            timer && clearInterval(timer);
        };
    }, [bpm, playing]);

    const bpmChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setBpm(parseInt(event.currentTarget.value, 10));
    }

    const startStopHandler = (): void => {
        setPlaying(playing => !playing);
    }

    const playClick = async (): Promise<void> => {
        setCount(prevCount => {
            prevCount % beatsPerMeasure === 0 ? click2Audio.play() : click1Audio.play();

            return (prevCount + 1) % beatsPerMeasure;
        });
    };

    return (
        <div className="metronome">
            <div className="bpm-slider">
                <div>{bpm} BPM</div>
                <input type="range" min="60" max="240" value={bpm} onChange={bpmChangeHandler} />
            </div>
            <button onClick={startStopHandler}>
                {playing ? 'Stop' : 'Start'}
            </button>
        </div>
    )
}

export default App2
