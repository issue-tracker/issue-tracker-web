import { LABEL_LIST, MILESTONE_LIST, USER_LIST } from '../Dropdown/mocks';
import { ContentListTypes, SideBarItemType } from './types';

export const DEFAULT_CONTENT_LIST: ContentListTypes = {
  assignee: [],
  label: [],
  milestone: [],
};

export const MOCK_CONTENT_LIST: ContentListTypes = {
  assignee: [],
  label: [
    {
      id: 0,
      title: 'feature',
      backgroundColorCode: '#007AFF',
      description: '',
      textColor: 'BLACK',
    },
  ],
  milestone: [
    {
      id: 0,
      title: '마일스톤 1',
      description: null,
      dueDate: null,
      closed: false,
      openIssueCount: 3,
      closedIssueCount: 7,
    },
  ],
};

export const SIDEBAR_PROPS: SideBarItemType[] = [
  {
    id: 'assignee',
    dropdownTitle: '담당자',
    dropdownListTitle: '담당자 필터',
    dropdownList: USER_LIST,
    dropdownType: 'checkbox',
  },
  {
    id: 'label',
    dropdownTitle: '레이블',
    dropdownListTitle: '레이블 필터',
    dropdownList: LABEL_LIST,
    dropdownType: 'checkbox',
  },
  {
    id: 'milestone',
    dropdownTitle: '마일스톤',
    dropdownListTitle: '마일스톤 필터',
    dropdownList: MILESTONE_LIST,
    dropdownType: 'radio',
  },
];
