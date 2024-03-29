import { Dropdown } from '@/components/Molecules/Dropdown/index.styles';
import styled, { css } from 'styled-components';

export const MilestoneItem = styled.div`
  ${({ theme }) => theme.MIXIN.FLEX({ align: 'flex-start', justify: 'space-between' })};
  flex-wrap: wrap;
  padding: 16px 32px;

  progress {
    width: auto;
  }

  @media ${({ theme }) => theme.DEVICE.MOBILE} {
    flex-direction: column;
  }
`;

export const CommonMilestoneItem = styled.div`
  ${({ theme }) => theme.MIXIN.FLEX({ align: 'center', justify: 'center' })};
  padding: 24px 32px;

  span {
    ${({ theme }) => theme.FONTSTYLES.TEXT_MEDIUM};
    color: ${({ theme }) => theme.COLORS.TITLE_ACTIVE};
    margin-left: 8px;
  }
`;

export const MilestoneItemInfo = styled.div`
  display: grid;
  flex-grow: 1;
  gap: 8px;
  align-items: baseline;

  .MilestoneItem_title {
    span {
      ${({ theme }) => theme.FONTSTYLES.LINK_MEDIUM};
      color: ${({ theme }) => theme.COLORS.TITLE_ACTIVE};
      margin-left: 8px;
    }
  }

  .MilestoneItem_dueDate {
    display: flex;
    align-items: center;
    margin-left: 2px;
    span {
      ${({ theme }) => theme.FONTSTYLES.TEXT_SMALL};
      color: ${({ theme }) => theme.COLORS.LABEL};
      margin-left: 8px;
    }
  }

  .MilestoneItem_description {
    min-height: 28px;
    ${({ theme }) => theme.FONTSTYLES.TEXT_SMALL};
    color: ${({ theme }) => theme.COLORS.LABEL};
  }

  @media all and (min-width: ${({ theme }) => `${theme.DEVICE_SIZE.TABLET}px`}) {
    width: 450px;
    grid-auto-columns: minmax(auto, max-content);

    .MilestoneItem_description {
      grid-column: 1 / 3;
    }

    .MilestoneItem_dueDate {
      grid-column: 2 / 3;
    }

    ${Dropdown} {
      display: none;
    }
  }

  @media ${({ theme }) => theme.DEVICE.MOBILE} {
    width: 100%;
  }
`;

export const MilestoneItemButtons = styled.div<{ isOpenModifyEditer: boolean }>`
  ${({ theme }) => theme.MIXIN.FLEX({ align: 'center', justify: 'flex-end' })};
  gap: 24px;

  button {
    :not(&:last-child):hover {
      color: ${({ theme }) => theme.COLORS.PRIMARY.BLUE};
      svg {
        stroke: ${({ theme }) => theme.COLORS.PRIMARY.BLUE};
      }
    }

    &:last-child {
      color: ${({ theme }) => theme.COLORS.ERROR.RED};

      &:hover {
        color: ${({ theme }) => theme.COLORS.ERROR.DARK_RED};
        svg {
          stroke: ${({ theme }) => theme.COLORS.ERROR.DARK_RED};
        }
      }
    }

    ${({ isOpenModifyEditer }) =>
      isOpenModifyEditer &&
      css`
        &:nth-child(2) {
          color: ${({ theme }) => theme.COLORS.PRIMARY.BLUE};
          svg {
            stroke: ${({ theme }) => theme.COLORS.PRIMARY.BLUE};
          }
        }
      `}

    @media ${({ theme }) => theme.DEVICE.MOBILE} {
      display: none;
    }
  }
`;

export const MilestoneItemStates = styled.div`
  flex-grow: 1;
  min-width: 200px;
  display: grid;
  gap: 14px;

  details {
    justify-self: flex-end;
  }

  @media ${({ theme }) => theme.DEVICE.MOBILE} {
    width: 100%;
  }
`;

export const MilestoneTitle = styled.div`
  ${({ theme }) => theme.MIXIN.FLEX({ align: 'center', justify: 'space-between' })};
  gap: 14px;

  ${Dropdown} {
    min-width: fit-content;
  }
`;
