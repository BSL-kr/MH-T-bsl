import { Col, Row } from 'antd';
import { ReactNode } from 'react';
import styled from 'styled-components';

const RiskAssessmentFormHeaderEle = styled(Row)`
  background: #f4f4f4;
  height: 52px;

  padding: 10px 10px 10px 19px;
`;

const RiskAssessmentFormHeader = (props: { title: string; HeaderRight: ReactNode | null }) => {
  const { title, HeaderRight } = props;

  return (
    <RiskAssessmentFormHeaderEle>
      <Col
        span={16}
        style={{
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <h3 className='gothic-a1-bold'>공종: {title}</h3>
      </Col>
      <Col span={8}>{HeaderRight}</Col>
    </RiskAssessmentFormHeaderEle>
  );
};

export default RiskAssessmentFormHeader;
