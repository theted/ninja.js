import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';

import users from '../../../data/users.json';

const rows = users.slice(0, 5);

const props = {
  rows,
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

  it('renders 5 rows', () => {
    const wrapper = mount(<App rows={rows} locale="da" rowsPerPage={5} />);

    expect(wrapper.find('tr').length).toBe(5);
  });

  it('filters rows based on input', () => {
    const wrapper = mount(<App rows={rows} locale="da" rowsPerPage={5} />);

    wrapper.find('input').simulate('change', { target: { value: 'k' } });

    expect(wrapper.find('tr').length).toBe(2);
  });
});
