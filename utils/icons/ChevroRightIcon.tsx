/* eslint-disable max-len */
import * as React from 'react';
import Svg, {  Path, SvgProps } from 'react-native-svg';

export const ChevronRightIcon = (props: SvgProps) => (
  <Svg
    viewBox='0 0 48 48'
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M17.7 34.9a1.85 1.85 0 0 1-.425-1.1c-.017-.4.125-.75.425-1.05l8.8-8.8-8.85-8.85c-.267-.267-.392-.625-.375-1.075.017-.45.158-.808.425-1.075.333-.333.692-.492 1.075-.475.383.017.725.175 1.025.475l9.95 9.95c.167.167.283.333.35.5.067.167.1.35.1.55 0 .2-.033.383-.1.55a1.524 1.524 0 0 1-.35.5l-9.9 9.9c-.3.3-.65.442-1.05.425a1.85 1.85 0 0 1-1.1-.425Z"
    />
  </Svg>
);