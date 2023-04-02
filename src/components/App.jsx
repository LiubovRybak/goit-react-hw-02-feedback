import { Component } from 'react';
import { Statistic } from './Statistic/Statistic';
import { Container } from './Container/Container';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
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

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const percent = (good / this.countTotalFeedback()) * 100;
    return percent;
  };

  onLeaveFeedback = name => {
    this.setState(lastState => {
      return {
        [name]: lastState[name] + 1,
      };
    });
  };

  render() {
    return (
      <Container>
        <Section title="Please, leave feedback">
          <FeedbackOptions
            names={Object.keys(this.state)}
            onClickFeedback={this.onLeaveFeedback}
          />
        </Section>
        {this.countTotalFeedback() > 0 ? (
          <Section title="Statistic">
            <Statistic
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              percent={this.countPositiveFeedbackPercentage()}
            ></Statistic>
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Container>
    );
  }
}
