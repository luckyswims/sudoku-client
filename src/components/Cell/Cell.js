import React, { useState, Fragment } from 'react'
import { Modal, Button } from 'react-bootstrap'

function Cell ({ id, handleChange, cell }) {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const onClick = value => {
    handleChange(id, value)
    handleClose()
  }

  let sectionPosition
  switch (id % 27) {
  case 0:
  case 3:
  case 6:
    sectionPosition = 'top-left'
    break
  case 1:
  case 4:
  case 7:
    sectionPosition = 'top-middle'
    break
  case 2:
  case 5:
  case 8:
    sectionPosition = 'top-right'
    break
  case 9:
  case 12:
  case 15:
    sectionPosition = 'middle-left'
    break
  case 10:
  case 13:
  case 16:
    sectionPosition = 'center'
    break
  case 11:
  case 14:
  case 17:
    sectionPosition = 'middle-right'
    break
  case 18:
  case 21:
  case 24:
    sectionPosition = 'bottom-left'
    break
  case 19:
  case 22:
  case 25:
    sectionPosition = 'bottom-middle'
    break
  case 20:
  case 23:
  case 26:
    sectionPosition = 'bottom-right'
    break
  }
  return (
    <Fragment>
      <p
        id={id}
        className={show ? `${sectionPosition} cell selected` : `${sectionPosition} cell`}
        onClick={handleShow}
      >
        {cell}
      </p>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Body>
          <section>
            <Button
              variant="outline-dark"
              onClick={() => { onClick(1) }}
            >
              1
            </Button>
            <Button
              variant="outline-dark"
              onClick={() => { onClick(2) }}
            >
              2
            </Button>
            <Button
              variant="outline-dark"
              onClick={() => { onClick(3) }}
            >
              3
            </Button>
            <Button
              variant="outline-dark"
              onClick={() => { onClick(4) }}
            >
              4
            </Button>
            <Button
              variant="outline-dark"
              onClick={() => { onClick(5) }}
            >
              5
            </Button>
            <Button
              variant="outline-dark"
              onClick={() => { onClick(6) }}
            >
              6
            </Button>
            <Button
              variant="outline-dark"
              onClick={() => { onClick(7) }}
            >
              7
            </Button>
            <Button
              variant="outline-dark"
              onClick={() => { onClick(8) }}
            >
              8
            </Button>
            <Button
              variant="outline-dark"
              onClick={() => { onClick(9) }}
            >
              9
            </Button>
          </section>
        </Modal.Body>
      </Modal>
    </Fragment>
  )
}

export default Cell
