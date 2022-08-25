import { useState } from 'react';

import * as S from '@/components/Molecules/EditMilestone/index.styles';
import Button from '@/components/Atoms/Button';
import EditInput from '@/components/Molecules/EditMilestone/EditInput';

import { BUTTON_PROPS } from '@/pages/Private/Milestones/constants';
import { EDIT_FORM_INFO } from '@/components/Molecules/EditMilestone/constants';

export interface MilestonesFormTypes {
  title: string;
  description: string;
  dueDate: string;
}

interface EditMilestoneType {
  editMode: 'ADD' | 'MODIFY';
  milestoneInfo?: MilestonesFormTypes;
}

const INIT_FORM_STATE = {
  title: '',
  description: '',
  dueDate: '',
};

const EditMilestone = ({ editMode, milestoneInfo }: EditMilestoneType) => {
  const [milestoneForm, setMilestoneForm] = useState<MilestonesFormTypes>(milestoneInfo || INIT_FORM_STATE);

  const isDisabled = () => {
    if (editMode === 'ADD') {
      return milestoneForm.title === '';
    }

    if (editMode === 'MODIFY') {
      return JSON.stringify(milestoneForm) === JSON.stringify(milestoneInfo) || milestoneForm.title === '';
    }
  };

  return (
    <S.EditMilestone>
      <h2>{editMode === 'ADD' ? '새로운 마일스톤 추가' : '마일스톤 편집'}</h2>
      <S.EditForm>
        {EDIT_FORM_INFO.map((info) => (
          <EditInput
            key={info.formKey}
            {...info}
            value={milestoneInfo && milestoneForm[info.formKey]}
            state={milestoneForm}
            setState={setMilestoneForm}
          />
        ))}
      </S.EditForm>
      <S.EditButtons>
        {editMode === 'MODIFY' && (
          <Button {...BUTTON_PROPS.CANCEL} handleOnClick={() => setMilestoneForm(milestoneInfo!)} />
        )}
        <Button {...BUTTON_PROPS.SAVE} disabled={isDisabled()} />
      </S.EditButtons>
    </S.EditMilestone>
  );
};

export default EditMilestone;
