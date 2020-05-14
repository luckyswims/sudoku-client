import React, { useState, useEffect } from 'react'
import apiUrl from '../../apiConfig'
import axios from 'axios'

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
  return (
    <section>
      {games.map(game => {
        const cleanBoard = [...game.board].map(cell => typeof cell === 'number' ? cell : '')
        return (
          <div key={game.id}>
            <h3>Game ID: {game.id}</h3>
            <div className='board'>
              {cleanBoard.map((cell, index) => (
                <p
                  key={index}
                  id={index}
                  className="cell"
                >
                  {cell}
                </p>
              ))}
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default GameIndex
