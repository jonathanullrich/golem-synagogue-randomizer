import { useEffect, useState } from "react";

type BoardProps = {
    playerCount: number; 
}

function Board(props: BoardProps) {

    const [board, setBoard] = useState<string[][]>([[], [], [], [], []]);

    useEffect(() => {
        let marbles: string[];
        switch (props.playerCount) {
            case 2: 
                marbles = ["white", "white", "white", "black", "red", "red", "red", "blue", "blue", "blue", "yellow", "yellow", "yellow"];
                break; 
            default:
                marbles = ["white", "white", "white", "black", "red", "red", "red", "blue", "blue", "blue", "yellow", "yellow", "yellow"];
        }
        let arr: string[][] = Array.from([[], [], [], [], []]);
        for (let marble of marbles) {
            let slot = Math.floor(Math.random() * 5);
            arr[slot].push(marble);
        }
        setBoard(arr);
    }, []);

    const removeMarble = (column: number, color: string) => {
        let arr = Array.from(board);
        arr[column] = arr[column].filter(item => item !== color);
        setBoard(arr);
    }

    return (
        <div className='board'>
            <div className='grid'>
                {board.map((column, i) => {
                    return (
                        <div className="column" key={`${i}`}>
                            {column.map((color, j) => {
                                return (
                                    <div 
                                        className={`marble ${color}`}
                                        onClick={() => removeMarble(i, color)}
                                        key={`${i}${j}`}>
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Board;