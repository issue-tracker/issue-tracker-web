export const FORM_INFO = [
  {
    id: 'id',
    inputType: 'text',
    maxLength: 16,
    placeholder: '아이디',
    pattern: /^[a-zA-Z0-9-*~^_]{6,16}$/g,
    patternMsg: '4자 이상의 영문,숫자,특수문자(-*~^_)를 포함한 아이디를 입력해주세요.',
  },
  {
    id: 'password',
    inputType: 'password',
    maxLength: 16,
    placeholder: '비밀번호',
    pattern: /^[a-zA-Z0-9-~₩!@#$%^&*()_-]{8,16}$/g,
    patternMsg: '8-16자의 영문,숫자,특수문자(~₩!@#$%^&*()_-)를 포함한 비밀번호를 입력해주세요.',
  },
  {
    id: 'passwordVerification',
    inputType: 'password',
    maxLength: 16,
    placeholder: '비밀번호 확인',
    pattern: /^[a-zA-Z0-9-~₩!@#$%^&*()_-]{8,16}$/g,
    patternMsg: '',
  },
  {
    id: 'email',
    inputType: 'email',
    maxLength: 30,
    placeholder: '이메일',
    pattern: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
    patternMsg: '',
  },
  {
    id: 'nickname',
    inputType: 'text',
    maxLength: 12,
    placeholder: '닉네임',
    pattern: /^[ㄱ-힣a-zA-Z0-9-*~^_]{2,12}$/i,
    patternMsg: '다른 유저와 겹치지 않는 별명을 입력해주세요.(2~12자)',
  },
];
