import React, { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import useFetchReaction from '@/api/issue/useFetchReaction';
import useFetchIssue from '@/api/issue/useFetchIssue';
import { LoginUserInfoState } from '@/stores/loginUserInfo';

import * as S from '@/components/Molecules/Comment/index.styled';
import { COLORS } from '@/styles/theme';

import Label from '@/components/Atoms/Label';
import Icon from '@/components/Atoms/Icon';
import Button from '@/components/Atoms/Button';
import Table from '@/components/Molecules/Table';
import TextAreaEditer from '@/components/Molecules/TextAreaEditer';
import Dropdown from '@/components/Molecules/Dropdown';
import ReactionContainer from '@/components/Molecules/Comment/ReactionContainer';

import calcTimeForToday from '@/utils/calcForTimeToday';
import { CommentsTypes, ReactionResponseTypes } from '@/api/issue/types';
import { BUTTON_PROPS, TABLE_ITEM_BUTTON_INFO } from '@/components/Atoms/Button/options';
import { AUTHOR_LABEL_PROPS, EDIT_BUTTON_PROPS } from '@/components/Molecules/Comment/constants';
import { ModalState } from '@/components/Modal';
import { DEFAULT_TEXTAREA_MAX_LENGTH } from '@/components/Molecules/TextAreaEditer/constants';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface CommentTypes {
  issueId: number;
  isAuthor: boolean;
  comment: CommentsTypes;
}

interface ReactorsTypes {
  reactionId: number;
  memberId: number;
  nickname: string;
}

export interface UsedEmojisTypes {
  emoji: string;
  reactors: ReactorsTypes[];
}

type MoleculesCommentType = { setSelectCommentId: React.Dispatch<React.SetStateAction<number>> };

export const definedUsedEmojis = (issueCommentReactionsResponse: ReactionResponseTypes[] | []) => {
  const usedEmojis: UsedEmojisTypes[] = [];

  issueCommentReactionsResponse.forEach(({ id: reactionId, emoji, issueCommentReactorResponse }) => {
    const { id: memberId, nickname } = issueCommentReactorResponse;

    const isExisted = usedEmojis.find((used) => used.emoji === emoji);

    if (isExisted) {
      isExisted.reactors.push({ reactionId, memberId, nickname });
    } else {
      const add: UsedEmojisTypes = { emoji, reactors: [{ reactionId, memberId, nickname }] };
      usedEmojis.push(add);
    }
  });

  return usedEmojis;
};

const Comment = ({
  issueId,
  isAuthor,
  comment,
  setSelectCommentId,
}: CommentTypes & MoleculesCommentType): JSX.Element => {
  const { id: commentId, author, content, createdAt, issueCommentReactionsResponse } = comment;

  const [textAreaValue, setTextAreaValue] = useState<string>(content);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const setIsDeleteModalOpen = useSetRecoilState(ModalState);

  const { reactions } = useFetchReaction();
  const { useUpdateIssueComment } = useFetchIssue();
  const { mutate: updateIssueComment } = useUpdateIssueComment(issueId);

  const memberId = useRecoilValue(LoginUserInfoState).id;
  const hasReaction = issueCommentReactionsResponse.length > 0;
  const usedEmojis = definedUsedEmojis(issueCommentReactionsResponse);

  const isDisabledEditSaveButton = !textAreaValue || textAreaValue === content;

  const handleUpdateCommentButtonClick = () => {
    const newContent = { content: textAreaValue };
    updateIssueComment({ issueId, commentId, memberId, newContent });
    setIsEdit(false);
  };

  const handleEditCancelButtonClick = () => {
    setTextAreaValue(content);
    setIsEdit(false);
  };

  const handleEditButtonClick = () => setIsEdit(true);

  const handleDeleteButtonClick = () => {
    setIsDeleteModalOpen(true);
    setSelectCommentId(commentId);
  };

  const handleOnChangeComment = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    if (!value) return setTextAreaValue('');
    if (Number(value) >= DEFAULT_TEXTAREA_MAX_LENGTH) {
      // eslint-disable-next-line no-param-reassign
      event.target.value = value.slice(0, DEFAULT_TEXTAREA_MAX_LENGTH);
    }
    return setTextAreaValue(value);
  };

  return isEdit ? (
    <S.TextArea>
      <TextAreaEditer textAreaValue={textAreaValue} handleOnChange={handleOnChangeComment} />
      <S.TextAreaButtonTab>
        <Button {...{ ...BUTTON_PROPS.CANCEL, label: '편집 취소' }} handleOnClick={handleEditCancelButtonClick} />
        <Button
          {...BUTTON_PROPS.EDIT_SAVE}
          disabled={isDisabledEditSaveButton}
          handleOnClick={handleUpdateCommentButtonClick}
        />
      </S.TextAreaButtonTab>
    </S.TextArea>
  ) : (
    <Table
      header={
        <S.CommentHeader>
          <span className="author">{author.nickname}</span>
          <span className="timeStamp">{calcTimeForToday(createdAt)}</span>
          <S.CommentTab>
            {isAuthor && (
              <>
                <Label {...AUTHOR_LABEL_PROPS} />
                <Button {...EDIT_BUTTON_PROPS} handleOnClick={handleEditButtonClick} />
                <Button {...TABLE_ITEM_BUTTON_INFO.DELETE} handleOnClick={handleDeleteButtonClick} />
              </>
            )}
            <Dropdown
              indicatorProps={{
                indicatorStyle: 'ICON',
                indicatorLabel: '',
                indicatorIcon: <Icon icon="Smile" stroke={COLORS.LABEL} />,
              }}
              type="Reaction"
              panelProps={{ issueId, commentId, memberId, reactions: reactions!, usedEmojis }}
            />
          </S.CommentTab>
        </S.CommentHeader>
      }
      item={[
        <S.CommentContent>
          <ReactMarkdown className="markdown" remarkPlugins={[remarkGfm]}>
            {content}
          </ReactMarkdown>
          {hasReaction && (
            <ReactionContainer
              reactions={reactions!}
              usedEmojis={usedEmojis}
              issueId={issueId}
              commentId={commentId}
              memberId={memberId}
            />
          )}
        </S.CommentContent>,
      ]}
    />
  );
};
export default Comment;
