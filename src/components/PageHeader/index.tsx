import styled from 'styled-components';

const PageHeaderEle = styled.header<{ isUseDescription: boolean }>`
  margin-bottom: ${props => (props.isUseDescription ? '13px' : '36px')};

  & > h2 {
    font-size: 20px;
    line-height: 25px;
    text-align: left;
    margin-bottom: 13px;
  }

  & > p {
    font-size: 16px;
    line-height: 18px;
    color: #595959;
    text-align: left;
  }
`;

const PageHeader = (props: { title: string; description?: string }) => {
  const { title, description } = props;

  return (
    <PageHeaderEle isUseDescription={Boolean(description)}>
      <h2 className='gothic-a1-extrabold'>{title}</h2>
      {description && <p className='gothic-a1-medium'>{description}</p>}
    </PageHeaderEle>
  );
};

export default PageHeader;
