/* eslint-disable react/prop-types */
import React, { PropsWithChildren } from 'react';

import { QueryClient, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { ErrorMessage } from '@/api/constants';

import LoginExtensionComponent from '@/components/ErrorBoundary/Refresh';
import DuplicateEmail from '@/components/Organisms/DuplicateEmail';
import ExpiredLogin from '@/components/ErrorBoundary/ExpiredLogin';
import NotValidRedirectCode from '@/components/ErrorBoundary/NotValidCode';
import NotExistIssue from '@/components/ErrorBoundary/NotExistIssue';
import InternalServerError from '@/components/ErrorBoundary/InternalServerError';

import Modal from '@/components/Modal';

type FallbackRenderPropsType = {
  resetErrorBoundary: () => void;
  resetState: () => void;
  errorCode: number;
};

type FallbackRenderType = (props: FallbackRenderPropsType) => React.ReactElement<React.FunctionComponent>;

interface ErrorBoundaryProps {
  queryClient: QueryClient;
  fallbackRender?: FallbackRenderType;
}

interface ErrorBoundaryState {
  error: AxiosError<ErrorMessage> | null;
}

const initErrorState: ErrorBoundaryState = { error: null };

class ErrorBoundary extends React.Component<
  React.PropsWithRef<PropsWithChildren<ErrorBoundaryProps>>,
  ErrorBoundaryState
> {
  constructor(props: React.PropsWithRef<PropsWithChildren<ErrorBoundaryProps>> & ErrorBoundaryState) {
    super(props);
    this.state = initErrorState;
  }

  static getDerivedStateFromError(error: AxiosError<ErrorMessage>) {
    return { error };
  }

  componentDidUpdate(_: never, prevState: ErrorBoundaryState) {
    const { error } = this.state;
    // eslint-disable-next-line no-useless-return
    if (!error) return;
  }

  resetState() {
    this.setState(initErrorState);
  }

  resetQueryClient() {
    this.setState(initErrorState);

    const { queryClient } = this.props;
    queryClient.clear();
  }

  fallbackUIRender(fallbackRender: FallbackRenderType, data: ErrorMessage) {
    const fallbackRenderProps: FallbackRenderPropsType = {
      resetErrorBoundary: this.resetQueryClient.bind(this),
      resetState: this.resetState.bind(this),
      errorCode: data.errorCode,
    };

    switch (data.errorCode) {
      case 1000:
      case 1001:
        return <LoginExtensionComponent>{fallbackRender(fallbackRenderProps)}</LoginExtensionComponent>;
      case 1002:
      case 1004:
        return (
          <>
            {fallbackRender(fallbackRenderProps)}
            <Modal>
              <ExpiredLogin resetError={() => this.resetQueryClient()} isModal />
            </Modal>
          </>
        );
      default:
        return fallbackRender(fallbackRenderProps);
    }
  }

  render() {
    const { children, fallbackRender } = this.props;
    const { error } = this.state;

    if (error) {
      const { status, data } = error.response!;

      if (status === 500) {
        return <InternalServerError resetError={() => this.resetState()} />;
      }

      if (fallbackRender) {
        return this.fallbackUIRender(fallbackRender, data);
      }

      switch (data.errorCode) {
        // 액세스 토큰이 만료되었거나 유효하지 않는 경우
        case 1000:
        case 1001:
          return <LoginExtensionComponent>{children}</LoginExtensionComponent>;

        // 리프레시 토큰이 만료되었거나 유효하지 않는 경우
        case 1002:
        case 1004:
          return <ExpiredLogin resetError={() => this.resetQueryClient()} />;

        // oauth 로그인시 리다이렉트로 돌아오는 코드가 유효하지 않는 경우
        case 2001:
          return <NotValidRedirectCode resetError={() => this.resetQueryClient()} />;

        // oauth 회원가입시 이미 가입된 이메일이 있는 경우
        case 2103:
          return (
            <DuplicateEmail
              provider="이메일 가입하기"
              email="example@email.com"
              handleOnClick={() => this.resetQueryClient()}
            />
          );

        // 존재하지 않는 이슈에 접근하는 경우
        case 3000:
          return <NotExistIssue resetError={() => this.resetQueryClient()} />;
      }
    }

    return children;
  }
}

interface CustomErrorBoundaryTypes {
  fallbackRender?: FallbackRenderType;
  children: React.ReactNode;
}

const CustomErrorBoundary = ({ children, fallbackRender }: CustomErrorBoundaryTypes) => {
  const queryClient = useQueryClient();

  return (
    <ErrorBoundary queryClient={queryClient} fallbackRender={fallbackRender}>
      {children}
    </ErrorBoundary>
  );
};

export default CustomErrorBoundary;
