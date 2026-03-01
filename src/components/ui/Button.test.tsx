import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '../ui/Button';

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('calls onClick when clicked', async () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Submit</Button>);
    await userEvent.click(screen.getByRole('button', { name: /submit/i }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('renders as link when href provided', () => {
    render(<Button href="/contact">Get a Quote</Button>);
    const link = screen.getByRole('link', { name: /get a quote/i });
    expect(link).toHaveAttribute('href', '/contact');
  });
});
