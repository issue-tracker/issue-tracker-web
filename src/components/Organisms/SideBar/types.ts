import { LabelTypes, UserTypes, MilestoneTypes } from '@/api/issue/types';
import React from 'react';

export interface ContentListTypes {
  assignee: UserTypes[];
  label: LabelTypes[];
  milestone: MilestoneTypes[];
}

export interface ContentItemTypes {
  content: UserTypes[] | LabelTypes[] | MilestoneTypes[];
}

export interface SideBarItemType {
  id: keyof ContentListTypes;
  dropdownTitle: string;
  dropdownListTitle: string;
  dropdownList: UserTypes[] | LabelTypes[] | MilestoneTypes[];
  dropdownType: 'checkbox' | 'radio';
  isError?: boolean;
  resetError?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface UpdateSideBarFuncTypes {
  id: keyof ContentListTypes | 'no:milestone';
  panel: string;
  checked: boolean;
  dropdownList: (UserTypes | LabelTypes | MilestoneTypes)[];
}

export interface SideBarTypes {
  content: ContentListTypes;
  handleOnChange: ({ ...props }: UpdateSideBarFuncTypes) => void;
}

// Type Guard
export const isAssignTypes = (props: UserTypes | LabelTypes | MilestoneTypes): props is UserTypes =>
  (props as UserTypes).nickname !== undefined;

export const isLabelTypes = (props: UserTypes | LabelTypes | MilestoneTypes): props is LabelTypes =>
  (props as LabelTypes).backgroundColorCode !== undefined;

export const isMilestoneTypes = (props: UserTypes | LabelTypes | MilestoneTypes): props is MilestoneTypes =>
  (props as MilestoneTypes).openIssueCount !== undefined && (props as MilestoneTypes).closedIssueCount !== undefined;
