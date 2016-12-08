import React from 'react';
import {shallow} from 'enzyme';
import Foo from './Foo';

it('receives prop values',()=>{
   const foo = shallow(
     <Foo one="alpha" two="beta" />
   );

    expect(foo.text()).toEqual('beta')
});

it('toggles the label on change',()=>{
    const foo = shallow(
        <Foo one="alpha" two="beta" />
    );

    expect(foo.text()).toEqual('beta');

    foo.find('input').simulate('change');

    expect(foo.text()).toEqual('alpha');
});

it('receives prop values',()=> {
   const foo = shallow(
       <Foo one="alpha" two="beta"/>
   );
    expect(foo.text()).toEqual('beta');
});