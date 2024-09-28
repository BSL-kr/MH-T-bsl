import { Flex, Form, Input, Select, Button, Typography, Upload, Checkbox } from 'antd';
import LabelWrapper from '../components/LabelWrapper';
import styled from 'styled-components';
import PageHeader from '../components/PageHeader';
import ContentsHeader from '../components/ContentsHeader';

import { UploadOutlined } from '@ant-design/icons';

const { Text } = Typography;

const StyledInput = styled(Input)`
  height: 52px;
  font-family: Gothic A1;
  font-size: 17px;
  font-weight: 500;

  &::placeholder {
    color: #777777;
  }

  &:disabled {
    color: #000000;
    text-align: left;
    background-color: #f4f4f4;
    border: 1px solid #cfcfcf;
  }
`;

const StyledSelect = styled(Select)`
  width: 100%;
  height: 52px;
  border: 1px solid #cfcfcf;
  border-radius: 8px;
  .ant-select-arrow {
    color: gray; // 화살표 아이콘 색상
  }
  .ant-select-selection-placeholder {
    font-family: Gothic A1;
    font-size: 17px;
    font-weight: 500;
    color: #777777;
    text-align: left;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
`;

const StyledButton = styled(Button)`
  display: flex;
  border: 1px solid #cfcfcf;
  border-radius: 8px;
  height: 52px;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  flex: 1;
`;

const StyledText = styled(Text)`
  font-family: Gothic A1;
  font-size: 17px;
  font-weight: 500;
  color: #000000;
`;

const StyledTextArea = styled(Input.TextArea)`
  min-height: 172px;
  border: 1px solid #cfcfcf;
  border-radius: 8px;
  resize: none;
  overflow-y: auto;
  font-family: Gothic A1;
  font-size: 17px;
  padding-top: 16px;
  padding-left: 12px;

  &::placeholder {
    font-weight: 500;
    color: #777777;
  }
`;

const StyledUpload = styled(Upload)`
  border: 1px dashed #cfcfcf;
  border-radius: 8px;
`;

const StyledUploadButton = styled(Button)`
  border: none;
  height: 52px;
  font-family: Gothic A1;
  font-size: 16px;
  font-weight: 600;
  color: #777777;
`;

const StyledSubmitButton = styled(Button)`
  height: 48px;
  width: 100%;
  border-radius: 8px;
  font-family: Gothic A1;
  font-size: 16px;
  font-weight: 600;

  &:disabled {
    border: none;
    color: #fff;
    background-color: #d7dbdf;
  }
`;

const StyledCheckbox = styled(Checkbox)`
  width: 24px;
  height: 24px;

  > span {
    font-family: Gothic A1;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    color: #000000;
  }
`;

function OpinionGather() {
  return (
    <>
      <PageHeader
        title='근로자 의견 등록'
        description='유해·위험요인 등을 포함해 안전보건에 관한
의견을 자유롭게 작성합니다.'
      />
      <ContentsHeader
        title={'신고자 정보'}
        HeaderRight={
          <StyledCheckbox>
            <span>익명</span>
          </StyledCheckbox>
        }
      />
      <Form>
        <Flex gap={24} vertical>
          <LabelWrapper title={'현장'}>
            <StyledInput disabled value={'축열조 현장'} />
          </LabelWrapper>

          <LabelWrapper title={'업체'}>
            <StyledInput disabled value={'MH&T'} />
          </LabelWrapper>

          <LabelWrapper title={'신고자'}>
            <StyledInput disabled value={'김지실'} />
          </LabelWrapper>
        </Flex>

        <Flex gap={24} vertical>
          <LabelWrapper title={'수신처'} hasDot>
            <StyledSelect
              placeholder={'선택해 주세요'}
              suffixIcon={<img src='/images/arrow_drop_down.svg' />}
            >
              <option>i</option>
            </StyledSelect>
          </LabelWrapper>

          <LabelWrapper title={'업체'} hasDot>
            <StyledSelect
              placeholder={'선택해 주세요'}
              suffixIcon={<img src='/images/arrow_drop_down.svg' />}
            >
              <option>i</option>
            </StyledSelect>
          </LabelWrapper>

          <LabelWrapper title={'구분'} hasDot>
            <FlexContainer>
              <StyledButton>
                <StyledText>위험요인</StyledText>
              </StyledButton>
              <StyledButton>
                <StyledText>작업환경</StyledText>
              </StyledButton>
              <StyledButton>
                <StyledText>기타</StyledText>
              </StyledButton>
            </FlexContainer>
          </LabelWrapper>

          <LabelWrapper title={'제목'} hasDot>
            <StyledInput placeholder={'제목을 입력해 주세요.'} />
          </LabelWrapper>

          <LabelWrapper title={'신고 내용'} hasDot>
            <StyledTextArea placeholder={'신고 내용을 입력해 주세요'} autoSize={{ minRows: 6 }} />
          </LabelWrapper>

          <LabelWrapper title={'사진'}>
            <StyledUpload>
              <StyledUploadButton icon={<UploadOutlined />}>파일 올리기</StyledUploadButton>
            </StyledUpload>
          </LabelWrapper>
        </Flex>

        <Form.Item>
          <StyledSubmitButton disabled type='primary' htmlType='submit'>
            완료
          </StyledSubmitButton>
        </Form.Item>
      </Form>
    </>
  );
}

export default OpinionGather;
