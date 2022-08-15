import { Response } from '@/api/signUp';
import { atom } from 'recoil';

export const UserInfoState = atom<Response>({
  key: 'UserInfoState',
  default: {
    id: 0,
    email: '',
    nickname: '',
    profileImage: 'https://avatars.githubusercontent.com/u/109053323?s=64&v=4',
  },
});
