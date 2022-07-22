import React from 'react';
import * as S from '@/components/Atoms/Button/index.styles';
import Icon, { IconType } from '@/components/Atoms/Icon';

export interface ButtonTypes {
  disabled?: boolean;
  label: string;
  size: 'SMALL' | 'MEDIUM' | 'LARGE';
  buttonStyle: 'STANDARD' | 'SECONDARY' | 'NO_BORDER';
  iconInfo?: { icon: IconType; stroke?: string; fill?: string };
  handleOnClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ buttonStyle = 'STANDARD', ...props }: ButtonTypes) => {
  const { label, iconInfo, handleOnClick } = props;

  return (
    <S.Button type="button" onClick={handleOnClick} {...props} buttonStyle={buttonStyle}>
      {iconInfo && <Icon icon={iconInfo.icon} stroke={iconInfo.stroke} fill={iconInfo.fill} />}
      {label}
    </S.Button>
  );
};

export default Button;
