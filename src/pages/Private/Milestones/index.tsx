import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { LoginUserInfoState } from '@/stores/loginUserInfo';

import styled from 'styled-components';
import Button from '@/components/Atoms/Button';
import NavLink from '@/components/Molecules/NavLink';
import Header from '@/components/Organisms/Header';

import { BUTTON_PROPS, NAV_DATA } from '@/pages/Private/Milestones/constants';

const NavContainer = styled.div`
  ${({ theme }) => theme.MIXIN.FLEX({ align: 'center', justify: 'space-between' })};
  margin-bottom: 24px;
`;

const Milestones = () => {
  const LoginUserInfoStateValue = useRecoilValue(LoginUserInfoState);
  const [isOpenAddEdit, setIsOpenAddEdit] = useState(true);

  const openAddEdit = () => {
    setIsOpenAddEdit((state) => !state);
  };

  return (
    <div>
      <Header user={LoginUserInfoStateValue} />
      <NavContainer>
        <NavLink navData={NAV_DATA} navLinkStyle="LINE" />
        <Button {...(isOpenAddEdit ? BUTTON_PROPS.ADD : BUTTON_PROPS.CLOSE)} handleOnClick={openAddEdit} />
      </NavContainer>
    </div>
  );
};

export default Milestones;
