import React, { useRef, useState, useEffect } from 'react';

import * as S from '@/components/Atoms/TextArea/index.styles';
import Icon from '@/components/Atoms/Icon';
import { COLORS } from '@/styles/theme';
import { DEFAULT_TEXTAREA_MAX_LENGTH } from '@/components/Molecules/TextAreaEditer/constants';
import debounce from '@/utils/debounce';

export interface TextAreaTypes {
  textAreaValue: string;
  handleOnChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const PLACEHOLDER = '코멘트를 입력하세요';
const DEBOUNC_DELAY = 300;

const TextArea = ({ textAreaValue, handleOnChange }: TextAreaTypes) => {
  const timerId = useRef<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const countText = `띄어쓰기 포함 ${textAreaValue ? textAreaValue.length : 0}자`;

  const handleFormClick = () => {
    textAreaRef.current?.focus();
    setIsActive(true);
  };

  const handleOnTypingTextArea = debounce(timerId, handleOnChange, DEBOUNC_DELAY);

  useEffect(() => {
    if (textAreaRef.current && !textAreaValue) textAreaRef.current.value = '';
  }, [textAreaValue]);

  return (
    <S.TextAreaContainer isActive={isActive} onClick={handleFormClick} onBlur={() => setIsActive(false)}>
      {textAreaValue && (
        <S.TextAreaLabel>
          <label htmlFor="textArea">{PLACEHOLDER}</label>
          <span>{countText}</span>
        </S.TextAreaLabel>
      )}
      <S.TextArea
        name=""
        id="textArea"
        maxLength={DEFAULT_TEXTAREA_MAX_LENGTH}
        placeholder={PLACEHOLDER}
        ref={textAreaRef}
        onChange={handleOnTypingTextArea}
        defaultValue={textAreaValue}
      />
      <S.TextAreaAddFile className="textArea_addFile" isActive={isActive}>
        <label htmlFor="textArea_addFile">
          <input id="textArea_addFile" type="file" />
          <Icon icon="PaperClip" stroke={COLORS.LABEL} />
          <span>파일 첨부하기</span>
        </label>
      </S.TextAreaAddFile>
    </S.TextAreaContainer>
  );
};

export default TextArea;
