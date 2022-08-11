import { ComponentStory, ComponentMeta } from '@storybook/react';
import Dropdown from '@/components/Molecules/Dropdown';
import { USER_LIST } from '@/components/Molecules/Dropdown/mocks';

export default {
  title: 'Molecules/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Initial = Template.bind({});
Initial.args = {
  indicatorLabel: '타이틀',
  indicatorStyle: 'STANDARD',
  panelTitle: '체크박스 필터',
  panelType: 'checkbox',
  panelList: USER_LIST,
};
