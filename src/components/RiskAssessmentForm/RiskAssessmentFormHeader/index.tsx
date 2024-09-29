import { Col, Row } from 'antd';
import { ReactNode } from 'react';
import styled from 'styled-components';

const StyledCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const RiskAssessmentFormHeaderEle = styled(Row)<{ $isUseHeaderRight: boolean }>`
  background: #f4f4f4;

  padding: 10px 10px 10px 19px;
  min-height: ${props => (props.$isUseHeaderRight ? '68px' : '52px')};

  h3 {
    font-size: 16px;
  }
`;

const RiskAssessmentFormHeader = (props: { title: string; HeaderRight: ReactNode | null }) => {
  const { title, HeaderRight } = props;

  return (
    <RiskAssessmentFormHeaderEle $isUseHeaderRight={Boolean(HeaderRight)}>
      <StyledCol span={24}>
        <h3 className='gothic-a1-bold'>공종: {title}</h3>
        {HeaderRight}
      </StyledCol>
    </RiskAssessmentFormHeaderEle>
  );
};

export default RiskAssessmentFormHeader;
