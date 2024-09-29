import { Drawer } from 'antd';
import { CustomTimePicker } from '../TimePicker';
import styled from 'styled-components';
import CustomButton from '../CustomButton';
import CloseIcon from '../../assets/closeIcon';

const StyledDrawer = styled(Drawer)`
  border-top-left-radius: 8%;
  border-top-right-radius: 8%;

  .ant-drawer-content-wrapper {
    background: red;
  }
`;

const StyledHeader = styled.div`
  font-size: 18px;
  display: flex;
  justify-content: space-between;
`;

const DrawerTimePicker = (props: {
  isOpen: boolean;
  onCloseDrawer: () => void;
  initTime: { standard: string; our: string; minute: string };
  setTime: (data: { standard: string; our: string; minute: string }) => void;
}) => {
  const { isOpen, onCloseDrawer, initTime, setTime } = props;

  return (
    <StyledDrawer
      title={
        <StyledHeader className='gothic-a1-extrabold'>
          <span>시간 선택</span>
          <CloseIcon />
        </StyledHeader>
      }
      placement='bottom'
      onClose={onCloseDrawer}
      open={isOpen}
      key={'bottom'}
      className='time-picker-drawer'
      closeIcon={null}
    >
      <CustomTimePicker initTime={initTime} setTime={setTime} />
      <CustomButton onClick={() => {}} disable={false}>
        확인
      </CustomButton>
    </StyledDrawer>
  );
};

export default DrawerTimePicker;
