/* eslint-disable max-len */
import * as React from 'react';
import Svg, {  Path, SvgProps } from 'react-native-svg';

export const ChevronLeftIcon = (props: SvgProps) => (
  <Svg
    viewBox='0 0 48 48'
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="m26.95 34.9-9.9-9.9a1.524 1.524 0 0 1-.35-.5c-.067-.167-.1-.35-.1-.55 0-.2.033-.383.1-.55.067-.167.183-.333.35-.5L27 12.95c.3-.3.658-.45 1.075-.45.417 0 .775.15 1.075.45.3.3.442.667.425 1.1-.017.433-.175.8-.475 1.1l-8.8 8.8 8.85 8.85c.3.3.45.65.45 1.05s-.15.75-.45 1.05c-.3.3-.667.45-1.1.45-.433 0-.8-.15-1.1-.45Z"
    />
  </Svg>
);