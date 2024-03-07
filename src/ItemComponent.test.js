import React from 'react';
import { render } from '@testing-library/react';
import ItemComponent from './ItemComponent';

//smoke test
it('renders without crashing', function() {
  render(<ItemComponent />);
})

//snapshot test
it("matches snapshot", function() {
  const {asFragment} = render(<ItemComponent />);
  expect(asFragment()).toMatchSnapshot();
});