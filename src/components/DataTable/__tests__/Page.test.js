import React from 'react';
import { shallow } from 'enzyme';
import Page from '../Page';

describe('Page component', () => {
  it('renders without crashing', () => {
    shallow(<Page />);
  });

  it('matches snapshot', () => {
    const component = shallow(<Page />);
    expect(component).toMatchSnapshot();
  });
});
