import React from 'react';
import { TitleName } from './Section.styled';
import PropTypes from 'prop-types';

class Section extends React.Component {
    render() {
        return (
            <div>
                <TitleName>{this.props.title}</TitleName>
                {this.props.children}
            </div>
        );
    }
}

export default Section;

Section.propTyps = {
    title: PropTypes.string,
    children: PropTypes.string.isRequired,
};
