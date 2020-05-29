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

  return (
    <Fragment>
      <p
        id={id}
        className="cell"
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
