import React from 'react';
import { shallow } from 'enzyme';
import Search from '../Search';

const onSearch = () => {};

describe('Search component', () => {
  it('renders without crashing', () => {
    shallow(<Search onSearch={onSearch} />);
  });

  it('matches snapshot', () => {
    const component = shallow(<Search onSearch={onSearch} />);
    expect(component).toMatchSnapshot();
  });
});
