import Picker from 'react-mobile-picker';
import styled from 'styled-components';

const TIME_DATA = {
  standard: ['AM', 'PM'],
  our: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  minute: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55]
};

const StyledPickerContainer = styled.div`
  .time-picker {
    & > div:last-child {
      div {
        height: 2px !important;
        background: linear-gradient(
          to right,
          #2a64f6 0px,
          #2a64f6 72px,
          transparent 72px,
          transparent 100px,
          #2a64f6 100px,
          #2a64f6 172px,
          transparent 172px,
          transparent 200px,
          #2a64f6 200px,
          #2a64f6 272px
        ) !important;
      }
    }
  }
`;

export const CustomTimePicker = (props: {
  initTime: { standard: string; our: string; minute: string };
  setTime: (data: { standard: string; our: string; minute: string }) => void;
}) => {
  const { initTime, setTime } = props;

  const timeDataKey = Object.keys(TIME_DATA) as (keyof typeof TIME_DATA)[];

  return (
    <StyledPickerContainer>
      <Picker
        style={{
          gap: '28px',
          width: '272px',
          margin: 'auto'
        }}
        height={186}
        itemHeight={56}
        value={initTime}
        onChange={setTime}
        className='time-picker'
      >
        {timeDataKey.map(key => (
          <Picker.Column
            key={key}
            name={key}
            width={72}
            style={{
              width: '72px'
            }}
            className='picker-column'
          >
            {TIME_DATA[key].map(option => (
              <Picker.Item key={option} value={option}>
                {({ selected }) => (
                  <div
                    className='gothic-a1-medium'
                    style={{ color: selected ? '#000' : '#cfcfcf', fontSize: 24 }}
                  >
                    {option}
                  </div>
                )}
              </Picker.Item>
            ))}
          </Picker.Column>
        ))}
      </Picker>
    </StyledPickerContainer>
  );
};
