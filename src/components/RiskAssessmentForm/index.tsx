import styled from 'styled-components';
import RiskAssessmentFormHeader from './RiskAssessmentFormHeader';
import { ReactNode } from 'react';
import RiskAssessmentFormBody from './RiskAssessmentFormBody';

const RiskAssessmentFormEle = styled.div`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border: 1px solid #cfcfcf;
  overflow: hidden;

  & > div:not(:last-child) {
    border-bottom: 1px solid #cfcfcf;
  }
`;

const RiskAssessmentForm = (props: { title: string; HeaderRight?: ReactNode | null }) => {
  const { title, HeaderRight } = props;

  return (
    <RiskAssessmentFormEle>
      <RiskAssessmentFormHeader title={title} HeaderRight={HeaderRight} />
      <RiskAssessmentFormBody />
    </RiskAssessmentFormEle>
  );
};

export default RiskAssessmentForm;
