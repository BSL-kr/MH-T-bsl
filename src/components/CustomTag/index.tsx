import { ReactNode } from 'react';
import styled from 'styled-components';

const CustomTagEle = styled.div<{ borderColor: string; bgColor: string }>`
  display: inline-block;
  border: 1px solid ${props => props.borderColor};
  background-color: ${props => props.bgColor};
  border-radius: 24px;
  padding: 8px 14px;
`;

const CustomTag = (props: { children: ReactNode; borderColor: string; bgColor: string }) => {
  const { children, bgColor, borderColor } = props;
  return (
    <CustomTagEle bgColor={bgColor} borderColor={borderColor}>
      {children}
    </CustomTagEle>
  );
};

export default CustomTag;
