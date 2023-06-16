import React from 'react';

import renderer from 'react-test-renderer';

import { BrowserRouter } from 'react-router-dom';

import Home from '../components/pages/Home';

describe('Tests Home component', () => {
  it('Should render Navbar Component', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Home />
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
