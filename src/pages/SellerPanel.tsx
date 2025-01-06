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
  ChevronRight,
  Plus
} from 'lucide-react';
import SellerPanelNavbar from '../components/seller/SellerPanelNavbar';
import SidebarSection from '../components/seller/SidebarSection';
import OrdersTable from '../components/seller/OrdersTable';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

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
            title="PRODUCT MANAGEMENT"
            buttons={productManagementButtons}
            isOpen={sidebarOpen}
          />
        </aside>

        <main className="flex-1 p-8">
          <div className="flex items-center justify-between mb-3 bg-white p-4 rounded-lg">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 hover:bg-gray-100 rounded-md"
              >
                {sidebarOpen ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
              </button>
              <h1 className="text-xl font-semibold">Product</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search by Name"
                  className="pl-10 w-[300px]"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
              </div>
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                <Plus size={20} />
                Add Product
              </Button>
            </div>
          </div>

          <OrdersTable orders={orders} />
        </main>
      </div>
    </div>
  );
};

export default SellerPanel;
