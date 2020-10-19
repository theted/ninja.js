import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import users from '../../../data/users.json';

const props = {
  rows: users.slice(0, 5),
  locale: 'da',
  rowsPerPage: 5,
};

describe('App component', () => {
  it('renders without crashing', () => {
    shallow(<App {...props} />);
  });

  it('matches snapshot', () => {
    const component = shallow(<App {...props} />);
    expect(component).toMatchSnapshot();
  });
});
