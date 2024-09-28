import { useState } from 'react';
import ContentsHeader from '../components/ContentsHeader';
import PageHeader from '../components/PageHeader';
import RiskAssessmentForm from '../components/RiskAssessmentForm';
import CustomButton from '../components/CustomButton';

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
        <RiskAssessmentForm isEdit={isEdit} title='흙막이지보공' />
      </div>
      <CustomButton text='다음' disable={false} />
    </div>
  );
};

export default RiskAssessmentPage;
