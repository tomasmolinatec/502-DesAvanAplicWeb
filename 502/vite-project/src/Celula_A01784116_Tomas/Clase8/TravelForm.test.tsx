import { render, screen, fireEvent } from '@testing-library/react';
import TravelForm from '../Clase4/TravelForm';

describe('TravelForm', () => {
  test('renders all form fields', () => {
    render(<TravelForm />);
    expect(screen.getByPlaceholderText('Destination')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Reason')).toBeInTheDocument();
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
  });

  test('submits form and resets values', () => {
    render(<TravelForm />);
    
    const destination = screen.getByPlaceholderText('Destination') as HTMLInputElement;
    const reason = screen.getByPlaceholderText('Reason') as HTMLInputElement;
    const date = screen.getByLabelText(/date/i) as HTMLInputElement;
    const submitButton = screen.getByRole('button', { name: /submit/i });

    fireEvent.change(destination, { target: { value: 'New York' } });
    fireEvent.change(reason, { target: { value: 'Conference' } });
    fireEvent.change(date, { target: { value: '2025-06-01' } });

    expect(destination.value).toBe('New York');
    expect(reason.value).toBe('Conference');
    expect(date.value).toBe('2025-06-01');

    fireEvent.click(submitButton);

    expect(destination.value).toBe('');
    expect(reason.value).toBe('');
    expect(date.value).toBe('');
  });
});
