import React from 'react';
import { shallow } from 'enzyme';
import Row from '../Row';
import data from '../../../data/users.json';

const row = data[0];

describe('Row component', () => {
  it('renders without crashing', () => {
    shallow(<Row row={row} />);
  });

  it('matches snapshot', () => {
    const component = shallow(<Row row={row} />);
    expect(component).toMatchSnapshot();
  });
});
