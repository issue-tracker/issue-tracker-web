import styled from 'styled-components';
import { LabelEditForm } from '@/components/Molecules/LabelEditForm/index.styled';
import { LabelTable } from '@/components/Skeleton/LabelTable/index.styled';
import { StyledNavLink } from '@/components/Molecules/NavLink/index.styles';

export const LabelList = styled.div`
  & > ${LabelEditForm} {
    margin-bottom: 24px;
    border: 1px solid ${({ theme }) => theme.COLORS.LINE};
  }

  ${LabelTable} {
    margin-top: 66px;
  }
`;

export const SubNav = styled.div`
  ${({ theme }) => theme.MIXIN.FLEX({ align: 'center', justify: 'space-between' })};
  margin-bottom: 24px;

  div {
    overflow: hidden;
  }

  ${StyledNavLink} {
    &.active {
      background: ${({ theme }) => theme.COLORS.LINE};
    }
  }
`;
