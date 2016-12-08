import React from 'react';
import {shallow} from 'enzyme';
import ToDoItem from './ToDoItem.js';
import sinon from 'sinon';

describe ('<ToDoItem />', ()=> {

    it('renders the title', () => {
      let title = "Foo";
      let complete = true;
      let id = 1;
      const wrapper = shallow(<ToDoItem title={title} complete={complete} id={id}/>);
      expect(wrapper.find('.item-title').text()).toEqual('Foo');
    });

    it('renders the y when complete', ()=> {
        let title = "Foo";
        let complete = true;
        let id = 1;
        const wrapper = shallow(<ToDoItem title={title} complete={complete} id={id}/>);
        expect(wrapper.find('.item-mark').text()).toEqual('y');
    });

    it('renders the n when not complete',()=> {
       let title = "Foo";
       let complete = false;
        let id = 1;
       const wrapper = shallow(<ToDoItem title={title} complete={complete} id={id}/>);
       expect(wrapper.find('.item-mark').text()).toEqual('n');
    });

    it('calls onCompleteChange handler with the right arguments when clicked',() => {
      const spy = sinon.spy();
      const title = "Foo";
      const complete = true;
      let id = 1;
      const wrapper = shallow(<ToDoItem title={title} complete={complete} onCompleteChange={spy} id={id}/>);

      wrapper.find('.item-button').simulate('click');
      expect(spy.calledOnce).toEqual(true);
      expect(spy.calledWith(complete, !complete)).toEqual(true);
    });




});