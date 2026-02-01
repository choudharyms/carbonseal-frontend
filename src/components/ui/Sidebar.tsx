"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Map, ShoppingBag, FileText, Anchor } from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    { name: "Digital Twin", icon: Map, path: "/map" },
    { name: "Marketplace", icon: ShoppingBag, path: "/marketplace" },
    { name: "MRV Reports", icon: FileText, path: "/reports" },
  ];

  return (
    <div className="h-screen w-64 fixed left-0 top-0 p-4 z-50">
      <div className="h-full w-full glass-panel rounded-2xl flex flex-col p-6">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2.5 bg-cyan-600 rounded-lg shadow-lg shadow-cyan-500/20">
            <Anchor size={24} className="text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white tracking-wide">Carbon Seal</h1>
            <p className="text-[10px] text-cyan-400 font-mono tracking-wider">NCCR REGISTRY</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-2 flex-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link 
                key={item.name} 
                href={item.path}
                className={`flex items-center space-x-3 p-3.5 rounded-xl transition-all duration-200
                  ${isActive 
                    ? "bg-cyan-500/20 border border-cyan-500/30 text-white shadow-md shadow-cyan-900/20" 
                    : "text-slate-400 hover:bg-white/10 hover:text-white"
                  }`}
              >
                <item.icon 
                  size={20} 
                  className={isActive ? "text-cyan-300" : "text-slate-500 group-hover:text-white"} 
                />
                <span className="font-medium text-sm">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Status Footer */}
        <div className="mt-auto pt-6 border-t border-white/10">
          <div className="flex items-center gap-2 mb-1">
            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold text-emerald-400">Node Connected</span>
          </div>
          <p className="text-[10px] text-slate-500">Polygon Mumbai Testnet</p>
        </div>
      </div>
    </div>
  );
}