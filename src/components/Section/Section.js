import React from 'react';
import { TitleName } from './Section.styled';
import PropTypes from 'prop-types';

class Section extends React.Component {
    render() {
        const { title, children } = this.props;
        return (
            <div>
                <TitleName>{title}</TitleName>
                {children}
            </div>
        );
    }
}

export default Section;

Section.propTyps = {
    title: PropTypes.string,
    children: PropTypes.string.isRequired,
};
