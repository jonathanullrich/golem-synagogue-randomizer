import { useEffect, useState } from 'react';

type BoardProps = {
    playerCount: number; 
    counter: number;
    setCounter: (counter: number) => void; 
}

function Board(props: BoardProps) {

    const [board, setBoard] = useState<string[][]>([[], [], [], [], []]);

    useEffect(() => {
        let marbles: string[];
        if (props.playerCount === 2) {
            marbles = ['white', 'white', 'white', 'black', 'red', 'red', 'blue', 'blue', 'yellow', 'yellow'];
        } else if (props.playerCount === 3) {
            marbles = ['white', 'white', 'white', 'white', 'white', 'black', 'red', 'red', 'blue', 'blue', 'yellow', 'yellow'];
        } else {
            marbles = ['white', 'white', 'white', 'white', 'black', 'red', 'red', 'red', 'blue', 'blue', 'blue', 'yellow', 'yellow', 'yellow'];
        }
        let arr: string[][] = Array.from([[], [], [], [], []]);
        for (let marble of marbles) {
            let slot = Math.floor(Math.random() * 5);
            arr[slot].push(marble);
        }
        setBoard(arr);
    }, []);

    const removeMarble = (i: number, j: number) => {
        let arr = Array.from(board);
        arr[i].splice(j, 1);
        setBoard(arr);
        props.setCounter(props.counter + 1);
    }

    return (
        <div className='synagogue'>
            <div className='board'>
            {board.map((column, i) => {
                return (
                    <div className='column' key={`${i}`}>
                        {column.map((color, j) => {
                            return (
                                <div 
                                    className={`marble ${color}`}
                                    onClick={() => removeMarble(i, j)}
                                    key={`${i}${j}`}>
                                </div>
                            );
                        })}
                    </div>
                );
            })}
            </div>
            <div className='total'>
            {board.map((column, i) => {
                return (
                    <div key={i+100}>{column.length}</div>
                );
            })}
            </div>
        </div>
    )
}

export default Board;