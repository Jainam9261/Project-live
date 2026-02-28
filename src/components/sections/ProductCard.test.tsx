import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ProductGrid } from '../sections/ProductGrid';

describe('ProductGrid', () => {
  it('renders product cards', () => {
    render(<ProductGrid />);
    expect(screen.getByLabelText(/view details for eco cup classic/i)).toBeInTheDocument();
  });

  it('opens modal when product is clicked', async () => {
    render(<ProductGrid />);
    await userEvent.click(screen.getByLabelText(/view details for eco cup classic/i));
    expect(screen.getByRole('dialog', { name: /product details/i })).toBeInTheDocument();
    expect(screen.getByText(/Eco Cup Classic/i)).toBeInTheDocument();
  });
});
