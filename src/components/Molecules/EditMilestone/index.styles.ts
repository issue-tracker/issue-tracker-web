import styled from 'styled-components';

export const EditMilestone = styled.div`
  width: 100%;
  padding: 32px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.COLORS.LINE};
  border-radius: 16px;
  background: ${({ theme }) => theme.COLORS.OFF_WHITE};

  h2 {
    ${({ theme }) => theme.FONTSTYLES.TEXT_LARGE};
    margin-bottom: 24px;
  }
`;

export const EditForm = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 24px;

  div {
    form {
      width: 100%;
    }
    &:last-child {
      grid-column: 1 / 3;
    }
  }
`;

export const EditButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;
