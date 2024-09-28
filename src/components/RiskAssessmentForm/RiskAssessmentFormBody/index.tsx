import { Col, Row } from 'antd';
import CustomTag from '../../CustomTag';
import styled from 'styled-components';

const CustomCol = styled(Col)`
  align-items: center;
  justify-content: center;
  padding: 10px;

  &:first-child {
    border-right: 1px solid #cfcfcf;
  }
`;

const ColText = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;

  text-align: left;

  font-size: 16px;
  line-height: 20px;
`;

const RiskAssessmentFormBody = () => {
  return (
    <>
      <Row>
        <Col span={24}>
          <div
            style={{
              display: 'flex',
              gap: '8px',
              alignItems: 'center',
              padding: '20px 11px'
            }}
          >
            <CustomTag bgColor='#fff' borderColor='#2A64F6'>
              <span
                style={{
                  color: '#2A64F6'
                }}
                className='gothic-a1-semibold'
              >
                단위작업
              </span>
            </CustomTag>
            <span
              className='gothic-a1-medium'
              style={{
                fontSize: 16,
                lineHeight: '20px'
              }}
            >
              자재반입, 반출
            </span>
          </div>
        </Col>
      </Row>
      <Row
        style={{
          height: 58
        }}
      >
        <CustomCol span={6}>
          <ColText className='gothic-a1-semibold notic-red-dot'>위험요인</ColText>
        </CustomCol>
        <CustomCol span={18}>
          <ColText className='gothic-a1-medium'>
            리프트카 사용 운반 시 장비 뒤집 힘으로 인한 근로자 깔림 위험
          </ColText>
        </CustomCol>
      </Row>
      <Row>
        <CustomCol></CustomCol>
        <CustomCol></CustomCol>
      </Row>
      <Row>
        <CustomCol></CustomCol>
        <CustomCol></CustomCol>
      </Row>
      <Row>
        <CustomCol></CustomCol>
        <CustomCol></CustomCol>
      </Row>
      <Row>
        <CustomCol></CustomCol>
        <CustomCol></CustomCol>
      </Row>
      <Row>
        <CustomCol></CustomCol>
        <CustomCol></CustomCol>
      </Row>
    </>
  );
};

export default RiskAssessmentFormBody;
