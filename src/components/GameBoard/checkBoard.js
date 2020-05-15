'use strict'

const checkBoard = (board) => {
  return checkRows(board) && checkColumns(board) && checkSections(board)
}
// checks an array of arrays to see if any of the nested arrays contain duplicate values
const checkDups = (array) => {
  array.forEach(row => {
    for (let i = 1; i < 10; i++) {
      if (row.filter(cell => cell === i).length > 1) {
        return false
      }
    }
  })
  return true
}
const checkRows = (board) => {
  const rows = []
  for (let i = 0; i < 9; i++) {
    rows.push(board.slice(i * 9, i * 9 + 8))
  }
  return checkDups(rows)
}
const checkColumns = (board) => {
  const columns = [[], [], [], [], [], [], [], [], []]
  board.forEach(row => {
    console.log(row)
    row.forEach((cell, index) => {
      columns[index].push(cell)
    })
  })
  return checkDups(columns)
}
const checkSections = (board) => {
  const sections = [[], [], [], [], [], [], [], [], []]
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      sections[j + i * 3].push(sections.slice(0, 2))
      sections[j + i * 3 + 1].push(sections.slice(3, 5))
      sections[j + i * 3 + 2].push(sections.slice(6, 8))
    }
  }
  return checkDups(sections)
}

const goodBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9,
  7, 8, 9, 1, 2, 3, 4, 5, 6,
  4, 5, 6, 7, 8, 9, 1, 2, 3,
  9, 1, 2, 3, 4, 5, 6, 7, 8,
  6, 7, 8, 9, 1, 2, 3, 4, 5,
  3, 4, 5, 6, 7, 8, 9, 1, 2,
  8, 9, 1, 2, 3, 4, 5, 6, 7,
  5, 6, 7, 8, 9, 1, 2, 3, 4,
  2, 3, 4, 5, 6, 7, 8, 9, 1]

const badSection = [1, 2, 3, 4, 5, 6, 7, 8, 9,
  7, 8, 9, 1, 2, 3, 4, 5, 6,
  9, 1, 2, 3, 4, 5, 6, 7, 8,
  4, 5, 6, 7, 8, 9, 1, 2, 3,
  6, 7, 8, 9, 1, 2, 3, 4, 5,
  3, 4, 5, 6, 7, 8, 9, 1, 2,
  8, 9, 1, 2, 3, 4, 5, 6, 7,
  5, 6, 7, 8, 9, 1, 2, 3, 4,
  2, 3, 4, 5, 6, 7, 8, 9, 1]

const badColumn = [1, 2, 3, 4, 5, 6, 7, 8, 9,
  7, 8, 9, 1, 2, 3, 4, 5, 6,
  4, 5, 6, 7, 8, 9, 1, 2, 3,
  9, 1, 2, 3, 4, 5, 6, 7, 8,
  6, 7, 8, 9, 1, 2, 3, 4, 5,
  3, 4, 5, 6, 7, 8, 9, 1, 2,
  1, 9, 8, 2, 3, 4, 5, 6, 7,
  5, 6, 7, 8, 9, 1, 2, 3, 4,
  2, 3, 4, 5, 6, 7, 8, 9, 1]

const badRow = [1, 2, 3, 4, 5, 6, 7, 8, 9,
  7, 8, 9, 1, 2, 3, 4, 5, 6,
  4, 5, 6, 7, 8, 9, 1, 2, 3,
  9, 1, 2, 3, 4, 5, 2, 7, 8,
  6, 7, 8, 9, 1, 2, 3, 4, 5,
  3, 4, 5, 6, 7, 8, 9, 1, 2,
  8, 9, 1, 2, 3, 4, 5, 6, 7,
  5, 6, 7, 8, 9, 1, 6, 3, 4,
  2, 3, 4, 5, 6, 7, 8, 9, 1]
export default checkBoard
