import React, { useState, useEffect } from 'react'

const GameBoard = ({ user, startingBoard }) => {
  const [board, setBoard] = useState([])
  let boardJsx
  useEffect(() => {
    console.log('GameBoard effect function')
    console.log('Board is, ', startingBoard)
    const newBoardJsx = new Array(81)
    boardJsx = newBoardJsx.map((cell, index) => (
      <input
        key={index}
        id={index}
        className="cell"
        value={startingBoard[index]}
        onChange={handleChange}
      />
    ))
    console.log(boardJsx)
  }, [startingBoard])
  const handleChange = event => {
    const newBoard = board.map((value, index) => {
      if (event.target.id === index) {
        value = event.target.value
      }
    })
    setBoard(newBoard)
  }
  return (
    <form>
      {boardJsx}
    </form>
  )
}

export default GameBoard
