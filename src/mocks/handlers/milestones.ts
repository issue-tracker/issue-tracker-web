// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';

const tokenErrorMessage = { message: '토큰이 유효하지 않습니다.' };

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

  rest.post('api/milestones', async (req, res, ctx) => {
    const newMilestone = await req.json();
    const { title, description, dueDate } = newMilestone;

    if (!title) {
      return res(ctx.status(400), ctx.json('필수 입력값을 입력해주세요'));
    }

    if (!req.cookies['refresh-token']) {
      return res(ctx.status(400), ctx.json(tokenErrorMessage.message));
    }

    milestones.openedMilestones.push(newMilestone);

    const response = {
      id: milestones.openedMilestones.length + 1,
      title,
      description,
      dueDate,
      closed: true,
    };

    if (req.cookies['refresh-token']) {
      return res(ctx.status(200), ctx.json(response));
    }

    return res(ctx.status(400), ctx.json(tokenErrorMessage));
  }),
];
