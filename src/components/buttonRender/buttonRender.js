import React from 'react';
import { RateButton } from './buttonRender.styled';
import PropTypes from 'prop-types';

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

ButtonRender.propTypes = {
    button: PropTypes.string,
    onButtonClick: PropTypes.func.isRequired,
};
