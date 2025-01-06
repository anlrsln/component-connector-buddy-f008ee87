import React from 'react';
import { Eye, ChevronLeft, ChevronRight } from 'lucide-react';

interface Order {
  trackingNumber: string;
  customer: string;
  email: string;
  products: number;
  orderDate: string;
  total: string;
  status: 'Cancelled' | 'Completed' | 'Pending';
}

interface OrdersTableProps {
  orders: Order[];
}

const OrdersTable: React.FC<OrdersTableProps> = ({ orders }) => (
  <div className="bg-white rounded-lg shadow">
    <table className="w-full">
      <thead>
        <tr className="border-b">
          <th className="text-left p-4">Tracking Number</th>
          <th className="text-left p-4">Customer</th>
          <th className="text-left p-4">Products</th>
          <th className="text-left p-4">Order Date</th>
          <th className="text-left p-4">Total</th>
          <th className="text-left p-4">Status</th>
          <th className="text-left p-4">Actions</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order.trackingNumber} className="border-b">
            <td className="p-4">
              <div className="flex items-center space-x-2">
                <button className="p-1 hover:bg-gray-100 rounded">+</button>
                <span>{order.trackingNumber}</span>
              </div>
            </td>
            <td className="p-4">
              <div>
                <p>{order.customer}</p>
                <p className="text-sm text-gray-500">{order.email}</p>
              </div>
            </td>
            <td className="p-4">{order.products}</td>
            <td className="p-4">{order.orderDate}</td>
            <td className="p-4">{order.total}</td>
            <td className="p-4">
              <span className={`px-3 py-1 rounded-full text-sm ${
                order.status === 'Completed' ? 'bg-green-100 text-green-600' :
                order.status === 'Cancelled' ? 'bg-red-100 text-red-600' :
                'bg-yellow-100 text-yellow-600'
              }`}>
                {order.status}
              </span>
            </td>
            <td className="p-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Eye size={20} className="text-gray-500" />
              </button>
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
        <button className="px-4 py-2 bg-emerald-600 text-white rounded">1</button>
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