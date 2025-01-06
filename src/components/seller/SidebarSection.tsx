import { LucideIcon } from 'lucide-react';
import React from 'react';

interface SidebarButtonProps {
  icon: LucideIcon;
  label: string;
  isActive?: boolean;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({ icon: Icon, label, isActive }) => (
  <button 
    className={`w-full flex items-center space-x-3 p-2 ${
      isActive ? 'bg-emerald-50 text-emerald-600' : 'text-gray-600 hover:bg-gray-50'
    } rounded-md`}
  >
    <Icon size={20} />
    <span>{label}</span>
  </button>
);

interface SidebarSectionProps {
  title: string;
  buttons: Array<{
    icon: LucideIcon;
    label: string;
    isActive?: boolean;
  }>;
  isOpen: boolean;
}

const SidebarSection: React.FC<SidebarSectionProps> = ({ title, buttons, isOpen }) => (
  <div className="p-4">
    <h2 className={`text-xs font-semibold text-gray-400 mb-4 ${!isOpen && 'hidden'}`}>
      {title}
    </h2>
    <div className="space-y-2">
      {buttons.map((button, index) => (
        <SidebarButton
          key={index}
          icon={button.icon}
          label={button.label}
          isActive={button.isActive}
        />
      ))}
    </div>
  </div>
);

export default SidebarSection;