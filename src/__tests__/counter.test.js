import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });

import Counter from '../Counter.js'

describe('Counter', () => {
  it('is alive', () => {
    let component = shallow(<Counter/>);
    expect(component.find('h4').exists()).toBeTruthy();
  });
  it('subtracts one from count with subtract btn', () => {
    let component = mount(<Counter/>);
    let button = component.find('.btn1');
    button.simulate('click');
    expect(component.state('counter')).toBe(-1);
  });
  it('adds one to count with add btn', () => {
    let component = mount(<Counter/>);
    let button = component.find('.btn2');
    button.simulate('click');
    expect(component.state('counter')).toBe(1);
  });
  it('renders correctly', () => {
    let render = renderer.create('<Counter/>').toJSON();
    expect(render).toMatchSnapshot();
  });
});