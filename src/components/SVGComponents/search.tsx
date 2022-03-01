import * as React from "react"
import { SvgProps } from './interfaces.d'

function Search(props: SvgProps) {
  return (
    <svg
      width={18}
      height={19}
      viewBox='0 0 18 19'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M13.097 14.668a8.21 8.21 0 01-4.986 1.673C3.657 16.341 0 12.821 0 8.421S3.657.5 8.111.5c4.454 0 8.111 3.52 8.111 7.92a7.76 7.76 0 01-1.696 4.849l3.171 3.086a1 1 0 01-1.394 1.433l-3.206-3.12zM2 8.421C2 5.176 4.71 2.5 8.111 2.5c3.4 0 6.111 2.676 6.111 5.92 0 1.58-.642 3.025-1.694 4.092a1.012 1.012 0 00-.174.17 6.184 6.184 0 01-4.243 1.66C4.711 14.341 2 11.664 2 8.42z'
        fill='#2A2A2A'
      />
    </svg>
  );
}

export default Search
