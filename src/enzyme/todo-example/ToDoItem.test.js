import React from 'react';
import {shallow} from 'enzyme';
import ToDoItem from './ToDoItem.js';
import sinon from 'sinon';

describe ('<ToDoItem />', ()=> {

    it('renders the title', () => {
      let title = "Foo";
      let complete = true;
      const wrapper = shallow(<ToDoItem title={title} complete={complete}/>);
      expect(wrapper.find('.item-title').text()).toEqual('Foo');
    });

    it('renders the y when complete', ()=> {
        let title = "Foo";
        let complete = true;
        const wrapper = shallow(<ToDoItem title={title} complete={complete}/>);
        expect(wrapper.find('.item-mark').text()).toEqual('y');
    });

    it('renders the n when not complete',()=> {
       let title = "Foo";
       let complete = false;
       const wrapper = shallow(<ToDoItem title={title} complete={complete}/>);
       expect(wrapper.find('.item-mark').text()).toEqual('n');
    });

    it('calls onCompleteChange handler with the right arguments when clicked',() => {
      const spy = sinon.spy();
      const title = "Foo";
      const complete = true;
      const wrapper = shallow(<ToDoItem title={title} complete={complete} onCompleteChange={spy} />);

      wrapper.find('.item-button').simulate('click');
      expect(spy.calledOnce).toEqual(true);
      expect(spy.calledWith(complete, !complete)).toEqual(true);
    });

    //ok so tmrw - i think if it was one person not in his environment
    //I have my script.
    //miscommunication about tech stuff
    //appointment on the wrong day
    //unpack today.
    //if I am to teach this, I need to master this.
    //after I can demo it, and you understand it,
    // then we can think about plugging this into thinkservice.
    //do you understand it?
    //then why are you rushing?
    //two tough nuts to crack are Sven and Waldemar.
    // can you help.
    //did you implement
    //make him think.
    //wean - tough love?


});