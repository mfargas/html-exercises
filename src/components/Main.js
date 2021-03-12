import React, {Component} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

export default class Main extends Component {
    render() {
        return(
            <div className='main-content-wrapper'>
                <h1>Main Content</h1>
                {/* <ul className='list'>
                    <li>Early Life</li>
                    <li>The Tracey Ullman Show</li>
                    <li>The Start of the Simpsons</li>
                </ul> */}
                <ListGroup>
                    <ListGroup.Item>Early Life</ListGroup.Item>
                    <ListGroup.Item>The Tracey Ullman Show</ListGroup.Item>
                    <ListGroup.Item>The Start of the Simpsons</ListGroup.Item>
                    <ListGroup.Item>Futurama</ListGroup.Item>
                    <ListGroup.Item>Disenchantment</ListGroup.Item>
                </ListGroup>
            </div>
        );
    }
}
