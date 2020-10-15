import React from 'react';
import { shallow } from 'enzyme';
import DataTable from '..';

describe('DataTable Component', () => {
  it('renders without crashing', () => {
    shallow(<DataTable />);
  });

  it('matches snapshot', () => {
    const component = shallow(<DataTable />);
    expect(component).toMatchSnapshot();
  });
});
