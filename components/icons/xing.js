import { createElement } from 'react'

export function XingIcon(props) {
  return createElement(
    'svg',
    Object.assign(
      {
        xmlns: 'http://www.w3.org/2000/svg',
        fill: 'none',
        viewBox: '0 0 512 512',
        stroke: 'currentColor'
      },
      props
    ),
    createElement('polygon', {
      points:
        '149.216,96 36.448,96 101.696,210.912 16,352 128.768,352 214.464,210.912'
    }),
    createElement('polygon', {
      points:
        '496,0 376.384,0 198.688,311.264 313.184,512 432.8,512 318.304,311.264'
    })
  )
}
