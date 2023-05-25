import { render, screen } from '@testing-library/react';

describe('Button', () => {
  it('renders a button', () => {
    render(<button>Click me</button>);

    const button = screen.getByRole('button');

    expect(button).toHaveAccessibleName('Click me');
  });
});
