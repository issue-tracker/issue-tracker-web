import styled, { css } from 'styled-components';
import { InputTypes } from '@/components/Atoms/Input';

type FormStyleTypes = Pick<InputTypes, 'inputSize' | 'isActive' | 'isTyping'>;

export const Form = styled.form<FormStyleTypes>`
  ${({ theme }) => theme.MIXIN.FLEX({ direction: 'column', align: 'flex-start', justify: 'flex-start' })};
  flex-wrap: wrap;
  border: none;
  border-radius: 16px;
  background: ${({ theme }) => theme.COLORS.INPUT_BACKGROUND};

  svg {
    margin: 0px 12px 0px 26px;
  }

  label {
    color: ${({ theme }) => theme.COLORS.LABEL};
    ${({ theme }) => theme.FONTSTYLES.TEXT_XSMALL}
  }

  ${({ inputSize }) => {
    switch (inputSize) {
      case 'LARGE':
        return css`
          padding: 0 24px;
          ${({ theme }) => theme.TEXT_INPUT_SIZE.LARGE};
        `;
      case 'MEDIUM':
        return css`
          padding: 0 24px;
          ${({ theme }) => theme.TEXT_INPUT_SIZE.MEDIUM};
        `;
      case 'SMALL':
        return css`
          padding: 0 24px;
          ${({ theme }) => theme.MIXIN.FLEX({ direction: 'row', align: 'center', justify: 'flex-start' })};
          ${({ theme }) => theme.TEXT_INPUT_SIZE.SMALL};
        `;
    }
  }}

  ${({ isActive }) =>
    isActive &&
    css`
      color: ${({ theme }) => theme.COLORS.TITLE_ACTIVE};
      background: ${({ theme }) => theme.COLORS.OFF_WHITE};
      border: 1px solid ${({ theme }) => theme.COLORS.TITLE_ACTIVE};

      label {
        color: ${({ theme }) => theme.COLORS.TITLE_ACTIVE};
      }
    `}

  ${({ isTyping, inputSize }) =>
    inputSize === 'SMALL' &&
    isTyping &&
    css`
      input {
        width: 80%;
      }

      label {
        margin-right: 12px;
      }
    `}
  
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.PLACEHOLDER};
  }

  &:focus {
    color: ${({ theme }) => theme.COLORS.PLACEHOLDER};
    background: ${({ theme }) => theme.COLORS.OFF_WHITE};
    outline: 1px solid ${({ theme }) => theme.COLORS.TITLE_ACTIVE};
  }
`;

export const Input = styled.input`
  width: 100%;
  flex-grow: 1;
  background: transparent;
  border: transparent;
  padding: 0;

  ${({ theme }) => theme.FONTSTYLES.TEXT_SMALL};

  color: ${({ theme }) => theme.COLORS.TITLE_ACTIVE};

  &:focus {
    outline: none;
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.PLACEHOLDER};
  }
`;
