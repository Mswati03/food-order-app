import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';

class Review extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            review: '',
          
        };
    }

    componentWillMount() {
        const { steps } = this.props;
        const { email, review} = steps;

        this.setState({ email, review});
    }

    render() {
        const { email, review} = this.state;
        return (
            <div style={{ width: '100%' }}>
                <h3>Summary</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>{email.text}</td>
                        </tr>
                        
                        <tr>
                            <td>Review</td>
                            <td>{review.value}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

Review.propTypes = {
    steps: PropTypes.object,
};

Review.defaultProps = {
    steps: undefined,
};

export default Review;