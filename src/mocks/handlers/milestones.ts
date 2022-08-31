// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';

const milestones = {
  openedMilestones: [
    {
      id: 0,
      title: '마일스톤 1',
      description: null,
      dueDate: null,
      closed: false,
    },
    {
      id: 2,
      title: '마일스톤 3',
      description: '열린 마일스톤에 대한 설명',
      dueDate: '2022-08-28',
      closed: false,
    },
  ],
  closedMilestones: [
    {
      id: 1,
      title: '마일스톤 2',
      description: '닫힌 마일스톤에 대한 설명',
      dueDate: null,
      closed: true,
    },
  ],
};

export const milestoneHandlers = [
  rest.get('api/milestones', (req, res, ctx) => {
    if (req.cookies['refresh-token']) {
      return res(ctx.status(200), ctx.json(milestones));
    }

    return res(ctx.status(400), ctx.json(false));
  }),
];
