import styled from 'styled-components';

export const ColorCode = styled.form<{ isError: boolean }>`
  ${({ theme }) => theme.MIXIN.FLEX({ align: 'center', justify: 'flex-start' })};
  flex-wrap: wrap;
  width: fit-content;
  padding: 0px 24px;
  border: none;
  border-radius: 16px;
  background: ${({ theme }) => theme.COLORS.INPUT_BACKGROUND};

  &>label: first-child {
    width: 80px;
    color: ${({ theme }) => theme.COLORS.LABEL};
    ${({ theme }) => theme.FONTSTYLES.TEXT_XSMALL};
  }

  input {
    ${({ theme }) => theme.FONTSTYLES.TEXT_SMALL};
    color: ${({ theme, isError }) => {
      if (isError) return theme.COLORS.ERROR.RED;
      return theme.COLORS.TITLE_ACVITE;
    }};
    width: 80px;
    border: none;
    background: transparent;

    &:focus {
      outline: none;
    }
  }

  button {
    margin-left: 10px;
  }

  svg {
    cursor: pointer;
  }
`;

export const EditTool = styled.div`
  ${({ theme }) => theme.MIXIN.FLEX({ align: 'center', justify: 'flex-start' })};
  flex-wrap: wrap;
`;
