import React from 'react';
import ReactDOM from "react-dom";
import { shallow } from 'enzyme';
import Autocomplete from './Autocomplete';
import { create, act } from "react-test-renderer";
const MockedData = [
    {
        name: 'Dan Neciu',
        initials: 'DN',
        avatar: null,
        email: 'dan.neciu@fakee.com'
    },
    {
        name: 'Joe Johnson',
        initials: 'JJ',
        avatar: null,
        email: 'joe@fakee.com'
    },
    {
        name: 'Ion Ionescu',
        initials: 'IJ',
        avatar: null,
        email: 'fake@fakee.com'
    },
    {
        name: 'Donald Trump',
        initials: 'DT',
        avatar: null,
        email: 'donald@fakee.com'
    },
    {
        name: 'JR Smith',
        initials: 'JR',
        avatar: null,
        email: 'jerry@fakee.com'
    }
];
const createNodeMock = element => {
    if (element.type === 'li') {
        // This is your fake DOM node for <p>.
        // Feel free to add any stub methods, e.g. focus() or any
        // other methods necessary to prevent crashes in your components.
        return {
            scrollIntoView : function (){
                
            }
        };
    }
    // You can return any object from this method for any type of DOM component.
    // React will use it as a ref instead of a DOM node when snapshot testing.
    return null;
}
it('should have a input regardless of props', () => {
    const autocomplete = shallow(<Autocomplete />);
    const input = autocomplete.find('input').last();
    expect(input.length).toEqual(1);
});

it('should render a list based on the mocked data', () => {
    const options = {createNodeMock};
    let autocomplete; 
    act(() => {
        autocomplete = create(<Autocomplete data={ MockedData} />, options);
    });
    const testInstance = autocomplete.root;
    const input = testInstance.findAll(
        (el) => el.type === 'li'
    );
    expect(input.length).toEqual(5);
});


