import { ReactNode } from 'react';
import styled from 'styled-components';

const ContentsHeaderEle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  border-bottom: 1px solid #cfcfcf;
  padding-bottom: 15px;

  .title-section {
    display: flex;
    align-items: center;

    & > span {
      display: inline-block;
      width: 4px;
      height: 17px;
      border-radius: 5px;
      background-color: #2a64f6;
      margin-right: 5px;
    }

    h3 {
      font-size: 16px;
      line-height: 20px;
    }
  }
`;

const ContentsHeader = (props: { title: string; HeaderRight?: ReactNode }) => {
  const { title, HeaderRight } = props;

  return (
    <ContentsHeaderEle>
      <div className='title-section'>
        <span />
        <h3 className='gothic-a1-bold'>{title}</h3>
      </div>
      {HeaderRight}
    </ContentsHeaderEle>
  );
};

export default ContentsHeader;
