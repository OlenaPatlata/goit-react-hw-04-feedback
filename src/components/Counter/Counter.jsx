import { useReducer } from 'react';
import Buttons from 'components/Buttons/Buttons';
import Statistics from 'components/Statistics/Statistics';
import Title from 'components/Title/Title';
import Section from 'components/Section/Section';

const constantTypes = {
  GOOD: 'good',
  NEUTRAL: 'neutral',
  BAD: 'bad',
  TOTAL: 'total',
  PERSCENTAGE: 'percentage',
  RESET: 'reset',
};

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case constantTypes.GOOD:
      return { ...state, good: state.good + payload };
    case constantTypes.NEUTRAL:
      return { ...state, neutral: state.neutral + payload };
    case constantTypes.BAD:
      return { ...state, bad: state.bad + payload };
    case constantTypes.RESET:
      return initialState;
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = e => {
    if (e.target.name === constantTypes.GOOD) {
      dispatch({ type: constantTypes.GOOD, payload: 1 });
    } else if (e.target.name === constantTypes.NEUTRAL) {
      dispatch({ type: constantTypes.NEUTRAL, payload: 1 });
    } else if (e.target.name === constantTypes.BAD) {
      dispatch({
        type: constantTypes.BAD,
        payload: 1,
      });
    }
  };

  const totalCount = () => {
    return state.good + state.neutral + state.bad;
  };
  const total = totalCount();

  const percentageCount = () => {
    if (state.good === 0) {
      return 0;
    }
    return (
      (state.good / (state.good + state.neutral + state.bad)) *
      100
    ).toFixed(0);
  };
  const percentage = percentageCount();

  // const total = useCallback(() => {
  //   const totalFeedback = state.good + state.neutral + state.bad;
  //   return totalFeedback;
  // }, [state]);

  // const percentage = useCallback(() => {
  //   if (state.good === 0) {
  //     const percentageFeedback = 0;
  //     return percentageFeedback;
  //   }
  //   const percentageFeedback = (
  //     (state.good / (state.good + state.neutral + state.bad)) *
  //     100
  //   ).toFixed(0);
  //   return percentageFeedback;
  // }, [state]);

  return (
    <>
      <Section>
        <Title title="Please leave feedback" />
        <Buttons names={Object.keys(state)} onIncrement={handleIncrement} />
      </Section>
      <Section>
        <Title title="Statistics" />
        <Statistics
          statisticArray={[
            ...Object.entries(state),
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
