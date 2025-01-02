import { useState } from 'react';
import { 
  LineChart, 
  Line, 
  PieChart, 
  Pie, 
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts';
import { Progress } from "@/components/ui/progress";
import { 
  LayoutDashboard, 
  Component, 
  Settings, 
  Table, 
  BarChart, 
  Files,
  ChevronLeft
} from 'lucide-react';

const monthlyData = [
  { month: 'Jan', value: 5000 },
  { month: 'Mar', value: 8000 },
  { month: 'May', value: 12000 },
  { month: 'Jul', value: 15000 },
  { month: 'Sep', value: 20000 },
  { month: 'Nov', value: 25000 },
];

const pieData = [
  { name: 'Direct', value: 45 },
  { name: 'Social', value: 30 },
  { name: 'Referral', value: 25 },
];

const COLORS = ['#4F46E5', '#10B981', '#06B6D4'];

const projects = [
  { name: 'Server Migration', progress: 20, color: 'bg-red-500' },
  { name: 'Sales Tracking', progress: 40, color: 'bg-yellow-500' },
  { name: 'Customer Database', progress: 60, color: 'bg-blue-500' },
  { name: 'Payout Details', progress: 80, color: 'bg-teal-500' },
];

const SellerPanel = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`bg-primary text-white ${collapsed ? 'w-16' : 'w-64'} transition-all duration-300`}>
        <div className="p-4 flex items-center justify-between">
          <h2 className={`font-bold ${collapsed ? 'hidden' : 'block'}`}>SB ADMIN</h2>
          <button 
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 hover:bg-primary-hover rounded"
          >
            <ChevronLeft className={`transform transition-transform ${collapsed ? 'rotate-180' : ''}`} />
          </button>
        </div>
        
        <nav className="mt-8">
          <SidebarItem icon={LayoutDashboard} text="Dashboard" collapsed={collapsed} active />
          <SidebarItem icon={Component} text="Components" collapsed={collapsed} />
          <SidebarItem icon={Settings} text="Utilities" collapsed={collapsed} />
          <SidebarItem icon={Files} text="Pages" collapsed={collapsed} />
          <SidebarItem icon={Table} text="Tables" collapsed={collapsed} />
          <SidebarItem icon={BarChart} text="Charts" collapsed={collapsed} />
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="EARNINGS (MONTHLY)"
            value="$40,000"
            color="border-l-4 border-primary"
          />
          <StatCard
            title="EARNINGS (ANNUAL)"
            value="$215,000"
            color="border-l-4 border-teal-500"
          />
          <StatCard
            title="TASKS"
            value="50%"
            color="border-l-4 border-blue-500"
            showProgress
          />
          <StatCard
            title="PENDING REQUESTS"
            value="18"
            color="border-l-4 border-yellow-500"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Earnings Overview */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Earnings Overview</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#4F46E5" 
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Revenue Sources */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Revenue Sources</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-4 mt-4">
                {pieData.map((entry, index) => (
                  <div key={entry.name} className="flex items-center">
                    <div 
                      className="w-3 h-3 rounded-full mr-2"
                      style={{ backgroundColor: COLORS[index] }}
                    />
                    <span className="text-sm text-gray-600">{entry.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h3 className="text-lg font-semibold mb-4">Projects</h3>
          <div className="space-y-6">
            {projects.map((project) => (
              <div key={project.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{project.name}</span>
                  <span>{project.progress}%</span>
                </div>
                <Progress value={project.progress} className={project.color} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Sidebar Item Component
const SidebarItem = ({ 
  icon: Icon, 
  text, 
  collapsed, 
  active = false 
}: { 
  icon: any; 
  text: string; 
  collapsed: boolean;
  active?: boolean;
}) => (
  <div className={`
    flex items-center px-4 py-3 
    ${active ? 'bg-primary-hover' : 'hover:bg-primary-hover'} 
    cursor-pointer transition-colors
  `}>
    <Icon className="w-5 h-5" />
    {!collapsed && <span className="ml-3">{text}</span>}
  </div>
);

// Stat Card Component
const StatCard = ({ 
  title, 
  value, 
  color,
  showProgress = false 
}: { 
  title: string; 
  value: string; 
  color: string;
  showProgress?: boolean;
}) => (
  <div className={`bg-white p-6 rounded-lg shadow ${color}`}>
    <h4 className="text-sm text-gray-500 font-semibold">{title}</h4>
    <div className="mt-2">
      {showProgress ? (
        <Progress value={parseInt(value)} className="mt-2" />
      ) : (
        <p className="text-2xl font-bold text-gray-700">{value}</p>
      )}
    </div>
  </div>
);

export default SellerPanel;
