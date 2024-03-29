/* eslint-disable no-restricted-globals */
import * as S from '@/components/Atoms/ProgressBar/index.styles';

export interface PrograssBarTypes {
  open: number;
  close: number;
  showState?: boolean;
  title?: string;
}

const PrograssBar = ({ open, close, showState, title }: PrograssBarTypes) => {
  const percent = 100;
  const progressValue = Math.floor((close / (open + close)) * 100) || 0;

  return (
    <>
      <S.ProgressBar value={progressValue} max={percent} />
      {title && <S.ProgressTitle>{title}</S.ProgressTitle>}
      {showState && (
        <S.ProgressState>
          <span>{progressValue}%</span>
          <div>
            <span>열린 이슈 {open}</span>
            <span>닫힌 이슈 {close}</span>
          </div>
        </S.ProgressState>
      )}
    </>
  );
};

export default PrograssBar;
