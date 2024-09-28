import { Typography, Flex, Form } from 'antd';
import { ReactNode } from 'react';
import styled from 'styled-components';

const { Text } = Typography;

const StyledText = styled(Text)`
  font-family: Gothic A1;
  font-size: 16px;
  font-weight: 600;
`;

const RedDot = styled.span`
  display: inline-block;
  width: 4px;
  height: 4px;
  background-color: red;
  border-radius: 50%;
  margin-left: 2px; // 텍스트와 점 사이 간격
  transform: translateY(-200%);
`;

function LabelWrapper({
  title,
  children,
  hasDot = false
}: {
  title: string;
  children: ReactNode;
  hasDot?: boolean;
}) {
  return (
    <Form.Item>
      <Flex vertical gap={8} align='flex-start'>
        <div>
          <StyledText style={{ display: 'inline-block' }}>{title}</StyledText>
          {hasDot && <RedDot />}
        </div>
        {children}
      </Flex>
    </Form.Item>
  );
}

export default LabelWrapper;
