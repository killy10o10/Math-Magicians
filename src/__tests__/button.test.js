import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../components/button';

describe('Testing if the buttons are displayed', () => {
  it('button is rendered', () => {
    const button = renderer
      .create(<Button />)
      .toJSON();
    expect(button).toMatchSnapshot();
  });
});
