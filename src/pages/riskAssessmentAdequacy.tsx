import { useState } from 'react';
import ContentsHeader from '../components/ContentsHeader';
import PageHeader from '../components/PageHeader';
import RiskAssessmentForm from '../components/RiskAssessmentForm';
import CustomButton from '../components/CustomButton';
import ManagerSetButton from '../components/ManagerSetButton';

const RiskAssessmentPage = () => {
  const [isEdit] = useState(true);
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
      <CustomButton disable={false}>다음</CustomButton>
    </div>
  );
};

export default RiskAssessmentPage;
