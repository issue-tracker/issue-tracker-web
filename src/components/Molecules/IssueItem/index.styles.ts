import styled from 'styled-components';

export const IssueTitle = styled.div`
  ${({ theme }) => theme.MIXIN.FLEX({ align: 'center', justify: 'flex-start' })};
  margin-bottom: 8px;

  .title {
    ${({ theme }) => theme.FONTSTYLES.LINK_MEDIUM};
    margin: 0px 8px;
  }
`;

export const IssueContent = styled.div`
  ${({ theme }) => theme.MIXIN.FLEX({ align: 'center', justify: 'flex-start' })};
  span,
  a {
    ${({ theme }) => theme.FONTSTYLES.TEXT_SMALL};
  }

  .timeStamp {
    margin: 0px 16px;
  }

  .milestone {
    display: inline-flex;
    align-items: center;
    svg {
      margin-right: 8px;
    }
    path {
      stroke: ${({ theme }) => theme.COLORS.LABEL};
      fill: ${({ theme }) => theme.COLORS.LABEL};
    }
  }
`;

export const Assignee = styled.div`
  margin-left: auto;
  img + img {
    margin-left: -10px;
  }
`;
