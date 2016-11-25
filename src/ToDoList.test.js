import React from 'react';
import {shallow} from 'enzyme';
import ToDoList from './ToDoList';
import ToDoItem from './ToDoItem';
import sinon from 'sinon';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
//pivotal is to help
const createComponent = (type, title, complete, onCompleteChange) => {

    return React.createClass({
        displayName: type,
        propTypes: {
           title: React.PropTypes.string,
           complete: React.PropTypes.bool,
           onCompleteChange: React.PropTypes.func
        },
        getDefaultProps() {
            return {
              title: title,
              complete: complete,
              onCompleteChange: onCompleteChange
            };
        },

        render() {
            return  <div className="item">
                <span className="item-mark">{complete ? 'y':'n'}</span>
                <span className="item-title">{title}</span>

                <a className="item-button"
                   onClick = { () => onCompleteChange(complete, !complete) } >
                    Mark as {complete ? 'Pending': 'Complete'}
                </a>
            </div>;
        }
    });
};


describe('<ToDoList />', () => {


    it('renders the entire list of items',() =>{

        const items = [createComponent("ToDoItem", "one", false),createComponent("ToDoItem","two", true)];
        const wrapper = shallow(<ToDoList items={items} />);

        console.log("test "+wrapper.find('.todo-list').text());
        expect(wrapper.find(ToDoItem).length).toBe(2);

    });

});
