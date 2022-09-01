import { ComponentStory, ComponentMeta } from '@storybook/react';
import MilestoneTable, { MilestoneListTypes } from '@/components/Organisms/MilestoneTable';
import { milestoneHandlers } from '@/mocks/handlers/milestones';

export default {
  title: 'Organisms/MilestoneTable',
  component: MilestoneTable,
} as ComponentMeta<typeof MilestoneTable>;

const Template: ComponentStory<typeof MilestoneTable> = (args) => <MilestoneTable {...args} />;

const MILESTONE_DATA: MilestoneListTypes = {
  openedMilestones: [
    {
      id: 0,
      title: '마일스톤 1',
      description: null,
      dueDate: '2022-09-11',
      closed: false,
    },
    {
      id: 1,
      title: '마일스톤 2',
      description: '열린 마일스톤에 대한 설명',
      dueDate: null,
      closed: true,
    },
  ],
  closedMilestones: [],
};

export const Initial = Template.bind({});
Initial.args = {
  milestoneData: MILESTONE_DATA,
};

Initial.parameters = {
  msw: {
    handlers: milestoneHandlers,
  },
};
