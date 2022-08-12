import { IssueTypes, LabelTypes, UserTypes } from '@/components/Molecules/Dropdown/types';

export const UNUSED_OPTIONS = {
  ASSIGNEE: {
    dataId: 'no:assignee',
    title: '담당자가 없는 이슈',
  },
  LABEL: {
    dataId: 'no:label',
    title: '레이블이 없는 이슈',
  },
  MILESTONE: {
    dataId: 'no:milestone',
    title: '마일스톤이 없는 이슈',
  },
};

export const ISSUE_FILTER_LIST: IssueTypes[] = [
  {
    id: 0,
    dataId: 'open',
    title: '열린 이슈',
  },
  {
    id: 1,
    dataId: '@me',
    title: '내가 작성한 이슈',
  },
  {
    id: 2,
    dataId: 'closed',
    title: '닫힌 이슈',
  },
];

export const LABEL_LIST: LabelTypes[] = [
  {
    id: 0,
    title: 'feature',
    backgroundColor: '#007AFF',
  },
  {
    id: 1,
    title: 'Fix',
    backgroundColor: '#FFD1CF',
  },
  {
    id: 2,
    title: 'refactor',
    backgroundColor: '#34C759',
  },
];

export const USER_LIST: UserTypes[] = [
  {
    id: 0,
    loginId: '도비',
    profileImageUrl: 'https://avatars.githubusercontent.com/u/85747667?v=4',
  },
  {
    id: 1,
    loginId: '도톨',
    profileImageUrl: 'https://avatars.githubusercontent.com/u/92701121?v=4',
  },
  {
    id: 2,
    loginId: '후',
    profileImageUrl: 'https://avatars.githubusercontent.com/u/68011320?v=4',
  },
  {
    id: 3,
    loginId: '아더',
    profileImageUrl: 'https://avatars.githubusercontent.com/u/29879110?v=4',
  },
  {
    id: 4,
    loginId: '벡',
    profileImageUrl: 'https://avatars.githubusercontent.com/u/65931336?v=4',
  },
];
