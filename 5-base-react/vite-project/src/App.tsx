import React, {ReactElement, useRef, useState} from 'react'
import './App.css'

import click1 from './assets/click1.wav';
import click2 from './assets/click2.wav';

const click1Audio = new Audio(click1);
const click2Audio = new Audio(click2);

const App = (): ReactElement => {

    const [playing, setPlaying] = useState<boolean>(false);

    const [, setCount] = useState<number>(0);
    const [bpm, setBpm] = useState<number>(100);
    const [beatsPerMeasure, setBeatsPerMeasure ] = useState<number>(4);

    const timer = useRef<number>();

    const handleBpmChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const bpm = parseInt(event.currentTarget.value, 10)
        if (playing) {
            clearInterval(timer.current);
            timer.current = setInterval(playClick, (60 / bpm) * 1000);

            setCount(0)
            setBpm(bpm);
        } else {
            setBpm(bpm);
        }
    }

    const playClick = async () => {
        setCount(prevCount => {

            if (prevCount % beatsPerMeasure === 0) {
                click2Audio.play();
            } else {
                click1Audio.play();
            }

            return (prevCount + 1) % beatsPerMeasure;
        });
    };

    const startStopHandler = () => {
        if (playing) {
            clearInterval(timer.current);
            setPlaying(false)
        } else {
            timer.current = setInterval(
                playClick,
                (60 / bpm) * 1000
            );

            setPlaying(true);
            setCount(0);
        }
    };

    return (
        <div className="metronome">
            <div className="bpm-slider">
                <div>{bpm} BPM</div>
                <input type="range" min="60" max="240" value={bpm} onChange={handleBpmChange} />
            </div>
            <button onClick={startStopHandler}>
                {playing ? 'Stop' : 'Start'}
            </button>
        </div>
    )
}

export default App
