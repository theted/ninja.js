import React from 'react';
import { shallow, mount } from 'enzyme';
import Row from '../Row';
import data from '../../../data/users.json';

const row = data[0];

describe('Row component', () => {
  it('renders without crashing', () => {
    shallow(<Row row={row} />);
  });

  it('matches snapshot', () => {
    // TODO: fix table wrap fix
    const component = mount(
      <table>
        <tbody>
          <Row row={row} />
        </tbody>
      </table>,
    );
    expect(component).toMatchSnapshot();
  });
});
