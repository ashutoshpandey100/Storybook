import type { Meta, StoryObj } from '@storybook/react';
import { DataTable } from '../components/DataTable/DataTable';

const meta: Meta<typeof DataTable> = {
  title: 'Components/DataTable',
  component: DataTable,
};

export default meta;
type Story = StoryObj<typeof DataTable>;

const columns = [
  { key: 'name', title: 'Name', dataIndex: 'name', sortable: true },
  { key: 'age', title: 'Age', dataIndex: 'age', sortable: true },
  { key: 'city', title: 'City', dataIndex: 'city' },
];

const data = [
  { id: 1, name: 'John Doe', age: 30, city: 'New York' },
  { id: 2, name: 'Jane Doe', age: 25, city: 'London' },
  { id: 3, name: 'Sam Smith', age: 45, city: 'Paris' },
];

export const Default: Story = {
  args: {
    columns,
    data,
  },
};

export const Loading: Story = {
  args: {
    columns,
    data: [],
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    columns,
    data: [],
  },
};

export const Selectable: Story = {
  args: {
    columns,
    data,
    selectable: true,
    onRowSelect: (selectedRows) => console.log(selectedRows),
  },
};