import React from 'react';
import {shallow} from 'enzyme';
import ToDoList from './ToDoList';
import ToDoItem from './ToDoItem';
import sinon from 'sinon';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
//pivotal is to help
const createComponent = (type, title, complete, id, onCompleteChange) => {

    return React.createClass({
        displayName: type,
        propTypes: {key: React.PropTypes.string,
           title: React.PropTypes.string,
           complete: React.PropTypes.bool,
           id: React.PropTypes.number,
           onCompleteChange: React.PropTypes.func
        },
        getDefaultProps() {
            return {
              id: id,
              key:title,
              title: title,
              complete: complete,
              onCompleteChange: onCompleteChange
            };
        },

        render() {
            return  <div className="item" key={id}>
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

        const items = [createComponent("ToDoItem", "one", false, 1),createComponent("ToDoItem","two", true, 2)];
        const wrapper = shallow(<ToDoList items={items} />);

        //console.log("test "+wrapper.find('.todo-list').text());
        expect(wrapper.find(ToDoItem).length).toBe(2);

    });

});
