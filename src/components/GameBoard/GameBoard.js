import React, { useState, useEffect } from 'react'
import apiUrl from '../../apiConfig'
import axios from 'axios'
import checkBoard from './checkBoard'
import Cell from '../Cell/Cell'

const GameBoard = ({ user, gameId, startingBoard, msgAlert }) => {
  const [board, setBoard] = useState([])
  useEffect(() => {
    setBoard(startingBoard)
  }, [startingBoard])
  const handleChange = (cellId, value) => {
    const newBoard = cleanBoard.map(value => value)
    if (value) {
      newBoard[cellId] = Number(value)
    } else {
      newBoard[cellId] = ''
    }
    if (checkBoard(newBoard)) {
      setBoard(newBoard)
      if (!newBoard.includes('')) {
        msgAlert({
          heading: 'You Won!!!',
          message: 'Congratulations, you have solved this puzzle!',
          variant: 'success'
        })
      }
      axios({
        method: 'patch',
        url: apiUrl + '/games/' + gameId,
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
        .catch(error => {
          msgAlert({
            heading: 'Game Update Failed with error: ' + error.message,
            message: 'Your was unable to be updated.',
            variant: 'danger'
          })
        })
    } else {
      msgAlert({
        heading: 'Invalid Move',
        message: 'That number already exists in that row, column, or section.',
        variant: 'warning'
      })
    }
  }
  const cleanBoard = [...board].map(cell => typeof cell === 'number' ? cell : '')
  const boardJsx = cleanBoard.map((cell, index) => (
    <Cell
      key={index}
      id={index}
      handleChange={handleChange}
      cell={cell}
    />
  ))
  return (
    <form className='board'>
      {boardJsx}
    </form>
  )
}

export default GameBoard
