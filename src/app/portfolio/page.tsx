"use client"

import { useState } from "react"
import { 
  Wallet, 
  Leaf, 
  Wind, 
  TrendingUp, 
  ArrowUpRight, 
  Send, 
  Download, 
  Flame,
  PieChart,
  History
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/layout/Header"

// Mock User Assets (NFTs)
const myAssets = [
  {
    id: 104,
    title: "Sundarbans Mangrove #104",
    type: "Mangrove",
    location: "West Bengal, India",
    credits: 500,
    status: "Active",
    purchaseDate: "2024-03-15",
    image: "from-emerald-400 to-teal-500",
  },
  {
    id: 22,
    title: "Gulf of Mannar Reef #22",
    type: "Coral Reef",
    location: "Tamil Nadu, India",
    credits: 1200,
    status: "Active",
    purchaseDate: "2024-02-10",
    image: "from-purple-400 to-pink-500",
  },
  {
    id: 8,
    title: "Chilika Lake Seagrass #08",
    type: "Seagrass",
    location: "Odisha, India",
    credits: 320,
    status: "Retired",
    purchaseDate: "2024-01-22",
    image: "from-cyan-400 to-blue-500",
  }
]

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState("holdings")

  const handleRetire = (id: number) => {
    const confirmRetire = window.confirm(
      "Are you sure you want to retire these credits? This action is permanent and will burn the NFT to offset your carbon footprint."
    )
    if (confirmRetire) {
      alert(`🔥 Credits for Asset #${id} have been successfully retired! Certificate generated.`)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20">
      <Header />

      {/* Hero / Wallet Summary */}
      <div className="relative bg-white/40 backdrop-blur-xl border-b border-white/20 pt-12 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/5 border border-slate-900/10 text-slate-600 font-bold text-xs uppercase tracking-wider">
                <Wallet className="h-4 w-4" /> Personal Vault
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-slate-800">
                My Carbon Portfolio
              </h1>
              <p className="text-slate-600 text-lg font-medium">
                Manage your digital assets and track your contribution to global net-zero goals.
              </p>
            </div>

            {/* Wallet Card */}
            <div className="w-full md:w-auto">
              <Card className="bg-gradient-to-br from-slate-900 to-slate-800 text-white border-0 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -mr-16 -mt-16" />
                <CardContent className="p-8 relative z-10 min-w-[320px]">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <div className="text-slate-400 text-xs font-bold uppercase tracking-wider">Total Balance</div>
                      <div className="text-3xl font-black mt-1">2,020 BCC</div>
                      <div className="text-emerald-400 text-xs font-bold mt-1 flex items-center gap-1">
                        <TrendingUp className="h-3 w-3" /> +12.5% value
                      </div>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                      <Wind className="h-5 w-5 text-blue-400" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-slate-400 text-xs font-bold uppercase">Connected Wallet</div>
                    <div className="font-mono text-sm bg-black/30 px-3 py-1.5 rounded-lg border border-white/10 w-fit">
                      0x71C...9A23
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 mt-12 space-y-8">
        
        {/* Tabs */}
        <div className="flex gap-4 border-b border-slate-200 pb-1">
          {["holdings", "history", "certificates"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 px-2 text-sm font-bold uppercase tracking-wider transition-all relative ${
                activeTab === tab ? "text-blue-600" : "text-slate-400 hover:text-slate-600"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Assets Grid */}
        {activeTab === "holdings" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {myAssets.map((asset) => (
              <div key={asset.id} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${asset.image} rounded-3xl blur-xl opacity-0 group-hover:opacity-10 transition-opacity`} />
                
                <Card className="relative bg-white/80 backdrop-blur-xl border-white/60 shadow-lg hover:-translate-y-1 transition-transform overflow-hidden">
                  <div className={`h-32 bg-gradient-to-br ${asset.image} relative p-6`}>
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="relative z-10 flex justify-between items-start">
                      <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-lg text-white text-xs font-bold border border-white/20">
                        #{asset.id}
                      </div>
                      <div className={`px-3 py-1 rounded-lg text-xs font-bold border ${
                        asset.status === "Active" 
                          ? "bg-emerald-500/20 text-white border-white/20" 
                          : "bg-slate-900/50 text-slate-300 border-white/10"
                      }`}>
                        {asset.status}
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6 space-y-4">
                    <div>
                      <h3 className="font-bold text-lg text-slate-800">{asset.title}</h3>
                      <p className="text-slate-500 text-sm flex items-center gap-1">
                        <Leaf className="h-3 w-3" /> {asset.type} • {asset.location}
                      </p>
                    </div>

                    <div className="flex items-center justify-between py-4 border-y border-slate-100">
                      <div>
                        <div className="text-xs text-slate-400 font-bold uppercase">Offset Power</div>
                        <div className="text-xl font-black text-slate-800">{asset.credits} BCC</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-slate-400 font-bold uppercase">Est. Value</div>
                        <div className="text-lg font-bold text-slate-600">$1,250</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <Button variant="outline" className="w-full border-slate-200 hover:bg-slate-50">
                        <Send className="mr-2 h-4 w-4" /> Transfer
                      </Button>
                      {asset.status === "Active" ? (
                        <Button 
                          className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white border-0 shadow-lg shadow-orange-500/20"
                          onClick={() => handleRetire(asset.id)}
                        >
                          <Flame className="mr-2 h-4 w-4" /> Retire
                        </Button>
                      ) : (
                        <Button disabled className="w-full bg-slate-100 text-slate-400">
                          Retired
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
            
            {/* Add New Placeholder */}
            <div className="border-2 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center p-8 text-center hover:bg-slate-50 transition-colors cursor-pointer group h-full min-h-[300px]">
              <div className="h-16 w-16 rounded-full bg-slate-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <ArrowUpRight className="h-8 w-8 text-slate-400" />
              </div>
              <h3 className="font-bold text-slate-600">Buy More Credits</h3>
              <p className="text-slate-400 text-sm mt-2 max-w-[200px]">
                Support new restoration projects to offset your footprint.
              </p>
            </div>
          </div>
        )}

        {/* Impact Stats (History Tab Placeholder) */}
        {activeTab === "history" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white/60 backdrop-blur-xl border-white/40 p-6 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                <History className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-black text-slate-800">12</div>
                <div className="text-sm text-slate-500 font-bold uppercase">Transactions</div>
              </div>
            </Card>
            <Card className="bg-white/60 backdrop-blur-xl border-white/40 p-6 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center">
                <PieChart className="h-6 w-6 text-emerald-600" />
              </div>
              <div>
                <div className="text-2xl font-black text-slate-800">320 t</div>
                <div className="text-sm text-slate-500 font-bold uppercase">Carbon Offset</div>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}