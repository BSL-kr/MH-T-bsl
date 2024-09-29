import { Button, ButtonProps } from 'antd';
import { ReactNode } from 'react';
import styled from 'styled-components';

const StyledSubmitButton = styled(Button)`
  height: 48px;
  width: 100%;
  border-radius: 8px;
  font-family: Gothic A1;
  font-size: 16px;
  font-weight: 600;
  color: #fff !important;
  background-color: #2a64f6 !important;

  &:disabled {
    border: none;
    background-color: #d7dbdf !important;
  }
`;

const CustomButton = (props: { disable: boolean; children: string | ReactNode } & ButtonProps) => {
  const { disable, children, ...buttonProps } = props;
  return (
    <StyledSubmitButton disabled={disable} {...buttonProps}>
      {children}
    </StyledSubmitButton>
  );
};

export default CustomButton;
