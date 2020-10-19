import { shallow } from 'enzyme';
import React from 'react';
import Pagination from '../Pagination';

const props = {
  currentPageNumber: 1,
  totalNumberOfPages: 5,
  onChange: () => {},
};

describe('Pagination component', () => {
  it('renders without crashing', () => {
    shallow(<Pagination {...props} />);
  });

  it('matches snapshot', () => {
    const component = shallow(<Pagination {...props} />);
    expect(component).toMatchSnapshot();
  });
});
