import React from 'react';
import {shallow} from 'enzyme';
import CheckboxWithLabel from './CheckboxWithLabel';

it('CheckboxWithLabel changes the text after click',()=> {
  //Render a checkbox with a label on the document
  const checkbox = shallow(
      <CheckboxWithLabel labelOn="On" labelOff="Off"/>
  );
  expect(checkbox.text()).toEqual('Off');

  checkbox.find('input').simulate('change');

  expect(checkbox.text()).toEqual('On');
});