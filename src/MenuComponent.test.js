import React from 'react';
import { render } from '@testing-library/react';
import MenuComponent from './MenuComponent';

//smoke test
it('renders without crashing', function() {
  render(<MenuComponent />);
})

//snapshot test
it("matches snapshot", function() {
  const {asFragment} = render(<MenuComponent />);
  expect(asFragment()).toMatchSnapshot();
});