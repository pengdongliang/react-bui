import { render } from '@testing-library/react';
import { BasicTsconfig } from './tsconfig.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicTsconfig />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
