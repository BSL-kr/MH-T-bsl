import styled from 'styled-components';

const PageHeaderEle = styled.header`
  margin-bottom: 13px;

  & > h2 {
    font-size: 20px;
    line-height: 25px;
  }

  & > p {
    font-size: 16px;
    line-height: 18px;
  }
`;

const PageHeader = (props: { title: string; description: string }) => {
  const { title, description } = props;

  return (
    <PageHeaderEle>
      <h2 className='gothic-a1-extrabold'>{title}</h2>
      <p className='gothic-a1-medium'>{description}</p>
    </PageHeaderEle>
  );
};

export default PageHeader;
