import { useState } from 'react';
import {
  LayoutGrid,
  Store,
  ArrowRightLeft,
  Package,
  LayoutList,
  Tags,
  Search,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import SellerPanelNavbar from '../components/seller/SellerPanelNavbar';
import SidebarSection from '../components/seller/SidebarSection';
import OrdersTable from '../components/seller/OrdersTable';

const orders = [
  {
    id: 'CAT-001',
    name: 'Electronics',
    details: 'All electronic devices and accessories',
    icon: '💻',
    slug: 'electronics'
  },
  {
    id: 'CAT-002',
    name: 'Fashion',
    details: 'Clothing and accessories',
    icon: '👕',
    slug: 'fashion'
  },
  {
    id: 'CAT-003',
    name: 'Home & Garden',
    details: 'Home decor and gardening tools',
    icon: '🏡',
    slug: 'home-garden'
  },
  {
    id: 'CAT-004',
    name: 'Books',
    details: 'Physical and digital books',
    icon: '📚',
    slug: 'books'
  },
  {
    id: 'CAT-005',
    name: 'Sports',
    details: 'Sports equipment and accessories',
    icon: '⚽',
    slug: 'sports'
  }
];

const SellerPanel = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const mainButtons = [{
    icon: LayoutGrid,
    label: 'Dashboard',
    isActive: true
  }];

  const shopManagementButtons = [
    { icon: Store, label: 'Shops' },
    { icon: Store, label: 'My Shops' },
    { icon: ArrowRightLeft, label: 'Shop Transfer Request' }
  ];

  const productManagementButtons = [
    { icon: Package, label: 'Products' },
    { icon: LayoutList, label: 'Layout Type' },
    { icon: Package, label: 'Inventory' },
    { icon: LayoutList, label: 'Categories' },
    { icon: Tags, label: 'Tags' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SellerPanelNavbar />
      <div className="flex">
        <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-white transition-all duration-300 border-r`}>
          <SidebarSection
            title="MAIN"
            buttons={mainButtons}
            isOpen={sidebarOpen}
          />

          <SidebarSection
            title="SHOP MANAGEMENT"
            buttons={shopManagementButtons}
            isOpen={sidebarOpen}
          />

          <SidebarSection
            title="PRODUCT MANAGEMENT"
            buttons={productManagementButtons}
            isOpen={sidebarOpen}
          />
        </aside>

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

          <OrdersTable orders={orders} />
        </main>
      </div>
    </div>
  );
};

export default SellerPanel;
