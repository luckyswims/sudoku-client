import React, { useState, useEffect } from 'react'
import apiUrl from '../../apiConfig'
import axios from 'axios'

import GameShow from '../GameShow/GameShow'

const GameIndex = ({ msgAlert, user }) => {
  const [games, setGames] = useState([])
  useEffect(() => {
    axios(apiUrl + '/games')
      .then(res => setGames(res.data.games))
      .then(() => msgAlert({
        heading: 'Games Retrieved',
        message: 'Loaded your played games',
        variant: 'success'
      }))
      .catch(console.error)
  }, [])
  const deleteBoard = event => {
    const id = event.target.id
    axios.delete(apiUrl + '/games/' + id)
      .then(() => msgAlert({
        heading: 'Game Deleted',
        message: `Successfully deleted game ${id}`,
        variant: 'success'
      }))
      .then(() => {
        const newGames = games.filter(game => game.id !== Number(id))
        console.log(newGames)
        setGames(newGames)
      })
      .catch(console.error)
  }
  return (
    <section>
      {games.map(game => {
        return (
          <GameShow
            key={game.id}
            gameId={game.id}
            board={game.board}
            msgAlert={msgAlert}
            deleteBoard={deleteBoard}
          />
        )
      })}
    </section>
  )
}

export default GameIndex
