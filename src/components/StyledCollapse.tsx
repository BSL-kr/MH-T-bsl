import { Collapse, CollapseProps, Flex, Typography } from 'antd';
import styled from 'styled-components';

const { Text } = Typography;

const StyledText = styled(Text)`
  font-family: Gothic A1;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`;

const StyledDivide = styled('div')`
  border: 1px solid #cacaca;
  width: 100%;
  margin: 20px 0;
`;

const StyledCollapse = styled(Collapse)`
  .ant-collapse-header-text {
    font-family: Gothic A1;
    font-size: 17px;
    font-weight: 600;
    line-height: 18px;
    text-align: left;
  }
  .ant-collapse-header {
    height: 52px;
    background-color: #fff;
    padding: 17px;
  }
  &:where(.css-dev-only-do-not-override-xlmt2j).ant-collapse.ant-collapse-icon-position-end
    > .ant-collapse-item
    > .ant-collapse-header
    .ant-collapse-expand-icon {
    padding-inline-start: 0;
  }
  &:where(.css-dev-only-do-not-override-xlmt2j).ant-collapse
    > .ant-collapse-item
    > .ant-collapse-header {
    align-items: center;
    padding-left: 17px;
    padding-top: 17px;
    padding-bottom: 17px;
    padding-right: 13px;
  }
  .ant-collapse-content-box {
    text-align: left;
    background-color: #f8f8f8;
  }
`;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const OneText = () => {
  return (
    <Flex vertical gap={27}>
      <div>
        <StyledText>
          삼키면 치명적임 <br /> 장기간 또는 반복노출 되면 장기(영향을 받는 것으로 알려진 모든장기를
          명시한다.)에 손상을 일으킬 수 있음(특정표적장기독성(반복노출)을 일으키는 노출 경로를 기재.
          단, 다른 노출경로에 의해 특정표적장기독성(반복노출)을 일으키지 않는다는 결정적인 증거가
          있는 경우에 한한다.)
        </StyledText>
      </div>
      <div>
        <Flex vertical gap={12}>
          <StyledText style={{ fontWeight: 700 }}>*그림문자</StyledText>

          <img src='/images/alert-image.svg' />
        </Flex>
      </div>
    </Flex>
  );
};

const TwoText = () => {
  return (
    <Flex vertical>
      <Flex vertical gap={12}>
        <StyledText style={{ fontWeight: 700 }}>눈에 들어갔을 때</StyledText>
        <StyledText>
          긴급 의료조치를 받으시오.
          <br /> 물질과 접촉시 즉시 20분 이상 흐르는 물에 피부와 눈을 씻어내시오.
        </StyledText>
      </Flex>

      <StyledDivide />

      <Flex vertical gap={12}>
        <StyledText style={{ fontWeight: 700 }}>피부에 접촉했을 때</StyledText>
        <StyledText>
          오염된 옷과 신발을 제거하고 오염지역을 격리하시오.
          <br /> 물질과 접촉시 즉시 20분 이상 흐르는 물에 피부와 눈을 씻어내시오.
          <br /> 경미한 피부 접촉 시 오염부위 확산을 방지하시오.
          <br /> 불편함을 느끼면 의학적인 조치·조언을 구하시오.
        </StyledText>
      </Flex>

      <StyledDivide />

      <Flex vertical gap={12}>
        <StyledText style={{ fontWeight: 700 }}>흡입했을 때</StyledText>
        <StyledText>
          신선한 공기가 있는 곳으로 옮기시오.
          <br /> 따뜻하게 하고 안정되게 해주시오.
          <br /> 불편함을 느끼면 의학적인 조치·조언을 구하시오.
        </StyledText>
      </Flex>

      <StyledDivide />

      <Flex vertical gap={12}>
        <StyledText style={{ fontWeight: 700 }}>먹었을 때</StyledText>
        <StyledText>
          물질을 먹거나 흡입하였을 경우 구강대구강법으로 인공호흡을 하지 말고 적절한 호흡의료장비를
          이용하시오.
          <br /> 삼켰다면 즉시 의료기관(의사)의 진찰을 받으시오.
          <br />
          입을 씻어내시오.
        </StyledText>
      </Flex>
    </Flex>
  );
};

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: '1. 유해위험문구',
    children: <OneText />
  },
  {
    key: '2',
    label: '2. 응급조치 요령',
    children: <TwoText />
  },
  {
    key: '3',
    label: '3. 저장방법',
    children: <p>{text}</p>
  },
  {
    key: '4',
    label: '4. 피해야 할 조건 및 물질',
    children: <p>{text}</p>
  },
  {
    key: '5',
    label: '5. 누출 및 폭발·화재 사고시 대처방법',
    children: <p>{text}</p>
  },
  {
    key: '6',
    label: '6. 법적규제현황',
    children: <p>{text}</p>
  },
  {
    key: '7',
    label: '7. 취급시 주의사항',
    children: <p>{text}</p>
  }
];

const SafetyInfo = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <StyledCollapse
      items={items}
      defaultActiveKey={['1']}
      expandIcon={({ isActive }) => (
        <img
          src={'/images/collapse-arrow.svg'}
          style={{
            transform: `rotate(${isActive ? 180 : 0}deg)`,
            transition: 'transform 0.3s ease-in-out',
            width: 24,
            height: 24
          }}
          alt='collapse arrow'
        />
      )}
      onChange={onChange}
      expandIconPosition='right'
    />
  );
};

export default SafetyInfo;
