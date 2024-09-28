import styled from 'styled-components';
import ArrowRightIcon from '../../assets/arrowRightIcon';
import { Button } from 'antd';

const StyledManagerSetButton = styled(Button)`
  width: 110px;
  height: 46px;

  display: flex;
  white-space: break-spaces;
  padding: 4px 8px;

  color: #fff !important;
  background-color: #2a64f6 !important;

  display: flex;
  align-items: center;
  border: none;
  line-height: 1.3;
  .title {
    white-space: normal;
    width: 78px;
    font-size: 15px;
  }
`;

const ManagerSetButton = () => {
  return (
    <StyledManagerSetButton>
      <div className='title gothic-a1-semibold'>조치 담당자 일괄 지정</div>
      <ArrowRightIcon />
    </StyledManagerSetButton>
  );
};

export default ManagerSetButton;
