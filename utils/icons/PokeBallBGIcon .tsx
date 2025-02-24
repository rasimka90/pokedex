import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

interface PokeBallBGIconProps extends SvgProps {
  size?: number;
}

export const PokeBallBGIcon = ({ size = 48, ...props }: PokeBallBGIconProps) => (
  <Svg
    width={size} 
    height={size} 
    viewBox="0 0 48 48"
    fill="none"
    {...props}
  >
    <Path
      fill="white"
      d="M29.714 24a5.714 5.714 0 1 1-11.428 0 5.714 5.714 0 0 1 11.428 0Z"
    />
    <Path
      fill="white"
      fillRule="evenodd"
      d="M24 48c12.09 0 22.093-8.94 23.757-20.571H33.701c-1.413 3.995-5.222 6.857-9.7 6.857-4.48 0-8.29-2.863-9.701-6.857H.243C1.907 39.059 11.91 48 24 48Zm-9.7-27.429H.243C1.907 8.941 11.91 0 24 0c12.09 0 22.093 8.94 23.757 20.571H33.701c-1.413-3.995-5.222-6.857-9.7-6.857-4.48 0-8.29 2.862-9.701 6.857ZM29.714 24a5.714 5.714 0 1 1-11.428 0 5.714 5.714 0 0 1 11.428 0Z"
      clipRule="evenodd"
    />
  </Svg>
);