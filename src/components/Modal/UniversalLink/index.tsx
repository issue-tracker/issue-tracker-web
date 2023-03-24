import Button from '@/components/Atoms/Button';
import AppLogo from '@/assets/logo/issueTracker.png';
import * as S from '@/components/Modal/UniversalLink/index.styles';

const UniversalLink = () => (
  <S.UniversalLink>
    <img src={AppLogo} alt="Issue Tracker App " />
    <p>
      Issue Tracker를 <br />
      최적의 환경에서 이용해보세요!
    </p>
    <Button buttonStyle="STANDARD" label="앱으로 열기" size="MEDIUM" />
    <S.ContinueButton buttonStyle="NO_BORDER" label="괜찮아요. 모바일웹으로 볼게요." size="SMALL" />
  </S.UniversalLink>
);

export default UniversalLink;
