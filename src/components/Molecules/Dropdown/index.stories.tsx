import { ComponentStory, ComponentMeta } from '@storybook/react';
import Dropdown from '@/components/Molecules/Dropdown';
import { UNUSED_OPTIONS, USER_LIST } from '@/components/Molecules/Dropdown/mocks';

export default {
  title: 'Molecules/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Initial = Template.bind({});
Initial.args = {
  indicatorLabel: '담당자',
  indicatorStyle: 'FILTERBAR',
  panelTitle: '담당자 필터',
  panelType: 'radio',
  panelList: USER_LIST,
  unusedOption: UNUSED_OPTIONS.ASSIGNEE,
};
