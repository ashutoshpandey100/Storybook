import { render, screen } from '@testing-library/react';
import { DataTable } from './DataTable';

const columns = [
  { key: 'name', title: 'Name', dataIndex: 'name' },
  { key: 'age', title: 'Age', dataIndex: 'age' },
];

const data = [
  { id: 1, name: 'John Doe', age: 30 },
  { id: 2, name: 'Jane Doe', age: 25 },
];

describe('DataTable', () => {
  it('renders the table with data', () => {
    render(<DataTable columns={columns} data={data} />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
  });

  it('shows a loading message', () => {
    render(<DataTable columns={columns} data={[]} loading />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('shows an empty message', () => {
    render(<DataTable columns={columns} data={[]} />);
    expect(screen.getByText('No data available')).toBeInTheDocument();
  });
});