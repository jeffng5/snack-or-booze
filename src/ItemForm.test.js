import React from 'react';
import { render } from '@testing-library/react';
import ItemForm from './ItemForm';

//smoke test
it('renders without crashing', function() {
  render(<ItemForm />);
})

//snapshot test
it("matches snapshot", function() {
  const {asFragment} = render(<ItemForm />);
  expect(asFragment()).toMatchSnapshot();
});