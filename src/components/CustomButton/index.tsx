import { Button } from 'antd';
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

const CustomButton = (props: { disable: boolean; text: string }) => {
  const { disable, text } = props;
  return <StyledSubmitButton disabled={disable}>{text}</StyledSubmitButton>;
};

export default CustomButton;
