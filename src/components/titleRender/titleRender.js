import React from 'react';
import { TitleName } from './titleRender.styled';
import PropTypes from 'prop-types';

class TitleRender extends React.Component {
    render() {
        return (
            <div>
                <TitleName>{this.props.title}</TitleName>
                {this.props.children}
            </div>
        );
    }
}

export default TitleRender;

TitleRender.propTyps = {
    title: PropTypes.string,
    children: PropTypes.string.isRequired,
};
