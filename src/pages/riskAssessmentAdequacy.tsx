import { useState } from 'react';
import ContentsHeader from '../components/ContentsHeader';
import PageHeader from '../components/PageHeader';
import RiskAssessmentForm from '../components/RiskAssessmentForm';
import CustomButton from '../components/CustomButton';
import ManagerSetButton from '../components/ManagerSetButton';
import DrawerTimePicker from '../components/DrawerTimePicker';

const RiskAssessmentPage = () => {
  const [isEdit] = useState(true);
  const [isOpen, setOpen] = useState(false);
  const [timeData, setTime] = useState({
    standard: 'AM',
    our: '10',
    minute: '10'
  });

  const onChangeOpen = () => {
    setOpen(state => !state);
  };

  return (
    <div>
      <div
        style={{
          marginBottom: 32
        }}
      >
        <PageHeader title='위험성평가 적정성 검토' />
        <ContentsHeader title='우원 디아이씨' />
        <RiskAssessmentForm
          isEdit={isEdit}
          title='흙막이지보공'
          HeaderRight={<ManagerSetButton />}
        />
        <RiskAssessmentForm isEdit={!isEdit} title='공종2' />
      </div>
      <CustomButton onClick={onChangeOpen} disable={false}>
        다음
      </CustomButton>
      <DrawerTimePicker
        initTime={timeData}
        setTime={setTime}
        isOpen={isOpen}
        onCloseDrawer={onChangeOpen}
      />
    </div>
  );
};

export default RiskAssessmentPage;
