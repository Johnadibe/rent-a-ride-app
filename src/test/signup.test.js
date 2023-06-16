import React from 'react';

import renderer from 'react-test-renderer';

import { BrowserRouter } from 'react-router-dom';

import SignUp from '../components/pages/SignUp';

describe('Tests Navbar component', () => {
  it('Should render Navbar Component', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <SignUp />
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});