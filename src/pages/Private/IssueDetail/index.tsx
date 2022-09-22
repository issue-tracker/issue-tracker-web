import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useParams } from 'react-router-dom';
import { LoginUserInfoState } from '@/stores/loginUserInfo';
import useFetchIssue from '@/api/issue/useFetchIssue';

import * as S from '@/pages/Private/IssueDetail/index.styled';
import Button from '@/components/Atoms/Button';
import { BUTTON_PROPS } from '@/components/Atoms/Button/options';
import TextArea from '@/components/Atoms/TextArea';
import UserImage from '@/components/Atoms/UserImage';
import Comment from '@/components/Molecules/Comment';
import IssueHeader from '@/components/Organisms/IssueHeader';
import IsssueDetailAside from '@/pages/Private/IssueDetail/Aside';

import { DEFAULT_TEXTAREA_MAX_LENGTH } from '@/components/Molecules/TextAreaEditer/constants';

const IssueDetail = (): JSX.Element => {
  const { issueId } = useParams();
  const { useIssueData, useAddIssueComment } = useFetchIssue(Number(issueId));
  const { data: issue } = useIssueData(Number(issueId));
  const { mutate: addIssueComment } = useAddIssueComment(Number(issueId));

  const { id, closed, title, createdAt, lastModifiedAt, author, comments } = issue!;

  const userInfo = useRecoilValue(LoginUserInfoState);
  const memberId = userInfo.id;
  const [textAreaValue, setTextAreaValue] = useState<string>('');
  const [_, setSelectCommentId] = useState<number>(0);

  const isTypingNewComment = !textAreaValue;

  const handleAddCommentButton = () => {
    const newComment = { content: textAreaValue };
    addIssueComment({ newComment, memberId, issueId: Number(issueId) });
    setTextAreaValue('');
  };

  const handleOnChangeNewComment = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    if (!value) return setTextAreaValue('');
    if (Number(value) >= DEFAULT_TEXTAREA_MAX_LENGTH) {
      // eslint-disable-next-line no-param-reassign
      event.target.value = value.slice(0, DEFAULT_TEXTAREA_MAX_LENGTH);
    }
    return setTextAreaValue(value);
  };

  return (
    <>
      <IssueHeader
        id={id}
        closed={closed}
        title={title}
        createdAt={createdAt}
        lastModifiedAt={lastModifiedAt}
        author={author}
        commentNum={comments.length}
      />
      <S.IssueContent>
        <S.IssueComments>
          {comments.map((comment) => {
            const isCommentAuthor = memberId === comment.author.id;

            return (
              <S.Comment key={comment.id}>
                <UserImage {...comment.author} imgSize="MEDIUM" />
                <Comment
                  issueId={id}
                  isAuthor={isCommentAuthor}
                  comment={comment}
                  setSelectCommentId={setSelectCommentId}
                />
              </S.Comment>
            );
          })}
          <S.NewComment>
            <UserImage {...userInfo} imgSize="MEDIUM" />
            <TextArea textAreaValue={textAreaValue} handleOnChange={handleOnChangeNewComment} />
          </S.NewComment>
          <Button {...BUTTON_PROPS.ADD} disabled={isTypingNewComment} handleOnClick={handleAddCommentButton} />
        </S.IssueComments>
        <IsssueDetailAside issue={issue!} memberId={memberId} />
      </S.IssueContent>
    </>
  );
};

export default IssueDetail;
