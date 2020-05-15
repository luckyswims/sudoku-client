import React, { useState, useEffect } from 'react'
import apiUrl from '../../apiConfig'
import axios from 'axios'

import GameBoard from '../GameBoard/GameBoard'

const Game = ({ msgAlert, user }) => {
  const [startingBoard, setStartingBoard] = useState([])
  const [gameId, setGameId] = useState()
  const createGame = () => {
    axios({
      method: 'post',
      url: apiUrl + '/games',
      data: {
        'game': {
          'board': []
        }
      },
      headers: {
        Authorization: 'Token token=' + user.token
      }
    }
    )
      .then(res => {
        setStartingBoard(res.data.game.board)
        setGameId(res.data.game.id)
      })
      .then(() => msgAlert({
        heading: 'New Game Created',
        message: 'A new sudoku has been created. Enjoy!',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'New Game Failed with error: ' + error.message,
          message: 'A new game was unable to be created.',
          variant: 'danger'
        })
      })
  }
  useEffect(() => createGame(), [])
  return (
    <section>
      <h2>Sudoku</h2>
      <button onClick={createGame}>New Game</button>
      <GameBoard
        user={user}
        gameId={gameId}
        startingBoard={startingBoard}
        msgAlert={msgAlert}
      />
    </section>
  )
}

export default Game
