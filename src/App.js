import './App.css';
import s from './components/Statistics/Statistics.module.css';
import React, { Component } from 'react';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics ';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = e => {
    const { good, neutral, bad } = this.state;
    let difference = 0;
    const total = this.countTotalFeedback();
    const badNeutral = neutral + bad;
    badNeutral === 0 ? (difference = 100) : (difference = (good * 100) / total);
    return Math.floor(difference);
  };

  handleFeedback = e => {
    const name = e.target.innerText;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const { countTotalFeedback, countPositiveFeedbackPercentage } = this;
    const objName = Object.keys(this.state);

    return (
      <div className="App">
        <div className={s.Statistics}>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={objName}
              onLeaveFeedback={this.handleFeedback}
            />
          </Section>
          <Section title="Statistics">
            {countTotalFeedback() === 0 ? (
              <Notification message="No feedback given" />
            ) : (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback()}
                positivePercentage={countPositiveFeedbackPercentage()}
              />
            )}
          </Section>
        </div>
      </div>
    );
  }
}

export default App;
