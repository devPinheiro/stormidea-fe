import * as React from "react"
import { SvgProps } from './interfaces.d'

function Hamburger(props: SvgProps) {
  return (
    <svg
      width={20}
      height={20}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <rect x={2} y={9} width={16} height={2} rx={1} fill='#2A2A2A' />
      <rect x={2} y={4} width={8} height={2} rx={1} fill='#2A2A2A' />
      <rect x={2} y={14} width={12} height={2} rx={1} fill='#2A2A2A' />
    </svg>
  );
}

export default Hamburger

