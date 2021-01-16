import * as React from 'react'
import styleable, { StyleableProps } from 'react-styleable'

import * as css from './styles.scss'

const Main = (props: StyleableProps) => {
  const { css } = props

  return <div className={css.main}>Hello, world-dwellers</div>
}

export default styleable(css)(Main)
