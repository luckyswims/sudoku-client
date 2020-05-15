import React, { useState, useEffect } from 'react'
import apiUrl from '../../apiConfig'
import axios from 'axios'

import GameShow from '../GameShow/GameShow'

const GameIndex = ({ msgAlert, user }) => {
  const [games, setGames] = useState([])
  useEffect(() => {
    axios(apiUrl + '/games', {
      headers: {
        Authorization: 'Token token=' + user.token
      }
    })
      .then(res => setGames(res.data.games))
      .then(() => msgAlert({
        heading: 'Games Retrieved',
        message: 'Loaded your played games',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Game Index Failed with error: ' + error.message,
          message: 'Unable to retrieve your played games.',
          variant: 'danger'
        })
      })
  }, [])
  const deleteBoard = event => {
    const id = event.target.id
    axios.delete(apiUrl + '/games/' + id, {
      headers: {
        Authorization: 'Token token=' + user.token
      }
    })
      .then(() => msgAlert({
        heading: 'Game Deleted',
        message: `Successfully deleted game ${id}`,
        variant: 'success'
      }))
      .then(() => {
        const newGames = games.filter(game => game.id !== Number(id))
        setGames(newGames)
      })
      .catch(error => {
        msgAlert({
          heading: 'Delete Failed with error: ' + error.message,
          message: 'Your game could not be deleted.',
          variant: 'danger'
        })
      })
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
