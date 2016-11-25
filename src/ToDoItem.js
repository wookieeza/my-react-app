import React from 'react';

export default class ToDoItem extends React.Component {

    render() {
        const {title, complete, onCompleteChange } = this.props;

        return(
            <div className="item">
                <span className="item-mark">{complete ? 'y':'n'}</span>
                <span className="item-title">{title}</span>

                <a className="item-button"
                    onClick = { () => onCompleteChange(complete, !complete) } >
                    Mark as {complete ? 'Pending': 'Complete'}
                </a>
            </div>
        );
    }
}