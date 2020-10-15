import { shallow } from 'enzyme';
import React from 'react';
import Pagination from '../Pagination';

describe('Pagination component', () => {
  it('renders without crashing', () => {
    shallow(<Pagination />);
  });

  it('matches snapshot', () => {
    const component = shallow(<Pagination />);
    expect(component).toMatchSnapshot();
  });
});
