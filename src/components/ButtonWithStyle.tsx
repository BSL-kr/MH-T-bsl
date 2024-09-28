import { Button } from 'antd';
import styled from 'styled-components';

interface ButtonProps {
  disabled?: boolean;
  children: React.ReactNode;
}

const StyledButton = styled(Button)<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #cfcfcf;
  height: 36px;
  border-radius: 24px;
  font-family: Gothic A1;
  font-size: 16px;
  font-weight: 600;
  color: #000000;

  &:where(.css-dev-only-do-not-override-xlmt2j).ant-btn-default:not(:disabled):not(
      .ant-btn-disabled
    ):hover {
    background-color: #444448;
    border: 1px solid #cfcfcf;
    color: #fff;
  }

  &:disabled {
    cursor: not-allowed;
    color: #999999;
    border-color: #d9d9d9;
    background-color: #f4f4f4;
  }
`;

function ButtonWithStyle({ children, disabled }: ButtonProps) {
  return (
    <StyledButton disabled={disabled}>
      {disabled && <img src='/images/checked.svg' style={{ marginRight: 8 }} />}
      {children}
    </StyledButton>
  );
}

export default ButtonWithStyle;
