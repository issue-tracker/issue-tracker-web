import styled from 'styled-components';
import { Label } from '@/components/Atoms/Label/index.styles';
import { Dropdown } from '@/components/Molecules/Dropdown/index.styles';

export const EditButton = styled.div`
  ${({ theme }) => theme.MIXIN.FLEX({ align: 'center', justify: 'center' })};

  button {
    &:first-child {
      color: ${({ theme }) => theme.COLORS.LABEL};
    }
    &:nth-child(2) {
      color: ${({ theme }) => theme.COLORS.ERROR.RED};
    }
  }

  button + button {
    margin-left: 24px;
  }

  @media ${({ theme }) => theme.DEVICE.MOBILE_OR_TABLET} {
    display: none;
  }
`;

export const LabelItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  gap: 24px;
  padding: 36px 32px;
  word-break: break-all;

  ${Label} {
    &:hover {
      cursor: pointer;
    }
  }

  @media ${({ theme }) => theme.DEVICE.MOBILE} {
    grid-template-columns: 1fr 1fr;

    .label-description {
      display: none;
    }
  }

  details,
  ${EditButton} {
    justify-self: end;
  }

  @media ${({ theme }) => theme.DEVICE.DESKTOP} {
    ${Dropdown} {
      display: none;
    }
  }
`;

export { CommonMilestoneItem as NoLabelItem } from '@/components/Organisms/MilestoneTable/MilestoneItem/index.styles';
