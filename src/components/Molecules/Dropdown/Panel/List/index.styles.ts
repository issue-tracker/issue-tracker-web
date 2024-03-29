import styled from 'styled-components';
import checkOffCircle from '@/assets/icons/checkOffCircle.svg?inline';
import checkOnCircle from '@/assets/icons/checkOnCircle.svg?inline';

export const Panel = styled.menu`
  position: absolute;
  top: 45px;
  z-index: 99;
  overflow: hidden;

  width: 240px;
  border: 1px solid ${({ theme }) => theme.COLORS.LINE};
  border-radius: 16px;
  background: ${({ theme }) => theme.COLORS.BACKGROUND};

  h3 {
    padding: 8px 40px 8px 16px;
    border-radius: 16px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND};
    color: ${({ theme }) => theme.COLORS.TITLE_ACTIVE};
    ${({ theme }) => theme.FONTSTYLES.TEXT_MEDIUM};
  }
`;

export const PanelItem = styled.li`
  width: 100%;
  cursor: pointer;
  border-top: 1px solid ${({ theme }) => theme.COLORS.LINE};
  background: ${({ theme }) => theme.COLORS.OFF_WHITE};
  color: ${({ theme }) => theme.COLORS.TITLE_ACTIVE};
  ${({ theme }) => theme.FONTSTYLES.TEXT_SMALL};

  &:hover {
    background: ${({ theme }) => theme.COLORS.INPUT_BACKGROUND};
  }

  &:last-child {
    border-bottom: none;
    border-radius: 0px 0px 16px 16px;
  }

  input {
    display: none;
  }

  label {
    ${({ theme }) => theme.MIXIN.FLEX({ align: 'center', justify: 'space-between' })};
    cursor: pointer;
    padding: 4px 16px;
  }
`;

export const CheckBoxItem = styled.input`
  &:checked ~ label::after {
    margin-top: 4px;
    content: url(${checkOnCircle});
  }

  & ~ label {
    height: 28px;
    padding: 4px 16px;
    height: fit-content;

    span {
      display: inline-block;
      width: 85%;
    }

    &::after {
      margin-top: 4px;
      content: url(${checkOffCircle});
    }

    img {
      margin-right: 8px;
    }
  }
`;
