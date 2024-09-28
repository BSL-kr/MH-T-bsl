import styled from 'styled-components';
import RiskAssessmentFormHeader from './RiskAssessmentFormHeader';
import { ReactNode } from 'react';
import RiskAssessmentFormBody from './RiskAssessmentFormBody';

const RiskAssessmentFormEle = styled.div`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border: 1px solid #cfcfcf;
  overflow: hidden;
  margin-bottom: 24px;

  & > div:not(:last-child) {
    border-bottom: 1px solid #cfcfcf;
  }
`;

const RiskAssessmentForm = (props: {
  title: string;
  HeaderRight?: ReactNode | null;
  isEdit: boolean;
}) => {
  const { title, HeaderRight, isEdit } = props;

  return (
    <RiskAssessmentFormEle>
      <RiskAssessmentFormHeader title={title} HeaderRight={HeaderRight} />
      <RiskAssessmentFormBody isEdit={isEdit} />
      <RiskAssessmentFormBody isEdit={isEdit} />
    </RiskAssessmentFormEle>
  );
};

export default RiskAssessmentForm;
