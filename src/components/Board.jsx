import { useState } from "react"
import Square from "./Square"

const Board = () => {

  const [squares, setSquares] = useState(Array(9).fill(null))

  const handleClick = (i) => {
    const copySquares = squares.slice()
    copySquares[i] = "X"
    setSquares(copySquares)
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
    </section>
  )
}

export default Board