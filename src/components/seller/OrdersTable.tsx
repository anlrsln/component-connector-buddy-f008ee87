import React from 'react';
import { Eye, ChevronLeft, ChevronRight, Edit, Trash } from 'lucide-react';

interface Order {
  id: string;
  name: string;
  details: string;
  icon: string;
  slug: string;
}

interface OrdersTableProps {
  orders: Order[];
}

const OrdersTable: React.FC<OrdersTableProps> = ({ orders }) => (
  <div className="bg-white rounded-lg shadow">
    <table className="w-full">
      <thead>
        <tr className="border-b">
          <th className="text-left p-4">ID</th>
          <th className="text-left p-4">Name</th>
          <th className="text-left p-4">Details</th>
          <th className="text-left p-4">Icon</th>
          <th className="text-left p-4">Slug</th>
          <th className="text-left p-4">Actions</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order.id} className="border-b">
            <td className="p-4">
              <div className="flex items-center space-x-2">
                <button className="p-1 hover:bg-gray-100 rounded">+</button>
                <span>{order.id}</span>
              </div>
            </td>
            <td className="p-4">{order.name}</td>
            <td className="p-4">{order.details}</td>
            <td className="p-4">{order.icon}</td>
            <td className="p-4">{order.slug}</td>
            <td className="p-4">
              <div className="flex items-center space-x-2">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Eye size={20} className="text-gray-500" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Edit size={20} className="text-gray-500" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full text-red-500 hover:text-red-600">
                  <Trash size={20} />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    
    <div className="p-4 flex items-center justify-between border-t">
      <span className="text-sm text-gray-500">1 of 4 pages</span>
      <div className="flex space-x-2">
        <button className="p-2 border rounded hover:bg-gray-50">
          <ChevronLeft size={20} />
        </button>
        <button className="px-4 py-2 bg-primary text-white rounded">1</button>
        <button className="px-4 py-2 border rounded hover:bg-gray-50">2</button>
        <button className="px-4 py-2 border rounded hover:bg-gray-50">3</button>
        <button className="px-4 py-2 border rounded hover:bg-gray-50">4</button>
        <button className="p-2 border rounded hover:bg-gray-50">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  </div>
);

export default OrdersTable;