import React, { Component } from 'react'
import sheet from './loader.scss'
import Style from './style'

export class Loader extends Component {
  render () {
    return (
      // based on https://codepen.io/suez/pen/myvgdg?editors=1100
      // adapted for React

      <svg
        width='300px'
        height='200px'
        viewBox='0 0 187.3 93.7'
        preserveAspectRatio='xMidYMid meet'
        style={{
          left: '50%',
          top: '50%',
          position: 'absolute',
          transform: 'translate(-50%, -50%) matrix(1, 0, 0, 1, 0, 0)'
        }}>
        <Style sheet={sheet} />
        <path
          fill='none'
          className='loader'
          stroke='#ffffff'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeMiterlimit='20'
          d='M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z' />
      </svg>
    )
  }
}

export default Loader
