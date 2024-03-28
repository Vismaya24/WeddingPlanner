import React from 'react';
import { Link } from 'react-router';

class Linking extends React.Component {
    render() {
        return (
            <div>
                <p>Please choose a repository from the list below.</p>
                <ul>
                    <li><Link to="/HomePage">HomePage</Link></li>
                </ul>
            </div>
        );
    }
}

export default Linking;