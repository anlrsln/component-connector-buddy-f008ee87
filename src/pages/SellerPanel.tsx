import { useState } from 'react';
import {
  LayoutGrid,
  Store,
  ArrowRightLeft,
  Package,
  LayoutList,
  Tags,
  Search,
  Eye,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import SellerPanelNavbar from '../components/seller/SellerPanelNavbar';

interface Order {
  trackingNumber: string;
  customer: string;
  email: string;
  products: number;
  orderDate: string;
  total: string;
  status: 'Cancelled' | 'Completed' | 'Pending';
}

const orders: Order[] = [
  {
    trackingNumber: '20231117130887',
    customer: 'Customer',
    email: 'customer@demo.com',
    products: 1,
    orderDate: 'a year ago',
    total: '$26.25',
    status: 'Cancelled'
  },
  {
    trackingNumber: '20231117881331',
    customer: 'Customer',
    email: 'customer@demo.com',
    products: 1,
    orderDate: 'a year ago',
    total: '$72.45',
    status: 'Completed'
  },
  {
    trackingNumber: '20231117781359',
    customer: 'Customer',
    email: 'customer@demo.com',
    products: 1,
    orderDate: 'a year ago',
    total: '$40.95',
    status: 'Pending'
  },
  {
    trackingNumber: '20231117818013',
    customer: 'Customer',
    email: 'customer@demo.com',
    products: 1,
    orderDate: 'a year ago',
    total: '$30.45',
    status: 'Cancelled'
  },
  {
    trackingNumber: '20231117241177',
    customer: 'Customer',
    email: 'customer@demo.com',
    products: 1,
    orderDate: 'a year ago',
    total: '$47.25',
    status: 'Completed'
  }
];

const SellerPanel = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      <SellerPanelNavbar />
      <div className="flex">
        {/* Sidebar */}
        <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-white transition-all duration-300 border-r`}>
          <div className="p-4 border-b">
            <h1 className={`text-xl font-bold ${!sidebarOpen && 'hidden'}`}>Pixer</h1>
          </div>
          
          <div className="p-4">
            <h2 className={`text-xs font-semibold text-gray-400 mb-4 ${!sidebarOpen && 'hidden'}`}>MAIN</h2>
            <button className="w-full flex items-center space-x-3 p-2 bg-emerald-50 text-emerald-600 rounded-md">
              <LayoutGrid size={20} />
              {sidebarOpen && <span>Dashboard</span>}
            </button>
          </div>

          <div className="p-4">
            <h2 className={`text-xs font-semibold text-gray-400 mb-4 ${!sidebarOpen && 'hidden'}`}>SHOP MANAGEMENT</h2>
            <div className="space-y-2">
              <button className="w-full flex items-center space-x-3 p-2 text-gray-600 hover:bg-gray-50 rounded-md">
                <Store size={20} />
                {sidebarOpen && <span>Shops</span>}
              </button>
              <button className="w-full flex items-center space-x-3 p-2 text-gray-600 hover:bg-gray-50 rounded-md">
                <Store size={20} />
                {sidebarOpen && <span>My Shops</span>}
              </button>
              <button className="w-full flex items-center space-x-3 p-2 text-gray-600 hover:bg-gray-50 rounded-md">
                <ArrowRightLeft size={20} />
                {sidebarOpen && <span>Shop Transfer Request</span>}
              </button>
            </div>
          </div>

          <div className="p-4">
            <h2 className={`text-xs font-semibold text-gray-400 mb-4 ${!sidebarOpen && 'hidden'}`}>PRODUCT MANAGEMENT</h2>
            <div className="space-y-2">
              <button className="w-full flex items-center space-x-3 p-2 text-gray-600 hover:bg-gray-50 rounded-md">
                <Package size={20} />
                {sidebarOpen && <span>Products</span>}
              </button>
              <button className="w-full flex items-center space-x-3 p-2 text-gray-600 hover:bg-gray-50 rounded-md">
                <LayoutList size={20} />
                {sidebarOpen && <span>Layout Type</span>}
              </button>
              <button className="w-full flex items-center space-x-3 p-2 text-gray-600 hover:bg-gray-50 rounded-md">
                <Package size={20} />
                {sidebarOpen && <span>Inventory</span>}
              </button>
              <button className="w-full flex items-center space-x-3 p-2 text-gray-600 hover:bg-gray-50 rounded-md">
                <LayoutList size={20} />
                {sidebarOpen && <span>Categories</span>}
              </button>
              <button className="w-full flex items-center space-x-3 p-2 text-gray-600 hover:bg-gray-50 rounded-md">
                <Tags size={20} />
                {sidebarOpen && <span>Tags</span>}
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 hover:bg-gray-100 rounded-md"
              >
                {sidebarOpen ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
              </button>
              <h1 className="text-2xl font-semibold">Recent Orders</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by Name"
                  className="pl-10 pr-4 py-2 border rounded-md w-64"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
              </div>
            </div>
          </div>

          {/* Orders Table */}
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
            
            {/* Pagination */}
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
        </main>
      </div>
    </div>
  );
};

export default SellerPanel;
