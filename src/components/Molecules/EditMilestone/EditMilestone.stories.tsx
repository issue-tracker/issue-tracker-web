import { ComponentStory, ComponentMeta } from '@storybook/react';
import EditMilestone from '@/components/Molecules/EditMilestone';

export default {
  title: 'Molecules/EditMilestone',
  component: EditMilestone,
} as ComponentMeta<typeof EditMilestone>;

const Template: ComponentStory<typeof EditMilestone> = (args) => <EditMilestone {...args} />;

export const ADD = Template.bind({});
ADD.args = {
  editMode: 'ADD',
};

export const MODIFY = Template.bind({});
MODIFY.args = {
  editMode: 'MODIFY',
  milestoneInfo: {
    title: '편집할 마일스톤',
    description: '편집할 마일스톤에 대한 설명',
    dueDate: '2022-08-31',
  },
};
