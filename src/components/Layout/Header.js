import { Fragment } from 'react'

import mealsImage from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'
import classes from './Header.module.css'

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Food Order App</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="A table with a full meal" />
      </div>
    </Fragment>
  )
}

export default Header
