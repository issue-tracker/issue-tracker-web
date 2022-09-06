/* eslint-disable array-callback-return */
import { Fragment } from 'react';
import * as S from '@/components/Molecules/SideBar/index.styles';
import Label from '@/components/Atoms/Label';
import PrograssBar from '@/components/Atoms/ProgressBar';
import UserImage from '@/components/Atoms/UserImage';
import Dropdown from '@/components/Molecules/Dropdown';

import {
  isAssignTypes,
  isLabelTypes,
  isMilestoneTypes,
  ContentItemTypes,
  SideBarItemType,
} from '@/components/Molecules/SideBar/types';

import { LabelTypes } from '@/stores/labelList';
import { UserTypes } from '@/components/Molecules/Dropdown/types';
import { MilestoneItemTypes } from '@/components/Molecules/MilestoneItem';

const SideBarItem = ({ ...props }: SideBarItemType & ContentItemTypes) => {
  const { id, dropdownTitle, dropdownListTitle, dropdownList, dropdownType, content, handleOnChange } = props;

  const isChecked = (title: string) => {
    const contentList: (UserTypes | LabelTypes | MilestoneItemTypes)[] = content;
    const findContent = contentList.find((el) => {
      if (isAssignTypes(el)) return el.nickname === title;
      if (isLabelTypes(el) || isMilestoneTypes(el)) return el.title === title;
    });

    return !!findContent;
  };

  return (
    <S.SideBarItem key={`sidebar-${id}`} className="sidebar_item">
      <Dropdown
        indicatorStyle="SIDEBAR"
        indicatorLabel={dropdownTitle}
        panelId={id}
        panelTitle={dropdownListTitle}
        panelList={dropdownList}
        panelType={dropdownType}
        handleOnClick={handleOnChange}
        isChecked={isChecked}
        unusedOption={id === 'milestone' ? { dataId: 'none', title: '마일스톤 없음' } : undefined}
      />
      <S.SideBarContent isEmpty={!content.length}>
        {content.map((contentItem) => {
          if (isAssignTypes(contentItem)) {
            const { id: userId, nickname, profileImageUrl } = contentItem;
            return (
              <S.SideBarAssignee key={nickname}>
                <UserImage id={Number(userId)} nickname={nickname} profileImage={profileImageUrl} imgSize="MEDIUM" />
                <span>{nickname}</span>
              </S.SideBarAssignee>
            );
          }

          if (isLabelTypes(contentItem)) {
            const { title: labelTitle, backgroundColorCode, textColor } = contentItem;
            return (
              <li key={labelTitle}>
                <Label
                  title={labelTitle}
                  labelStyle="LIGHT"
                  textColor={textColor}
                  backgroundColor={backgroundColorCode}
                />
              </li>
            );
          }

          if (isMilestoneTypes(contentItem)) {
            const { title: milestoneTitle, openIssueCount, closedIssueCount } = contentItem;
            return (
              <Fragment key={milestoneTitle}>
                <PrograssBar open={openIssueCount} close={closedIssueCount} title={milestoneTitle} />
              </Fragment>
            );
          }
        })}
      </S.SideBarContent>
    </S.SideBarItem>
  );
};

export default SideBarItem;