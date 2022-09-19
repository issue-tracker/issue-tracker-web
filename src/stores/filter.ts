import { atom, selector } from 'recoil';
import { LoginUserInfoState } from '@/stores/loginUserInfo';

export type IssueStateType = 'open' | 'closed' | 'all';
export type IssueAboutMyselfType = 'me';
export type NoFilterKeysType = 'assignee' | 'label' | 'milestone';

export interface FilterStateTypes {
  [key: string]: string | string[];
  is: IssueStateType;
  mentions: string | IssueAboutMyselfType;
  author: string | IssueAboutMyselfType;
  assignee: string | IssueAboutMyselfType;
  label: string[];
  milestone: string;
  no: NoFilterKeysType[];
}

export const initFilterState: FilterStateTypes = {
  is: 'open',
  author: '',
  assignee: '',
  mentions: '',
  label: [],
  milestone: '',
  no: [],
};

export const FilterState = atom<FilterStateTypes>({
  key: 'FilterState',
  default: initFilterState,
});

export const PageState = atom<number>({
  key: 'PageState',
  default: 0,
});

const encodeSpace = (string: string): string => {
  const spaceReg = /\s/g;

  if (string.match(spaceReg)) {
    return `${string.replaceAll(' ', '+')}`;
  }

  return string;
};

const encodeQueryString = (value: string): string => encodeURIComponent(encodeSpace(value));

export const FilterStatsState = selector({
  key: 'FilterStatsState',
  get: ({ get }) => {
    const filterState = get(FilterState);
    const userInfo = get(LoginUserInfoState);
    const page = get(PageState);

    const isFiltering = JSON.stringify(filterState) !== JSON.stringify(initFilterState);

    const filterQueryString = Object.keys(filterState)
      .reduce((acc, key) => {
        const value = filterState[key];

        if (Array.isArray(value)) {
            return (
              acc +
              value.reduce((accState: string, curValue: string) => {
                const newQuery = key === 'label' ? `${key}:"${curValue}"` : `${curValue}:"${''}"`;
                return `${accState} ${encodeQueryString(newQuery)}`;
              }, '')
            );
        }
        if (value) {
          if (key === 'is' && value === 'all') return acc;
            const filterValue = value === '@me' ? userInfo.nickname : value;
            const newQuery = `${key}:"${filterValue}"`;
            return `${acc} ${encodeQueryString(newQuery)}`;
          }
        return acc;
      }, '')
      .trim();
    const quries = filterQueryString.replaceAll(' ', '+');

    return { isFiltering, page, quries };
  },
});