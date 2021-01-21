import * as React from 'react'
import styleable, { StyleableProps } from 'react-styleable'

import css from './styles.scss'

const Main = (props: StyleableProps) => {

  return <div className={props.css.main}>Hello, world-dwellers</div>
}

export default styleable(css)(Main)
