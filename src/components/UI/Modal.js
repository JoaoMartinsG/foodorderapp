// always add div with id overlays in index.html in public folder

import { Fragment } from 'react'
import ReactDOM from 'react-dom'

import classes from './Modal.module.css'

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />
}

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  )
}

const portalElement = document.getElementById('overlays')

const Modal = (props) => {
  return (
    <Fragment>
      {/* createportal need , what to render and where thats why
       we create the helper getting the index.html element */}
       
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  )
}

export default Modal
