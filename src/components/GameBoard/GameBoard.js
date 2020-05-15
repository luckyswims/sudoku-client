import React, { useState, useEffect } from 'react'
import apiUrl from '../../apiConfig'
import axios from 'axios'
// import checkBoard from './checkBoard'

const GameBoard = ({ user, gameId, startingBoard, msgAlert }) => {
  const [board, setBoard] = useState([])
  useEffect(() => {
    setBoard(startingBoard)
  }, [startingBoard])
  const handleChange = event => {
    const newBoard = cleanBoard.map(value => value)
    if (event.target.value) {
      newBoard[event.target.id] = Number(event.target.value)
    } else {
      newBoard[event.target.id] = ''
    }
    setBoard(newBoard)
    axios({
      method: 'patch',
      url: apiUrl + '/games',
      data: {
        'game': {
          'board': newBoard,
          'user_id': user.id
        }
      },
      headers: {
        Authorization: 'Token token=' + user.token
      }
    })
      // .then(res => checkBoard(res.data.game.board))
      .catch(error => {
        msgAlert({
          heading: 'Game Update Failed with error: ' + error.message,
          message: 'Your was unable to be updated.',
          variant: 'danger'
        })
      })
  }
  const cleanBoard = [...board].map(cell => typeof cell === 'number' ? cell : '')
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
  return (
    <form className='board'>
      {boardJsx}
    </form>
  )
}

export default GameBoard
