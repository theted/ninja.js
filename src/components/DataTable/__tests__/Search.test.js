import React from 'react';
import { shallow } from 'enzyme';
import Search from '../Search';

const props = {
  onSearch: () => {},
};

describe('Search component', () => {
  it('renders without crashing', () => {
    shallow(<Search {...props} />);
  });

  it('matches snapshot', () => {
    const component = shallow(<Search {...props} />);
    expect(component).toMatchSnapshot();
  });
});
