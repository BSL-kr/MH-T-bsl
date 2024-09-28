import { Button, Col, Input, Row, Select } from 'antd';
import CustomTag from '../../CustomTag';
import styled from 'styled-components';
import TextArea from 'antd/es/input/TextArea';
import ArrowDropDownIcon from '../../../assets/arrowDropDownIcon';
import CalrendarIcon from '../../../assets/calrendarIcon';

const CustomCol = styled(Col)<{ isEdit?: boolean }>`
  min-width: 84px;
  flex: 1;
  display: flex;

  align-items: center;
  justify-content: center;
  padding: ${props => (props.isEdit ? '6px' : '10px')};

  &:nth-child(2) {
    min-width: 83px;
  }

  &:not(:last-child) {
    border-right: 1px solid #cfcfcf;
  }

  &.warning {
    background-color: #ffeeef;
    color: #e3051c;
  }

  &.align-left {
    justify-content: flex-start;
  }
`;

const ColText = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  text-align: left;

  font-size: 16px;
  line-height: 20px;
  word-break: keep-all;
`;

const StyledAntdTextArea = styled(TextArea)`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  text-align: left;

  font-size: 16px;
  line-height: 20px !important;
  word-break: keep-all;
`;

const StyledAntdInput = styled(Input)`
  display: inline-flex;
  height: 100%;
  align-items: center;
  justify-content: center;

  padding: 8px !important;

  text-align: left;

  font-size: 16px;
  line-height: 20px !important;
  word-break: keep-all;
`;

const StyledBtton = styled(Button)`
  background-color: #444448;
  color: #fff;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 53px;
  height: 43px;
`;

const RiskAssessmentFormBody = (props: { isEdit?: boolean }) => {
  const { isEdit } = props;

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
          height: isEdit ? '76px' : '58px'
        }}
      >
        <CustomCol span={6}>
          <ColText className={`gothic-a1-semibold ${isEdit ? 'notic-red-dot' : ''}`}>
            위험요인
          </ColText>
        </CustomCol>
        <CustomCol span={18} isEdit={isEdit}>
          {isEdit ? (
            <StyledAntdTextArea
              rows={2}
              value={'리프트카 사용 운반 시 장비 뒤집 힘으로 인한 근로자 깔림 위험'}
              className='gothic-a1-medium'
            />
          ) : (
            <ColText className='gothic-a1-medium'>
              리프트카 사용 운반 시 장비 뒤집 힘으로 인한 근로자 깔림 위험
            </ColText>
          )}
        </CustomCol>
      </Row>
      <Row
        style={{
          height: isEdit ? '56px' : '44px'
        }}
      >
        <CustomCol span={6}>
          <ColText className={`gothic-a1-semibold ${isEdit ? 'notic-red-dot' : ''}`}>빈도</ColText>
        </CustomCol>
        <CustomCol span={6} isEdit={isEdit}>
          {isEdit ? (
            <StyledAntdInput value='3' className='gothic-a1-medium' />
          ) : (
            <ColText className='gothic-a1-medium'>3</ColText>
          )}
        </CustomCol>
        <CustomCol span={6}>
          <ColText className={`gothic-a1-semibold ${isEdit ? 'notic-red-dot' : ''}`}>강도</ColText>
        </CustomCol>
        <CustomCol span={6} isEdit={isEdit}>
          {isEdit ? (
            <StyledAntdInput value='2' className='gothic-a1-medium' />
          ) : (
            <ColText className='gothic-a1-medium'>2</ColText>
          )}
        </CustomCol>
      </Row>
      <Row
        style={{
          height: isEdit ? '56px' : '44px'
        }}
      >
        <CustomCol span={6}>
          <ColText className={`gothic-a1-semibold ${isEdit ? 'notic-red-dot' : ''}`}>
            위험등급
          </ColText>
        </CustomCol>
        <CustomCol span={6} className='warning'>
          <ColText className='gothic-a1-medium'>상</ColText>
        </CustomCol>
        <CustomCol span={6}>
          <ColText className={`gothic-a1-semibold ${isEdit ? 'notic-red-dot' : ''}`}>
            피해형태
          </ColText>
        </CustomCol>
        <CustomCol span={6}>
          {isEdit ? (
            <Select
              defaultValue='깔림'
              className='gothic-a1-medium'
              options={[]}
              suffixIcon={<ArrowDropDownIcon />}
            />
          ) : (
            <ColText className='gothic-a1-medium'>깔림</ColText>
          )}
        </CustomCol>
      </Row>
      <Row
        style={{
          height: isEdit ? '76px' : '58px'
        }}
      >
        <CustomCol span={6}>
          <ColText className={`gothic-a1-semibold ${isEdit ? 'notic-red-dot' : ''}`}>
            감소대책
          </ColText>
        </CustomCol>
        <CustomCol span={18} isEdit={isEdit}>
          {isEdit ? (
            <StyledAntdTextArea
              rows={2}
              value={'이동통로 정리정돈 및 이상유무 확인 후 이동'}
              className='gothic-a1-medium'
            />
          ) : (
            <ColText className='gothic-a1-medium'>
              이동통로 정리정돈 및 이상유무 확인 후 이동
            </ColText>
          )}
        </CustomCol>
      </Row>
      <Row
        style={{
          height: isEdit ? '76px' : '58px'
        }}
      >
        <CustomCol span={6}>
          <ColText className={`gothic-a1-semibold ${isEdit ? 'notic-red-dot' : ''}`}>
            개선조치 담당자
          </ColText>
        </CustomCol>

        <CustomCol span={18} className='align-left' isEdit={isEdit}>
          {isEdit ? (
            <StyledAntdInput
              value='서형중'
              className='gothic-a1-medium'
              suffix={<StyledBtton className='gothic-a1-semibold'>지정</StyledBtton>}
            />
          ) : (
            <ColText className='gothic-a1-medium'>서형중</ColText>
          )}
        </CustomCol>
      </Row>
      <Row
        style={{
          height: isEdit ? '76px' : '58px'
        }}
      >
        <CustomCol span={6}>
          <ColText className={`gothic-a1-semibold ${isEdit ? 'notic-red-dot' : ''}`}>
            조치 예정일
          </ColText>
        </CustomCol>
        <CustomCol span={18} className='align-left' isEdit={isEdit}>
          {isEdit ? (
            <StyledAntdInput
              value='24.02.13 '
              className='gothic-a1-medium'
              suffix={<CalrendarIcon />}
            />
          ) : (
            <ColText className='gothic-a1-medium'>24.02.13 </ColText>
          )}
        </CustomCol>
      </Row>
    </>
  );
};

export default RiskAssessmentFormBody;
