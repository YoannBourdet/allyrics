import renderer from 'react-test-renderer';
import React from 'react';
import Item from './Item';

test('ArticleTitleTest renders correctly', () => {
  const tree = renderer.create(<Item title="A title" picture="http://example.com" />).toJSON();
  expect(tree).toMatchSnapshot();
});
