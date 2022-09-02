import { useState } from 'react';
import { Link } from 'react-router-dom';

import * as S from '@/components/Molecules/MilestoneItem/index.styles';
import Button from '@/components/Atoms/Button';
import Icon from '@/components/Atoms/Icon';
import PrograssBar from '@/components/Atoms/ProgressBar';
import EditMilestone from '@/components/Molecules/EditMilestone';
import { MILESTONE_BUTTON_INFO } from '@/components/Molecules/MilestoneItem/constants';
import { COLORS } from '@/styles/theme';

export interface MilestoneItemTypes {
  id: number;
  title: string;
  description: string | null;
  dueDate: string | null;
  closed: boolean;
}

// 아직 api에 해당 정보가 없어서 타입을 따로 분리해둠
interface MilestoneItemCountTypes {
  openCount?: number;
  closeCount?: number;
}

const MilestoneItem = ({ openCount = 5, closeCount = 5, ...props }: MilestoneItemTypes & MilestoneItemCountTypes) => {
  const { id, title, description, dueDate, closed } = props;
  const [isOpenModifyEditer, setIsOpenModifyEditer] = useState(false);

  return (
    <>
      <S.MilestoneItem>
        <S.MilestoneItemInfo>
          <Link to={`/milestone/${id}`} className="MilestoneItem_title">
            <Icon icon="Milestone" fill={COLORS.PRIMARY.BLUE} stroke={COLORS.PRIMARY.BLUE} />
            <span>{title}</span>
          </Link>
          <div className="MilestoneItem_dueDate">
            <Icon icon="Calendar" stroke={COLORS.LABEL} />
            <span>{dueDate || '완료일 없음'}</span>
          </div>
          <p className="MilestoneItem_description">{description || ' '}</p>
        </S.MilestoneItemInfo>
        <div>
          <S.MilestoneItemButtons isOpenModifyEditer={isOpenModifyEditer}>
            <Button {...MILESTONE_BUTTON_INFO.CLOSE} />
            <Button {...MILESTONE_BUTTON_INFO.MODIFY} handleOnClick={() => setIsOpenModifyEditer((state) => !state)} />
            <Button {...MILESTONE_BUTTON_INFO.DELETE} />
          </S.MilestoneItemButtons>
          <PrograssBar open={openCount} close={closeCount} showState />
        </div>
      </S.MilestoneItem>
      {isOpenModifyEditer && (
        <EditMilestone
          editMode="MODIFY"
          id={id}
          milestoneInfo={{ title, description, dueDate }}
          setOpenState={setIsOpenModifyEditer}
        />
      )}
    </>
  );
};

export default MilestoneItem;
