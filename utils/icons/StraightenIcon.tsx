/* eslint-disable max-len */
import * as React from 'react';
import Svg, {  Path, SvgProps } from 'react-native-svg';

export const StraightenIcon = (props: SvgProps) => (
  <Svg
    viewBox="0 0 17 16"
    width={17}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      fill="#1D1D1D"
      d="M4.5 2.333c0-.266.1-.5.3-.7.2-.2.433-.3.7-.3h6c.256 0 .486.1.692.3.205.2.308.434.308.7v11.334c0 .266-.103.5-.308.7-.206.2-.436.3-.692.3h-6a.96.96 0 0 1-.7-.3.96.96 0 0 1-.3-.7V2.333Zm1 0v11.334h6V11.5h-3v-1h3v-2h-3v-1h3v-2h-3v-1h3V2.333h-6Zm3 2.167v1-1Zm0 3v1-1Zm0 3v1-1Z"
    />
  </Svg>
);