import { IssuesTypes, ContentTypes } from '@/types/issue';

export const issue: ContentTypes = {
  id: 1,
  title: '로우앤슬로우',
  author: {
    id: 1,
    email: 'who.ho3ov@gmail.com',
    nickname: 'hoo',
    profileImage: 'https://avatars.githubusercontent.com/u/68011320?v=4',
  },
  comments: [
    {
      id: 1,
      author: {
        id: 1,
        email: 'who.ho3ov@gmail.com',
        nickname: 'hoo',
        profileImage: 'https://avatars.githubusercontent.com/u/68011320?v=4',
      },
      content: '주문할 메뉴는 오리지널과 비프립플레이트입니다.',
      createdAt: '2022-09-11T00:00:00',
      issueCommentReactionsResponse: [
        {
          id: 1,
          emoji: 'U+1F44D',
          issueCommentReactorResponse: {
            id: 1,
            nickname: 'hoo',
          },
        },
        {
          id: 2,
          emoji: 'U+1F44D',
          issueCommentReactorResponse: {
            id: 2,
            nickname: 'ader',
          },
        },
      ],
    },
    {
      id: 2,
      author: {
        id: 2,
        email: 'ak2j38@gmail.com',
        nickname: 'ader',
        profileImage: 'https://avatars.githubusercontent.com/u/29879110?v=4',
      },
      content: '너무 좋아요 소고기뭇국도 기대됩니다.',
      createdAt: '2022-09-11T00:00:00',
      issueCommentReactionsResponse: [
        {
          id: 4,
          emoji: 'U+1F604',
          issueCommentReactorResponse: {
            id: 1,
            nickname: 'hoo',
          },
        },
      ],
    },
  ],
  issueAssignees: {
    issueAssignees: [
      {
        id: 1,
        email: 'who.ho3ov@gmail.com',
        nickname: 'hoo',
        profileImage: 'https://avatars.githubusercontent.com/u/68011320?v=4',
      },
      {
        id: 2,
        email: 'ak2j38@gmail.com',
        nickname: 'ader',
        profileImage: 'https://avatars.githubusercontent.com/u/29879110?v=4',
      },
    ],
  },
  issueLabels: {
    issueLabels: [
      {
        id: 1,
        title: 'Feature',
        backgroundColorCode: '#d4c5f9',
        description: '기능 개발용 라벨입니다.',
        textColor: 'BLACK',
      },
      {
        id: 2,
        title: 'Docs',
        backgroundColorCode: '#d4c510',
        description: '문서 추가용 라벨입니다.',
        textColor: 'WHITE',
      },
      {
        id: 3,
        title: 'Bugs',
        backgroundColorCode: '#d4c505',
        description: '버그 수정용 라벨입니다.',
        textColor: 'BLACK',
      },
      {
        id: 4,
        title: 'Question',
        backgroundColorCode: '#d4c501',
        description: '질문용 라벨입니다.',
        textColor: 'WHITE',
      },
    ],
  },
  milestone: {
    id: 1,
    title: '제목만 있는 마일스톤',
    description: null,
    dueDate: null,
    openIssueCount: 4,
    closedIssueCount: 0,
    closed: false,
  },
  issueHistories: [],
  createdAt: '2022-09-11T00:00:00',
  lastModifiedAt: '2022-09-11T00:00:00',
  closed: false,
};

export const issues: IssuesTypes = {
  openIssueCount: 5,
  openIssues: {
    content: [
      {
        id: 1,
        title: '로우앤슬로우',
        author: {
          id: 1,
          email: 'who.ho3ov@gmail.com',
          nickname: 'hoo',
          profileImage: 'https://avatars.githubusercontent.com/u/68011320?v=4',
        },
        comments: [
          {
            id: 1,
            author: {
              id: 1,
              email: 'who.ho3ov@gmail.com',
              nickname: 'hoo',
              profileImage: 'https://avatars.githubusercontent.com/u/68011320?v=4',
            },
            content: '주문할 메뉴는 오리지널과 비프립플레이트입니다.',
            createdAt: '2022-09-11T00:00:00',
            issueCommentReactionsResponse: [
              {
                id: 1,
                emoji: 'U+1F44D',
                issueCommentReactorResponse: {
                  id: 1,
                  nickname: 'hoo',
                },
              },
              {
                id: 2,
                emoji: 'U+1F44D',
                issueCommentReactorResponse: {
                  id: 2,
                  nickname: 'ader',
                },
              },
            ],
          },
          {
            id: 2,
            author: {
              id: 2,
              email: 'ak2j38@gmail.com',
              nickname: 'ader',
              profileImage: 'https://avatars.githubusercontent.com/u/29879110?v=4',
            },
            content: '너무 좋아요 소고기뭇국도 기대됩니다.',
            createdAt: '2022-09-11T00:00:00',
            issueCommentReactionsResponse: [
              {
                id: 4,
                emoji: 'U+1F604',
                issueCommentReactorResponse: {
                  id: 1,
                  nickname: 'hoo',
                },
              },
            ],
          },
        ],
        issueAssignees: {
          issueAssignees: [
            {
              id: 1,
              email: 'who.ho3ov@gmail.com',
              nickname: 'hoo',
              profileImage: 'https://avatars.githubusercontent.com/u/68011320?v=4',
            },
            {
              id: 2,
              email: 'ak2j38@gmail.com',
              nickname: 'ader',
              profileImage: 'https://avatars.githubusercontent.com/u/29879110?v=4',
            },
          ],
        },
        issueLabels: {
          issueLabels: [
            {
              id: 1,
              title: 'Feature',
              backgroundColorCode: '#d4c5f9',
              description: '기능 개발용 라벨입니다.',
              textColor: 'BLACK',
            },
            {
              id: 2,
              title: 'Docs',
              backgroundColorCode: '#d4c510',
              description: '문서 추가용 라벨입니다.',
              textColor: 'WHITE',
            },
            {
              id: 3,
              title: 'Bugs',
              backgroundColorCode: '#d4c505',
              description: '버그 수정용 라벨입니다.',
              textColor: 'BLACK',
            },
            {
              id: 4,
              title: 'Question',
              backgroundColorCode: '#d4c501',
              description: '질문용 라벨입니다.',
              textColor: 'WHITE',
            },
          ],
        },
        milestone: {
          id: 1,
          title: '제목만 있는 마일스톤',
          description: null,
          dueDate: null,
          openIssueCount: 4,
          closedIssueCount: 0,
          closed: false,
        },
        issueHistories: [],
        createdAt: '2022-09-11T00:00:00',
        lastModifiedAt: '2022-09-11T00:00:00',
        closed: false,
      },
      {
        id: 2,
        title: '물회',
        author: {
          id: 1,
          email: 'who.ho3ov@gmail.com',
          nickname: 'hoo',
          profileImage: 'https://avatars.githubusercontent.com/u/68011320?v=4',
        },
        comments: [
          {
            id: 3,
            author: {
              id: 2,
              email: 'ak2j38@gmail.com',
              nickname: 'ader',
              profileImage: 'https://avatars.githubusercontent.com/u/29879110?v=4',
            },
            content: '물회에는 역시 오이가 들어가야죠!',
            createdAt: '2022-09-11T00:00:00',
            issueCommentReactionsResponse: [
              {
                id: 3,
                emoji: 'U+1F44E',
                issueCommentReactorResponse: {
                  id: 2,
                  nickname: 'ader',
                },
              },
              {
                id: 6,
                emoji: 'U+1F615',
                issueCommentReactorResponse: {
                  id: 2,
                  nickname: 'ader',
                },
              },
              {
                id: 9,
                emoji: 'U+1F440',
                issueCommentReactorResponse: {
                  id: 2,
                  nickname: 'ader',
                },
              },
            ],
          },
        ],
        issueAssignees: {
          issueAssignees: [
            {
              id: 1,
              email: 'who.ho3ov@gmail.com',
              nickname: 'hoo',
              profileImage: 'https://avatars.githubusercontent.com/u/68011320?v=4',
            },
          ],
        },
        issueLabels: {
          issueLabels: [
            {
              id: 2,
              title: 'Docs',
              backgroundColorCode: '#d4c510',
              description: '문서 추가용 라벨입니다.',
              textColor: 'WHITE',
            },
            {
              id: 4,
              title: 'Question',
              backgroundColorCode: '#d4c501',
              description: '질문용 라벨입니다.',
              textColor: 'WHITE',
            },
          ],
        },
        milestone: {
          id: 1,
          title: '제목만 있는 마일스톤',
          description: null,
          dueDate: null,
          openIssueCount: 4,
          closedIssueCount: 0,
          closed: false,
        },
        issueHistories: [],
        createdAt: '2022-09-11T00:00:00',
        lastModifiedAt: '2022-09-11T00:00:00',
        closed: false,
      },
      {
        id: 3,
        title: '해진뒤',
        author: {
          id: 1,
          email: 'who.ho3ov@gmail.com',
          nickname: 'hoo',
          profileImage: 'https://avatars.githubusercontent.com/u/68011320?v=4',
        },
        comments: [
          {
            id: 4,
            author: {
              id: 1,
              email: 'who.ho3ov@gmail.com',
              nickname: 'hoo',
              profileImage: 'https://avatars.githubusercontent.com/u/68011320?v=4',
            },
            content: '해진뒤 한 번 실패 뒤 재도전!!',
            createdAt: '2022-09-11T00:00:00',
            issueCommentReactionsResponse: [
              {
                id: 5,
                emoji: 'U+1F389',
                issueCommentReactorResponse: {
                  id: 1,
                  nickname: 'hoo',
                },
              },
              {
                id: 7,
                emoji: 'U+2764 U+FE0F',
                issueCommentReactorResponse: {
                  id: 1,
                  nickname: 'hoo',
                },
              },
              {
                id: 8,
                emoji: 'U+1F680',
                issueCommentReactorResponse: {
                  id: 2,
                  nickname: 'ader',
                },
              },
            ],
          },
        ],
        issueAssignees: {
          issueAssignees: [
            {
              id: 1,
              email: 'who.ho3ov@gmail.com',
              nickname: 'hoo',
              profileImage: 'https://avatars.githubusercontent.com/u/68011320?v=4',
            },
            {
              id: 2,
              email: 'ak2j38@gmail.com',
              nickname: 'ader',
              profileImage: 'https://avatars.githubusercontent.com/u/29879110?v=4',
            },
          ],
        },
        issueLabels: {
          issueLabels: [
            {
              id: 1,
              title: 'Feature',
              backgroundColorCode: '#d4c5f9',
              description: '기능 개발용 라벨입니다.',
              textColor: 'BLACK',
            },
          ],
        },
        milestone: {
          id: 1,
          title: '제목만 있는 마일스톤',
          description: null,
          dueDate: null,
          openIssueCount: 4,
          closedIssueCount: 0,
          closed: false,
        },
        issueHistories: [],
        createdAt: '2022-09-11T00:00:00',
        lastModifiedAt: '2022-09-11T00:00:00',
        closed: false,
      },
      {
        id: 4,
        title: '아타리',
        author: {
          id: 1,
          email: 'who.ho3ov@gmail.com',
          nickname: 'hoo',
          profileImage: 'https://avatars.githubusercontent.com/u/68011320?v=4',
        },
        comments: [
          {
            id: 5,
            author: {
              id: 2,
              email: 'ak2j38@gmail.com',
              nickname: 'ader',
              profileImage: 'https://avatars.githubusercontent.com/u/29879110?v=4',
            },
            content: '아타리 가는날은 무슨날?',
            createdAt: '2022-09-11T00:00:00',
            issueCommentReactionsResponse: [],
          },
        ],
        issueAssignees: {
          issueAssignees: [
            {
              id: 1,
              email: 'who.ho3ov@gmail.com',
              nickname: 'hoo',
              profileImage: 'https://avatars.githubusercontent.com/u/68011320?v=4',
            },
            {
              id: 2,
              email: 'ak2j38@gmail.com',
              nickname: 'ader',
              profileImage: 'https://avatars.githubusercontent.com/u/29879110?v=4',
            },
          ],
        },
        issueLabels: {
          issueLabels: [
            {
              id: 1,
              title: 'Feature',
              backgroundColorCode: '#d4c5f9',
              description: '기능 개발용 라벨입니다.',
              textColor: 'BLACK',
            },
            {
              id: 4,
              title: 'Question',
              backgroundColorCode: '#d4c501',
              description: '질문용 라벨입니다.',
              textColor: 'WHITE',
            },
          ],
        },
        milestone: {
          id: 1,
          title: '제목만 있는 마일스톤',
          description: null,
          dueDate: null,
          openIssueCount: 4,
          closedIssueCount: 0,
          closed: false,
        },
        issueHistories: [],
        createdAt: '2022-09-11T00:00:00',
        lastModifiedAt: '2022-09-11T00:00:00',
        closed: false,
      },
      {
        id: 8,
        title: '한국횟집',
        author: {
          id: 1,
          email: 'who.ho3ov@gmail.com',
          nickname: 'hoo',
          profileImage: 'https://avatars.githubusercontent.com/u/68011320?v=4',
        },
        comments: [],
        issueAssignees: {
          issueAssignees: [
            {
              id: 1,
              email: 'who.ho3ov@gmail.com',
              nickname: 'hoo',
              profileImage: 'https://avatars.githubusercontent.com/u/68011320?v=4',
            },
            {
              id: 2,
              email: 'ak2j38@gmail.com',
              nickname: 'ader',
              profileImage: 'https://avatars.githubusercontent.com/u/29879110?v=4',
            },
          ],
        },
        issueLabels: {
          issueLabels: [],
        },
        milestone: {
          id: 2,
          title: '제목과 설명이 있는 마일스톤',
          description: '하지만 완료일은 없다',
          dueDate: null,
          openIssueCount: 1,
          closedIssueCount: 3,
          closed: false,
        },
        issueHistories: [],
        createdAt: '2022-09-11T00:00:00',
        lastModifiedAt: '2022-09-11T00:00:00',
        closed: false,
      },
    ],
    pageable: {
      sort: {
        unsorted: true,
        sorted: false,
        empty: true,
      },
      pageNumber: 0,
      pageSize: 5,
      offset: 0,
      paged: true,
      unpaged: false,
    },
    last: true,
    totalPages: 1,
    totalElements: 5,
    sort: {
      unsorted: true,
      sorted: false,
      empty: true,
    },
    first: true,
    number: 0,
    numberOfElements: 5,
    size: 5,
    empty: false,
  },
  closedIssueCount: 3,
  closedIssues: {
    content: [
      {
        id: 5,
        title: '오제제',
        author: {
          id: 1,
          email: 'who.ho3ov@gmail.com',
          nickname: 'hoo',
          profileImage: 'https://avatars.githubusercontent.com/u/68011320?v=4',
        },
        comments: [],
        issueAssignees: {
          issueAssignees: [
            {
              id: 1,
              email: 'who.ho3ov@gmail.com',
              nickname: 'hoo',
              profileImage: 'https://avatars.githubusercontent.com/u/68011320?v=4',
            },
          ],
        },
        issueLabels: {
          issueLabels: [],
        },
        milestone: {
          id: 2,
          title: '제목과 설명이 있는 마일스톤',
          description: '하지만 완료일은 없다',
          dueDate: null,
          openIssueCount: 1,
          closedIssueCount: 3,
          closed: false,
        },
        issueHistories: [],
        createdAt: '2022-09-11T00:00:00',
        lastModifiedAt: '2022-09-11T00:00:00',
        closed: true,
      },
      {
        id: 6,
        title: '오달',
        author: {
          id: 1,
          email: 'who.ho3ov@gmail.com',
          nickname: 'hoo',
          profileImage: 'https://avatars.githubusercontent.com/u/68011320?v=4',
        },
        comments: [],
        issueAssignees: {
          issueAssignees: [
            {
              id: 2,
              email: 'ak2j38@gmail.com',
              nickname: 'ader',
              profileImage: 'https://avatars.githubusercontent.com/u/29879110?v=4',
            },
          ],
        },
        issueLabels: {
          issueLabels: [],
        },
        milestone: {
          id: 2,
          title: '제목과 설명이 있는 마일스톤',
          description: '하지만 완료일은 없다',
          dueDate: null,
          openIssueCount: 1,
          closedIssueCount: 3,
          closed: false,
        },
        issueHistories: [],
        createdAt: '2022-09-11T00:00:00',
        lastModifiedAt: '2022-09-11T00:00:00',
        closed: true,
      },
      {
        id: 7,
        title: '뱃놈',
        author: {
          id: 1,
          email: 'who.ho3ov@gmail.com',
          nickname: 'hoo',
          profileImage: 'https://avatars.githubusercontent.com/u/68011320?v=4',
        },
        comments: [],
        issueAssignees: {
          issueAssignees: [
            {
              id: 1,
              email: 'who.ho3ov@gmail.com',
              nickname: 'hoo',
              profileImage: 'https://avatars.githubusercontent.com/u/68011320?v=4',
            },
            {
              id: 2,
              email: 'ak2j38@gmail.com',
              nickname: 'ader',
              profileImage: 'https://avatars.githubusercontent.com/u/29879110?v=4',
            },
          ],
        },
        issueLabels: {
          issueLabels: [],
        },
        milestone: {
          id: 2,
          title: '제목과 설명이 있는 마일스톤',
          description: '하지만 완료일은 없다',
          dueDate: null,
          openIssueCount: 1,
          closedIssueCount: 3,
          closed: false,
        },
        issueHistories: [],
        createdAt: '2022-09-11T00:00:00',
        lastModifiedAt: '2022-09-11T00:00:00',
        closed: true,
      },
    ],
    pageable: {
      sort: {
        empty: true,
        unsorted: true,
        sorted: false,
      },
      offset: 0,
      pageNumber: 0,
      pageSize: 5,
      paged: true,
      unpaged: false,
    },
    last: true,
    totalPages: 1,
    totalElements: 3,
    sort: {
      empty: true,
      unsorted: true,
      sorted: false,
    },
    first: true,
    size: 5,
    number: 0,
    numberOfElements: 3,
    empty: false,
  },
  pageable: {
    sort: {
      empty: true,
      unsorted: true,
      sorted: false,
    },
    offset: 0,
    pageNumber: 0,
    pageSize: 5,
    paged: true,
    unpaged: false,
  },
  last: true,
  totalPages: 1,
  totalElements: 5,
  sort: {
    empty: true,
    unsorted: true,
    sorted: false,
  },
  first: true,
  size: 5,
  number: 0,
  numberOfElements: 5,
  empty: false,
};
