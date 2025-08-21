import React, { useState, useMemo } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';

export interface Column<T> {
  key: string;
  title: string;
  dataIndex: keyof T;
  sortable?: boolean;
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
}

type SortConfig<T> = {
  key: keyof T;
  direction: 'ascending' | 'descending';
} | null;

export function DataTable<T extends { id: string | number }>({ 
  data, 
  columns, 
  loading = false, 
  selectable = false, 
  onRowSelect 
}: DataTableProps<T>) {
  const [sortConfig, setSortConfig] = useState<SortConfig<T>>(null);
  const [selectedRows, setSelectedRows] = useState<Set<string | number>>(new Set());

  const sortedData = useMemo(() => {
    let sortableItems = [...data];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [data, sortConfig]);

  const requestSort = (key: keyof T) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const handleSelectRow = (id: string | number) => {
    const newSelection = new Set(selectedRows);
    if (newSelection.has(id)) {
      newSelection.delete(id);
    } else {
      newSelection.add(id);
    }
    setSelectedRows(newSelection);
    if (onRowSelect) {
      onRowSelect(data.filter(row => newSelection.has(row.id)));
    }
  };

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      const newSelection = new Set(data.map(row => row.id));
      setSelectedRows(newSelection);
      if (onRowSelect) {
        onRowSelect(data);
      }
    } else {
      setSelectedRows(new Set());
      if (onRowSelect) {
        onRowSelect([]);
      }
    }
  };

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            {selectable && (
              <th scope="col" className="p-4">
                <input type="checkbox" onChange={handleSelectAll} />
              </th>
            )}
            {columns.map((column) => (
              <th
                key={column.key}
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
              >
                <div className="flex items-center">
                  {column.title}
                  {column.sortable && (
                    <button onClick={() => requestSort(column.dataIndex)} className="ml-2">
                      {sortConfig?.key === column.dataIndex ? (
                        sortConfig.direction === 'ascending' ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                      ) : (
                        <ChevronUp size={16} className="text-gray-400" />
                      )}
                    </button>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
          {loading ? (
            <tr>
              <td colSpan={columns.length + (selectable ? 1 : 0)} className="text-center p-4">
                Loading...
              </td>
            </tr>
          ) : sortedData.length === 0 ? (
            <tr>
              <td colSpan={columns.length + (selectable ? 1 : 0)} className="text-center p-4">
                No data available
              </td>
            </tr>
          ) : (
            sortedData.map((item) => (
              <tr key={item.id} className={cn(selectedRows.has(item.id) && 'bg-blue-50 dark:bg-blue-900')}>
                {selectable && (
                  <td className="p-4">
                    <input
                      type="checkbox"
                      checked={selectedRows.has(item.id)}
                      onChange={() => handleSelectRow(item.id)}
                    />
                  </td>
                )}
                {columns.map((column) => (
                  <td key={column.key} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                    {String(item[column.dataIndex])}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}