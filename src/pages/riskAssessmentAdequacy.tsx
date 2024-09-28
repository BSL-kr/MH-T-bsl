import { useState } from 'react';
import ContentsHeader from '../components/ContentsHeader';
import PageHeader from '../components/PageHeader';
import RiskAssessmentForm from '../components/RiskAssessmentForm';

const RiskAssessmentPage = () => {
  const [isEdit] = useState(true);
  return (
    <div>
      <PageHeader title='위험성평가 적정성 검토' />
      <ContentsHeader title='우원 디아이씨' />
      <RiskAssessmentForm isEdit={isEdit} title='흙막이지보공' />
    </div>
  );
};

export default RiskAssessmentPage;
