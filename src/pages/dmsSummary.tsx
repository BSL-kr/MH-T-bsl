import { Flex, Button } from 'antd';

import styled from 'styled-components';
import ButtonWithStyle from '../components/ButtonWithStyle';
import StyledTable from '../components/StyledTable';
import StyledCollapse from '../components/StyledCollapse';
import PageHeader from '../components/PageHeader';

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

const StyledButtonWrapper = styled(Flex)`
  overflow-x: auto;
`;

function DmsSummary() {
  return (
    <>
      <PageHeader
        title='MSDS 요약정보'
        description='작업 시 사용하는 화학물질에 대한 안전교육 내
용을 확인해 주세요.'
      />
      <Flex vertical gap={28}>
        <StyledButtonWrapper gap={8}>
          <ButtonWithStyle>물질명여섯글자</ButtonWithStyle>
          <ButtonWithStyle disabled>물질명다섯</ButtonWithStyle>
          <ButtonWithStyle>벤젠</ButtonWithStyle>
          <ButtonWithStyle>파라벤</ButtonWithStyle>
        </StyledButtonWrapper>
        <StyledTable />

        <StyledCollapse />

        <StyledSubmitButton disabled type='primary' htmlType='submit'>
          MSDS 요약정보 확인
        </StyledSubmitButton>
      </Flex>
    </>
  );
}

export default DmsSummary;
