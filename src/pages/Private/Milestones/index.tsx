import { lazy, Suspense, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { LoginUserInfoState } from '@/stores/loginUserInfo';

import styled from 'styled-components';
import Button from '@/components/Atoms/Button';
import EditMilestone from '@/components/Molecules/EditMilestone';
import NavLink from '@/components/Molecules/NavLink';
import Header from '@/components/Organisms/Header';

import SkeletonMilestoneTable from '@/components/Skeleton/MilestoneTable';

import { BUTTON_PROPS, NAV_DATA } from '@/pages/Private/Milestones/constants';

import useFetchMilestone from '@/hooks/useFetchMilestone';

const MilestoneTable = lazy(() => import('@/components/Organisms/MilestoneTable'));

const NavContainer = styled.div`
  ${({ theme }) => theme.MIXIN.FLEX({ align: 'center', justify: 'space-between' })};
  margin-bottom: 24px;
`;

const Milestones = () => {
  const LoginUserInfoStateValue = useRecoilValue(LoginUserInfoState);
  const [isOpenAddEdit, setIsOpenAddEdit] = useState(false);

  const { milestoneData } = useFetchMilestone();

  const openAddEdit = () => {
    setIsOpenAddEdit((state) => !state);
  };

  return (
    <div>
      <Header user={LoginUserInfoStateValue} />
      <NavContainer>
        <NavLink navData={NAV_DATA} navLinkStyle="LINE" />
        <Button {...(!isOpenAddEdit ? BUTTON_PROPS.ADD : BUTTON_PROPS.CLOSE)} handleOnClick={openAddEdit} />
      </NavContainer>
      {isOpenAddEdit && <EditMilestone editMode="ADD" setOpenState={setIsOpenAddEdit} />}
      <Suspense fallback={<SkeletonMilestoneTable />}>
        <MilestoneTable milestoneData={milestoneData!} />
      </Suspense>
    </div>
  );
};

export default Milestones;
