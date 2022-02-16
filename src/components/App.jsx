import React from 'react';
import Section from './Section/Section';
import StatRender from './statRender/statRender';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

class App extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    onButtonClick = name => {
        this.setState(prev => {
            return {
                [name]: prev[name] + 1,
            };
        });
    };

    countPositiveFeedbackPercentage = () => {
        const { good, neutral, bad } = this.state;
        const positiveFeedback = Number.parseInt(
            (good / (good + neutral + bad)) * 100
        );
        return Number.isNaN(positiveFeedback) ? '0' : `${positiveFeedback} %`;
    };

    countTotalFeedback = () => {
        const { good, bad, neutral } = this.state;
        return good + bad + neutral;
    };

    render() {
        const buttonLabels = Object.keys(this.state);
        const { good, bad, neutral } = this.state;
        return (
            <>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        buttons={buttonLabels}
                        onLeaveFeedback={this.onButtonClick}
                    />
                </Section>

                <Section title="Statistic">
                    {this.countTotalFeedback() === 0 ? (
                        <span> No feedback given</span>
                    ) : (
                        <StatRender
                            total={this.countTotalFeedback()}
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            positive={this.countPositiveFeedbackPercentage()}
                        />
                    )}
                </Section>
            </>
        );
    }
}

export default App;
