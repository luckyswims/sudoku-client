import React, { Fragment } from 'react'

const GameShow = ({ gameId, board, msgAlert, deleteBoard }) => {
  const cleanBoard = [...board].map(cell => typeof cell === 'number' ? cell : '')
  return (
    <Fragment>
      <h3>Game ID: {gameId}</h3>
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
      <button id={gameId} onClick={deleteBoard}>Delete</button>
    </Fragment>
  )
}

export default GameShow
