'use strict'

const checkBoard = (board) => {
  return checkRows(board) && checkColumns(board) && checkSections(board)
}
// checks an array of arrays to see if any of the nested arrays contain duplicate values

const checkDups = (array) => {
  let noDups = true
  array.forEach(row => {
    for (let i = 1; i < 10; i++) {
      if (row.filter(cell => cell === i).length > 1) {
        noDups = false
      }
    }
  })
  return noDups
}

// takes an array representation of a sudoku board, and parses it into it's rows
// after converting it to an array of arrays, passes to checkDups to see there are dups in any of the rows
const checkRows = (board) => {
  const rows = []
  for (let i = 0; i < 9; i++) {
    rows.push(board.slice(i * 9, i * 9 + 8))
  }
  return checkDups(rows)
}

// takes an array representation of a sudoku board, and parses it into it's columns
// after converting it to an array of arrays, passes to checkDups to see there are dups in any of the columns
const checkColumns = (board) => {
  const columns = [[], [], [], [], [], [], [], [], []]
  board.forEach((cell, index) => {
    columns[index % 9].push(cell)
  })
  return checkDups(columns)
}

// takes an array representation of a sudoku board, and parses it into it's componenet 3x3 squares
const parseSections = (board) => {
  const sections = [[], [], [], [], [], [], [], [], []]
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const start = j * 9 + i * 27
      sections[i * 3].push(board[start])
      sections[i * 3].push(board[start + 1])
      sections[i * 3].push(board[start + 2])
      sections[i * 3 + 1].push(board[start + 3])
      sections[i * 3 + 1].push(board[start + 4])
      sections[i * 3 + 1].push(board[start + 5])
      sections[i * 3 + 2].push(board[start + 6])
      sections[i * 3 + 2].push(board[start + 7])
      sections[i * 3 + 2].push(board[start + 8])
    }
  }
  return sections
}

// after converting it to an array of arrays, passes to checkDups to see there are dups in any of the sections
const checkSections = (board) => {
  const sections = parseSections(board)
  return checkDups(sections)
}

// const goodBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9,
//   7, 8, 9, 1, 2, 3, 4, 5, 6,
//   4, 5, 6, 7, 8, 9, 1, 2, 3,
//   9, 1, 2, 3, 4, 5, 6, 7, 8,
//   6, 7, 8, 9, 1, 2, 3, 4, 5,
//   3, 4, 5, 6, 7, 8, 9, 1, 2,
//   8, 9, 1, 2, 3, 4, 5, 6, 7,
//   5, 6, 7, 8, 9, 1, 2, 3, 4,
//   2, 3, 4, 5, 6, 7, 8, 9, 1]

// const badSection = [1, 2, 3, 4, 5, 6, 7, 8, 9,
//   7, 8, 9, 1, 2, 3, 4, 5, 6,
//   9, 1, 2, 3, 4, 5, 6, 7, 8,
//   4, 5, 6, 7, 8, 9, 1, 2, 3,
//   6, 7, 8, 9, 1, 2, 3, 4, 5,
//   3, 4, 5, 6, 7, 8, 9, 1, 2,
//   8, 9, 1, 2, 3, 4, 5, 6, 7,
//   5, 6, 7, 8, 9, 1, 2, 3, 4,
//   2, 3, 4, 5, 6, 7, 8, 9, 1]

// const badColumn = [1, 2, 3, 4, 5, 6, 7, 8, 9,
//   7, 8, 9, 1, 2, 3, 4, 5, 6,
//   4, 5, 6, 7, 8, 9, 1, 2, 3,
//   9, 1, 2, 3, 4, 5, 6, 7, 8,
//   6, 7, 8, 9, 1, 2, 3, 4, 5,
//   3, 4, 5, 6, 7, 8, 9, 1, 2,
//   1, 9, 8, 2, 3, 4, 5, 6, 7,
//   5, 6, 7, 8, 9, 1, 2, 3, 4,
//   2, 3, 4, 5, 6, 7, 8, 9, 1]

// const badRow = [1, 2, 3, 4, 5, 6, 7, 8, 9,
//   7, 8, 9, 1, 2, 3, 4, 5, 6,
//   4, 5, 6, 7, 8, 9, 1, 2, 3,
//   9, 1, 2, 3, 4, 5, 2, 7, 8,
//   6, 7, 8, 9, 1, 2, 3, 4, 5,
//   3, 4, 5, 6, 7, 8, 9, 1, 2,
//   8, 9, 1, 2, 3, 4, 5, 6, 7,
//   5, 6, 7, 8, 9, 1, 6, 3, 4,
//   2, 3, 4, 5, 6, 7, 8, 9, 1]
export default checkBoard
