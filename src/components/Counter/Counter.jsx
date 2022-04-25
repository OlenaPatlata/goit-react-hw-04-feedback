import { useEffect, useState } from 'react';
import Buttons from 'components/Buttons/Buttons';
import Statistics from 'components/Statistics/Statistics';
import Title from 'components/Title/Title';
import Section from 'components/Section/Section';

// const initialState = {
//   good: 5,
//   neutral: 0,
//   bad: 0,
// };
// const buttonReduser = (state, action) => {
//   const { type, payload } = action;
//   switch (type) {
//     case 'good':
//       return state.good + payload;
//     case 'neutral':
//       return state.neutral + payload;
//     case 'bad':
//       return state.bad + payload;
//     case 'reset':
//       return initialState;
//     default:
//       break;
//   }
// };

const Counter = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const handleIncrement = e => {
    setTotal(prev => prev + 1);
    if (e.target.name === 'good') {
      setGood(prev => prev + 1);
    } else if (e.target.name === 'neutral') {
      setNeutral(prev => prev + 1);
    } else if (e.target.name === 'bad') {
      setBad(prev => prev + 1);
    }
  };

  useEffect(() => {
    if (good === 0) {
      return;
    }
    setPercentage(((good / total) * 100).toFixed(0));
  }, [good, total]);

  return (
    <>
      <Section>
        <Title title="Please leave feedback" />
        <Buttons
          names={['good', 'neutral', 'bad']}
          onIncrement={handleIncrement}
        />
      </Section>
      <Section>
        <Title title="Statistics" />
        <Statistics
          statisticArray={[
            ['good', good],
            ['neutral', neutral],
            ['bad', bad],
            ['total', total],
            ['positive', percentage],
          ]}
          total={total}
        />
      </Section>
    </>
  );
};

export default Counter;
