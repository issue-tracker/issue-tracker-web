// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';
import { MilestoneListTypes } from '@/components/Organisms/MilestoneTable';
import { MilestoneItemTypes } from '@/components/Molecules/MilestoneItem';

const tokenErrorMessage = { message: '토큰이 유효하지 않습니다.' };

const milestones: MilestoneListTypes = {
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
    const requestData = await req.json();
    const { title, description, dueDate } = requestData;

    if (!title) {
      return res(ctx.status(400), ctx.json('필수 입력값을 입력해주세요'));
    }

    if (!req.cookies['refresh-token']) {
      return res(ctx.status(400), ctx.json(tokenErrorMessage.message));
    }

    const newMilestone = {
      id: milestones.openedMilestones.length + 1,
      title,
      description,
      dueDate,
      closed: true,
    };

    milestones.openedMilestones.push(newMilestone);

    if (req.cookies['refresh-token']) {
      return res(ctx.status(200), ctx.json(newMilestone));
    }

    return res(ctx.status(400), ctx.json(tokenErrorMessage));
  }),

  rest.patch('api/milestones/:id', async (req, res, ctx) => {
    const { id } = req.params;
    const patchMilestone = await req.json();

    const patchMilestones = Object.values(milestones).map((state: MilestoneItemTypes[]) => {
      if (state.find((el) => el.id === Number(id))) {
        const updateMilestones = state.map((el) => (el.id === Number(id) ? { ...el, ...patchMilestone } : el));
        return updateMilestones;
      }
      return state;
    });

    const [newOpenedMilestones, newClosedMilestones] = patchMilestones;
    milestones.openedMilestones = newOpenedMilestones;
    milestones.closedMilestones = newClosedMilestones;

    if (req.cookies['refresh-token']) {
      return res(ctx.status(200), ctx.json(patchMilestones));
    }

    return res(ctx.status(400), ctx.json(false));
  }),

  rest.delete('api/milestones/:id', async (req, res, ctx) => {
    const { id } = req.params;

    const deleteMilestones = Object.values(milestones).map((state: MilestoneItemTypes[]) => {
      if (state.find((el) => el.id === Number(id))) {
        return state.filter((el) => el.id !== Number(id));
      }
      return state;
    });

    const [newOpenedMilestones, newClosedMilestones] = deleteMilestones;
    milestones.openedMilestones = newOpenedMilestones;
    milestones.closedMilestones = newClosedMilestones;

    if (req.cookies['refresh-token']) {
      return res(ctx.status(200), ctx.json({ message: '성공적으로 삭제되었습니다.' }));
    }

    return res(ctx.status(400), ctx.json(tokenErrorMessage));
  }),
];
