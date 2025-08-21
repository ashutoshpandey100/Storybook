import { useState } from 'react';
import { InputField } from './components/InputField/InputField';
import { DataTable, Column } from './components/DataTable/DataTable';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const columns: Column<User>[] = [
  { key: 'name', title: 'Name', dataIndex: 'name', sortable: true },
  { key: 'email', title: 'Email', dataIndex: 'email' },
  { key: 'role', title: 'Role', dataIndex: 'role', sortable: true },
];

const data: User[] = [
  { id: 1, name: 'Admin User', email: 'admin@example.com', role: 'Admin' },
  { id: 2, name: 'Editor User', email: 'editor@example.com', role: 'Editor' },
  { id: 3, name: 'Viewer User', email: 'viewer@example.com', role: 'Viewer' },
];

function App() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="p-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Component Library</h1>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">InputField</h2>
        <div className="space-y-4">
          <InputField
            label="Username"
            placeholder="Enter your username"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onClear={() => setInputValue('')}
          />
          <InputField
            label="Password"
            type="password"
            placeholder="Enter your password"
          />
          <InputField
            label="Invalid Input"
            errorMessage="This field is required."
            invalid
          />
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">DataTable</h2>
        <DataTable<User> columns={columns} data={data} selectable />
      </div>
    </div>
  );
}

export default App;