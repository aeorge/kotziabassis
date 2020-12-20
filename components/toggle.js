import { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'

const Toggle = () => {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    dark
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark')
  }, [dark])

  const properties = {
    moon: {
      r: 10,
      transform: 'rotate(45deg)',
      cx: 12,
      cy: 4,
      opacity: 0,
    },
    sun: {
      r: 4,
      transform: 'rotate(90deg)',
      cx: 30,
      cy: 0,
      opacity: 1,
    },
    springConfig: { mass: 1, tension: 1000, friction: 50 },
  }

  const { r, transform, cx, cy, opacity } = properties[dark ? 'moon' : 'sun']

  const svgContainerProps = useSpring({
    transform,
    config: properties.springConfig,
  })
  const maskedCircleProps = useSpring({
    cx,
    cy,
    config: properties.springConfig,
  })
  const centerCircleProps = useSpring({ r, config: properties.springConfig })
  const linesProps = useSpring({ opacity, config: properties.springConfig })

  return (
    <div className='relative'>
      <button
        className='absolute right-0 mt-4 cursor-pointer focus:outline-none focus:ring'
        aria-label={`${dark ? 'Toggle Light Mode' : 'Toggle Dark Mode'}`}
        onClick={() => setDark(!dark)}
      >
        <animated.svg
          xmlns='http://www.w3.org/2000/svg'
          width='30'
          height='30'
          viewBox='0 0 24 24'
          fill='none'
          strokeWidth={`${dark ? '0' : '2'}`}
          strokeLinecap='round'
          strokeLinejoin='round'
          stroke={`${dark ? '#5A67D8' : '#D53F8C'}`}
          style={{
            ...svgContainerProps,
          }}
        >
          <mask id='mask'>
            <rect x='0' y='0' width='100%' height='100%' fill='white' />
            <animated.circle style={maskedCircleProps} r='9' fill='black' />
          </mask>

          <animated.circle
            cx='12'
            cy='12'
            fill={`${dark ? '#5A67D8' : '#D53F8C'}`}
            mask='url(#mask)'
            style={centerCircleProps}
          />
          <animated.g
            stroke={`${dark ? '#5A67D8' : '#D53F8C'}`}
            style={linesProps}
          >
            <path d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z' />
          </animated.g>
        </animated.svg>
      </button>
    </div>
  )
}

export default Toggle
