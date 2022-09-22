/* eslint-disable react/prop-types */
import { useState } from 'react';
import { ContentTypes, MilestoneTypes } from '@/api/issue/types';
import useFetchSideBarData from '@/api/useFetchSideBarData';

import { COLORS } from '@/styles/theme';
import * as S from '@/pages/Private/IssueDetail/index.styled';
import Button from '@/components/Atoms/Button';
import SideBar from '@/components/Molecules/SideBar';

import { ContentListTypes, isMilestoneTypes, UpdateSideBarFuncTypes } from '@/components/Molecules/SideBar/types';
import { filterUncheckedItem, getFindDropdownItem } from '@/components/Molecules/SideBar/utils';

const IsssueDetailAside = ({ issue, memberId }: { issue: ContentTypes; memberId: number }) => {
  const milestoneArr: MilestoneTypes[] = [];
  const DEFAULT_CONTENT_LIST: ContentListTypes = {
    label: issue!.issueLabels.issueLabels,
    assignee: issue!.issueAssignees.issueAssignees,
    milestone: issue!.milestone === null ? milestoneArr : [issue!.milestone],
  };

  const { IssueSideBarModifyMutate } = useFetchSideBarData();
  const [contentList, setContentList] = useState(DEFAULT_CONTENT_LIST);

  const isIssueAuthor = memberId === issue.author.id;

  const updateSideBarItemState = ({ ...props }: UpdateSideBarFuncTypes) => {
    const { id, panel, checked, dropdownList } = props;

    const findDropdownItem = getFindDropdownItem({ id: id!, dropdownList });

    const contentKey = panel as keyof ContentListTypes;

    if (contentKey === 'milestone' && checked) {
      if (id !== 'none' && isMilestoneTypes(findDropdownItem!)) {
        if (contentList.milestone.length) {
          setContentList({ ...contentList, [contentKey]: [] });
          IssueSideBarModifyMutate({
            method: 'delete',
            issueId: issue.id,
            category: contentKey,
            categoryId: contentList.milestone[0].id,
          });
        }

        setContentList({ ...contentList, [contentKey]: [findDropdownItem] });
        IssueSideBarModifyMutate({
          method: 'post',
          issueId: issue.id,
          category: contentKey,
          categoryId: findDropdownItem!.id,
        });
        return;
      }

      setContentList({ ...contentList, [contentKey]: [] });
      IssueSideBarModifyMutate({
        method: 'delete',
        issueId: issue.id,
        category: contentKey,
        categoryId: contentList.milestone[0].id,
      });
      return;
    }

    if (contentKey !== 'milestone' && checked) {
      setContentList({ ...contentList, [contentKey]: [...contentList[contentKey], findDropdownItem] });
      IssueSideBarModifyMutate({
        method: 'post',
        issueId: issue.id,
        category: `${contentKey}s`,
        categoryId: findDropdownItem!.id,
      });
      return;
    }

    if (contentKey !== 'milestone' && !checked) {
      const filterContentList = filterUncheckedItem({ id: id!, contentKey, contentList });
      setContentList({ ...contentList, [contentKey]: [...filterContentList] });
      IssueSideBarModifyMutate({
        method: 'delete',
        issueId: issue.id,
        category: `${contentKey}s`,
        categoryId: findDropdownItem!.id,
      });
    }
  };

  return (
    <S.Aside>
      <SideBar content={contentList} handleOnChange={updateSideBarItemState} />
      {isIssueAuthor && (
        <Button
          buttonStyle="NO_BORDER"
          iconInfo={{
            icon: 'Trash',
            stroke: COLORS.ERROR.RED,
          }}
          label="이슈 삭제"
          size="SMALL"
        />
      )}
    </S.Aside>
  );
};

export default IsssueDetailAside;
