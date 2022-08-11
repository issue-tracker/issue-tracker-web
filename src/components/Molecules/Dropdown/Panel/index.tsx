import * as S from '@/components/Molecules/Dropdown/Panel/index.styles';
import PanelPreviewLabel from '@/components/Molecules/Dropdown/Panel/Label';
import { DropdownPanelsTypes, IssueTypes, LabelTypes, UserTypes } from '@/components/Molecules/Dropdown/types';

const DropdownPanel = ({ ...props }: DropdownPanelsTypes) => {
  const { panelTitle, panelType, panelList } = props;

  return (
    <S.Panel>
      <h3>{panelTitle}</h3>
      <ul>
        {panelList.map(({ ...listProps }) => {
          const { id: issueId, title: issueTitle } = listProps as IssueTypes;
          const { id: labelId, title: labelTitle, backgroundColor } = listProps as LabelTypes;
          const { id: userImgId, loginId, profileImageUrl } = listProps as UserTypes;

          const ITEM_KEY = `${panelTitle}-${issueId || labelId || userImgId}`;
          const INPUT_NAME = issueTitle || labelTitle || loginId;

          return (
            <S.PanelItem key={ITEM_KEY}>
              <input id={ITEM_KEY} type={panelType} name={INPUT_NAME} />
              <label htmlFor={ITEM_KEY}>
                {backgroundColor && <PanelPreviewLabel backgroundColor={backgroundColor} />}
                {profileImageUrl && <PanelPreviewLabel profileImageUrl={profileImageUrl} loginId={loginId} />}
                <span>{INPUT_NAME}</span>
              </label>
            </S.PanelItem>
          );
        })}
      </ul>
    </S.Panel>
  );
};

export default DropdownPanel;
