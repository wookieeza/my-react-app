import React from 'react';
import Link from './Link.react.js'
import renderer from 'react-test-renderer';


//when run npm test or jest will create output snapshot file
test('Link changes the class when hovered', ()=> {
    const component = renderer.create(
        <Link page="http://facebook.com">Facebook</Link>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    //manually trigger callback
    tree.props.onMouseEnter();
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    //manually trigger callback
    tree.props.onMouseLeave();
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});