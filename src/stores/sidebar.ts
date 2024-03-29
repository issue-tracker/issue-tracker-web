import { atom } from 'recoil';
import { ContentListTypes } from '@/components/Organisms/SideBar/types';

const DEFAULT_CONTENT_LIST: ContentListTypes = {
  assignee: [],
  label: [],
  milestone: [],
};

export const SidebarState = atom({
  key: 'SidebarState',
  default: DEFAULT_CONTENT_LIST,
});
