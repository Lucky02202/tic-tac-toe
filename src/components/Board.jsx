import { useState } from "react"
import Square from "./Square"

const Board = () => {

  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)


  const handleClick = (i) => {
    if (squares[i] || calaculateWinner(squares)) {
      return;
    }
    const copySquares = squares.slice()
    xIsNext ? copySquares[i] = "X" : copySquares[i] = "O"
    setSquares(copySquares)
    setXIsNext(!xIsNext)
  }

  let winner = calaculateWinner(squares)
  let status;
  if (winner) {
    status = "Winner is : " + winner
  }
  else {
    status = "Next Palyer is : " + (xIsNext ? "X" : "O")
  }

  return (
    <section className="text-center">
      <h1 className="text-2xl font-bold">TIC <span className="text-red-500">TAC</span> TOE</h1>
      <div className="flex flex-col justify-center items-center mt-4 space-y-0">
        <div>
          <Square value={squares[0]} onSquareClick={() => { handleClick(0) }} />
          <Square value={squares[1]} onSquareClick={() => { handleClick(1) }} />
          <Square value={squares[2]} onSquareClick={() => { handleClick(2) }} />
        </div>
        <div>
          <Square value={squares[3]} onSquareClick={() => { handleClick(3) }} />
          <Square value={squares[4]} onSquareClick={() => { handleClick(4) }} />
          <Square value={squares[5]} onSquareClick={() => { handleClick(5) }} />
        </div>
        <div>
          <Square value={squares[6]} onSquareClick={() => { handleClick(6) }} />
          <Square value={squares[7]} onSquareClick={() => { handleClick(7) }} />
          <Square value={squares[8]} onSquareClick={() => { handleClick(8) }} />
        </div>
      </div>
      <h1 className="mt-4 text-2xl">{status}</h1>
      <button className="mt-4 text-xl border-2 py-2 px-4 rounded-full hover:border-green-500 hover:text-green-500">
        RELOAD
      </button>
    </section>
  )
}

export default Board

const calaculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 7, 8]
  ]

  for (let i = 0; i < lines.length; i++) {
    let [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}