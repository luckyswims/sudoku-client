import React, { useState, useEffect } from 'react'
import apiUrl from '../../apiConfig'
import axios from 'axios'

const GameBoard = ({ user, gameId, startingBoard }) => {
  const [board, setBoard] = useState([])
  useEffect(() => {
    console.log('GameBoard effect')
    setBoard(startingBoard)
  }, [startingBoard])
  const handleChange = event => {
    console.log(event.target.id)
    console.log(event.target.value)
    const newBoard = cleanBoard.map(value => value)
    if (event.target.value) {
      newBoard[event.target.id] = Number(event.target.value)
    } else {
      newBoard[event.target.id] = ''
    }
    console.log(newBoard)
    setBoard(newBoard)
    axios.patch(apiUrl + '/games/' + gameId, {
      'game': {
        'board': newBoard,
        'user_id': user.id
      }
    })
  }
  const cleanBoard = [...board].map(cell => typeof cell === 'number' ? cell : '')
  console.log('Board is, ', cleanBoard)
  const boardJsx = cleanBoard.map((cell, index) => (
    <input
      key={index}
      id={index}
      className="cell"
      type="number"
      min="1"
      max="9"
      value={cell}
      onChange={handleChange}
    />
  ))
  console.log(boardJsx)
  return (
    <form className='board'>
      {boardJsx}
    </form>
  )
}

export default GameBoard
