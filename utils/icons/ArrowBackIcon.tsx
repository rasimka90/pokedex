/* eslint-disable max-len */
import * as React from 'react';
import Svg, {  Path, SvgProps } from 'react-native-svg';

export const ArrowBackIcon = (props: SvgProps) => (
  <Svg
    viewBox='0 0 48 48'
    width={24}
    height={24 }
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="m22.35 38.95-13.9-13.9a1.524 1.524 0 0 1-.35-.5c-.067-.167-.1-.35-.1-.55 0-.2.033-.383.1-.55.067-.167.183-.333.35-.5L22.4 9c.267-.267.6-.4 1-.4s.75.15 1.05.45c.3.3.45.65.45 1.05s-.15.75-.45 1.05L13.1 22.5h24.8c.433 0 .792.142 1.075.425.283.283.425.642.425 1.075 0 .433-.142.792-.425 1.075-.283.283-.642.425-1.075.425H13.1l11.4 11.4c.267.267.4.6.4 1s-.15.75-.45 1.05c-.3.3-.65.45-1.05.45s-.75-.15-1.05-.45Z"
    />
  </Svg>
);