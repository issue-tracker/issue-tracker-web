/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import {
  StyledIssueTable as StyledMilestoneTable,
  IssueHeader as StyledMilestoneHeader,
} from '@/components/Organisms/IssueTable/index.styles';
import Icon from '@/components/Atoms/Icon';
import NavLink from '@/components/Molecules/NavLink';
import MilestoneItem, { MilestoneItemTypes } from '@/components/Molecules/MilestoneItem';
import EmptyMilestoneItem from '@/components/Molecules/MilestoneItem/EmptyItem';

export interface MilestoneListTypes {
  closedMilestones: MilestoneItemTypes[];
  openedMilestones: MilestoneItemTypes[];
}

const MILESTONE_STATE_TAB = (data: MilestoneListTypes) => [
  {
    icon: <Icon icon="Milestone" fill="#14142B" stroke="#ffffff" />,
    link: '/milestone?state=open',
    title: `열린 마일스톤(${data.openedMilestones.length})`,
  },
  {
    icon: <Icon icon="Archive" stroke="#14142B" />,
    link: '/milestone?state=closed',
    title: `닫힌 마일스톤(${data.closedMilestones.length})`,
  },
];

const MilestoneTable = ({ milestoneData }: { milestoneData: MilestoneListTypes }) => {
  const [searchParams] = useSearchParams();
  const stateParam = searchParams.get('state');

  const isOpenMilestone = () => {
    if (!stateParam || stateParam === 'open') return true;
    if (stateParam === 'closed') return false;
  };

  const renderMilestones = (milestoneList: MilestoneItemTypes[]) => {
    if (milestoneList.length) {
      return milestoneList.map((info) => <MilestoneItem key={info.id} {...info} />);
    }

    return <EmptyMilestoneItem />;
  };

  useEffect(() => {}, [searchParams]);

  return (
    <StyledMilestoneTable>
      <StyledMilestoneHeader>
        <NavLink navData={MILESTONE_STATE_TAB(milestoneData)} />
      </StyledMilestoneHeader>
      {isOpenMilestone()
        ? renderMilestones(milestoneData.openedMilestones)
        : renderMilestones(milestoneData.closedMilestones)}
    </StyledMilestoneTable>
  );
};

export default MilestoneTable;
