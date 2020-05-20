import React, { Fragment } from 'react'

const Home = () => {
  return (
    <Fragment>
      <h2>About Sudoku</h2>
      <p>Sudoku are a type of puzzle where the objective is to fill a 9x9 grid
      while meeting the following criteria:</p>
      <ol>
        <li>Each row must contain all of the numbers from 1 through 9.</li>
        <li>Each column must contain all of the numbers from 1 through 9.</li>
        <li>Each of the 9 distinct 3x3 sections must contain all of the numbers
        from 1 through 9.</li>
      </ol>
      <p>This site generates sudoku puzzles that the user can then solve.</p>
    </Fragment>
  )
}

export default Home
