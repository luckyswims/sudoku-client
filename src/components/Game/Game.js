import React, { useState, useEffect } from 'react'
import apiUrl from '../../apiConfig'
import axios from 'axios'

import GameBoard from '../GameBoard/GameBoard'

const Game = ({ msgAlert, user }) => {
  const [startingBoard, setStartingBoard] = useState([])
  const createGame = () => {
    axios.post(apiUrl + '/games', {
      'game': {
        'board': [],
        'user_id': 1
      }
    })
      .then(res => setStartingBoard(res.data.game.board))
      .then(() => msgAlert({
        heading: 'New Game Created',
        message: 'A new sudoku has been created. Enjoy!',
        variant: 'success'
      }))
      .catch(console.error)
  }
  useEffect(() => createGame(), [])
  return (
    <section>
      <h2>Sudoku</h2>
      <button onClick={createGame}>New Game</button>
      <GameBoard
        user={user}
        startingBoard={startingBoard}
      />
    </section>
  )
}

export default Game
