import { atom } from 'recoil';

export const iOSMobileModalState = atom<boolean>({
  key: 'iOSMobileModalState',
  default: true,
});
