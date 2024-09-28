import { Col, Row } from 'antd';
import { ReactNode } from 'react';
import styled from 'styled-components';

const RiskAssessmentFormHeaderEle = styled(Row)<{ isUseHeaderRight: boolean }>`
  background: #f4f4f4;

  padding: 10px 10px 10px 19px;
  height: ${props => (props.isUseHeaderRight ? '68px' : '52px')};
`;

const RiskAssessmentFormHeader = (props: { title: string; HeaderRight: ReactNode | null }) => {
  const { title, HeaderRight } = props;

  return (
    <RiskAssessmentFormHeaderEle isUseHeaderRight={Boolean(HeaderRight)}>
      <Col
        span={24}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <h3 className='gothic-a1-bold'>공종: {title}</h3>
        {HeaderRight}
      </Col>
    </RiskAssessmentFormHeaderEle>
  );
};

export default RiskAssessmentFormHeader;
