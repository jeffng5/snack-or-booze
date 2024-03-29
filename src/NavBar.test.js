import React from 'react';
import { render } from '@testing-library/react';
import NavBar from './NavBar';

//smoke test
it('renders without crashing', function() {
  render(<NavBar />);
})

//snapshot test
it("matches snapshot", function() {
  const {asFragment} = render(<NavBar />);
  expect(asFragment()).toMatchSnapshot();
});