import React from 'react';
import { TitleName } from './titleRender.styled';

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
