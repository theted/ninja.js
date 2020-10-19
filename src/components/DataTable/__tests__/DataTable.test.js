import React from 'react';
import { mount } from 'enzyme'; // Lifecycle hooks such as useEffect aren’t yet supported in shallow render (those hooks don’t get called)
import DataTable from '..';
import users from '../../../data/users.json';

const props = {
  rows: users.slice(0, 5),
  locale: 'da',
  rowsPerPage: 5,
};
describe('DataTable Component', () => {
  it('renders without crashing', () => {
    mount(<DataTable {...props} />);
  });

  it('matches snapshot', () => {
    const component = mount(<DataTable {...props} />);
    component.update();
    expect(component).toMatchSnapshot();
  });

  it('renders 5 rows', () => {
    const wrapper = mount(<DataTable {...props} />);

    expect(wrapper.find('tr').length).toBe(5);
  });

  it('handles perPage prop', () => {
    const wrapper = mount(<DataTable {...props} rowsPerPage={2} />);

    expect(wrapper.find('tr').length).toBe(2);
  });

  it('filters rows based on input', () => {
    const wrapper = mount(<DataTable {...props} />);

    wrapper.find('input').simulate('change', { target: { value: 'k' } });

    expect(wrapper.find('tr').length).toBe(2);
  });

  it('correctly clears filters', () => {
    const wrapper = mount(<DataTable {...props} />);

    wrapper
      .find('input')
      .simulate('change', { target: { value: 'k' } })
      .simulate('change', { target: { value: '' } });

    expect(wrapper.find('tr').length).toBe(5);
  });

  it('return correct number of pages', () => {
    const wrapper = mount(<DataTable {...props} rowsPerPage={3} />);
    expect(wrapper.find('li').length).toBe(2);
  });
});
