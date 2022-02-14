import React from 'react';
import { StatResulrWrap, StatItems } from './statRender.styled';

class StatRender extends React.Component {
    render() {
        const { good, neutral, bad, total, positive } = this.props;

        return (
            <StatResulrWrap>
                <StatItems>Good: {good}</StatItems>
                <StatItems>Neutral: {neutral}</StatItems>
                <StatItems>Bad: {bad}</StatItems>
                <StatItems>total: {total}</StatItems>
                <StatItems>Positive: {positive}</StatItems>
            </StatResulrWrap>
        );
    }
}

export default StatRender;
