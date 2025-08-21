import { render, screen } from '@testing-library/react';
import { InputField } from './InputField';

describe('InputField', () => {
  it('renders the input field with a label', () => {
    render(<InputField id="test" label="Test Label" />);
    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
  });

  it('displays an error message when invalid', () => {
    render(<InputField id="test" invalid errorMessage="Error" />);
    expect(screen.getByText('Error')).toBeInTheDocument();
  });

  it('is disabled when the disabled prop is true', () => {
    render(<InputField id="test" label="Test Label" disabled />);
    expect(screen.getByLabelText('Test Label')).toBeDisabled();
  });
});