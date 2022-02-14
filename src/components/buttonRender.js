import React from 'react';
import { RateButton } from './buttonRender.styled';
class ButtonRender extends React.Component {
    render() {
        return this.props.buttons.map(button => {
            return (
                <RateButton
                    type="button"
                    key={button}
                    name={button}
                    onClick={this.props.onButtonClick}
                >
                    {button}
                </RateButton>
            );
        });
    }
}

export default ButtonRender;
