import styled from 'styled-components';

export const Table = styled.div`
  max-width: 1280px;
  border-radius: 10px;
  color: ${({ theme }) => theme.COLORS.LABEL};
  border: 1px solid ${({ theme }) => theme.COLORS.LINE};

  & > div {
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.LINE};
    padding: 18px 32px;

    &:last-child {
      border-radius: 0 0 10px 10px;
      border-bottom: none;
    }
  }
`;
