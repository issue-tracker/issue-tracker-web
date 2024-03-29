import styled from 'styled-components';
import { StyledNavLink, StyledNavLinks } from '@/components/Molecules/NavLink/index.styles';

export const NavContainer = styled.div`
  ${({ theme }) => theme.MIXIN.FLEX({ align: 'center', justify: 'space-between' })};
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 24px;

  div {
    overflow: hidden;
  }

  ${StyledNavLinks} {
    min-width: max-content;
  }

  ${StyledNavLink} {
    &.active {
      background: ${({ theme }) => theme.COLORS.LINE};
    }
  }
`;
