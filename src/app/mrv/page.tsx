"use client"

import { useState } from "react"
import { 
  Satellite, 
  Scan, 
  Activity, 
  CheckCircle2, 
  AlertTriangle, 
  FileText, 
  BarChart3,
  Layers,
  RefreshCw,
  Eye
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/layout/Header"

export default function MRVPage() {
  const [isScanning, setIsScanning] = useState(false)

  const handleScan = () => {
    setIsScanning(true)
    setTimeout(() => setIsScanning(false), 3000)
  }

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20">
      <Header />

      {/* Hero Section */}
      <div className="relative bg-white/40 backdrop-blur-xl border-b border-white/20 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 font-bold text-xs uppercase tracking-wider">
              <Satellite className="h-4 w-4" /> Digital MRV System
            </div>
            <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
              Satellite Verification & <br/> Impact Analysis
            </h1>
            <p className="text-slate-600 text-lg font-medium">
              We use Sentinel-2 and Landsat optical imagery to calculate vegetative indices (NDVI/EVI) and estimate blue carbon biomass in real-time.
            </p>
          </div>
          
          <div className="flex gap-4">
            <Button 
              size="lg" 
              onClick={handleScan}
              className={`h-14 px-8 text-lg rounded-2xl shadow-xl transition-all ${
                isScanning 
                  ? "bg-slate-100 text-slate-400 border border-slate-200" 
                  : "bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 text-white"
              }`}
            >
              {isScanning ? (
                <>
                  <RefreshCw className="mr-2 h-5 w-5 animate-spin" />
                  Scanning...
                </>
              ) : (
                <>
                  <Scan className="mr-2 h-5 w-5" />
                  Request New Scan
                </>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Main Dashboard Grid */}
      <div className="max-w-7xl mx-auto px-6 mt-12 space-y-8">
        
        {/* Live Satellite View */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-slate-900 border-slate-800 shadow-2xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-60 group-hover:opacity-40 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
              
              {/* Overlay Grid UI */}
              <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
              
              {/* Scanning Animation Line */}
              {isScanning && (
                <div className="absolute top-0 left-0 w-full h-1 bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)] animate-scan z-10" />
              )}

              <CardContent className="relative z-20 p-8 h-[400px] flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="bg-black/50 backdrop-blur-md border border-white/10 rounded-lg p-3 text-white">
                    <div className="text-xs text-slate-400 font-bold uppercase mb-1">Target Zone</div>
                    <div className="font-mono text-lg font-bold text-cyan-400">LAT: 21.64° N | LNG: 88.22° E</div>
                    <div className="text-xs text-slate-300">Sundarbans Sector 4</div>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 font-bold text-xs uppercase animate-pulse">
                    <Satellite className="h-3 w-3" /> Live Feed
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: "NDVI Index", value: "0.78", status: "Healthy", color: "text-emerald-400" },
                    { label: "Canopy Cover", value: "92%", status: "Dense", color: "text-blue-400" },
                    { label: "Soil Moisture", value: "45%", status: "Optimal", color: "text-purple-400" },
                  ].map((stat, i) => (
                    <div key={i} className="bg-black/40 backdrop-blur-md border border-white/10 p-4 rounded-xl">
                      <div className="text-xs text-slate-400 font-bold uppercase">{stat.label}</div>
                      <div className={`text-2xl font-bold ${stat.color} font-mono mt-1`}>{stat.value}</div>
                      <div className="text-xs text-slate-300 mt-1">{stat.status}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Verification Timeline */}
            <Card className="bg-white/60 backdrop-blur-xl border-white/40">
              <CardHeader>
                <CardTitle className="text-slate-800 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-blue-600" /> Recent Verification Logs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { id: "LOG-8921", event: "Biomass density audit complete", time: "2 hours ago", status: "Verified", icon: CheckCircle2, color: "text-emerald-600", bg: "bg-emerald-100" },
                    { id: "LOG-8920", event: "Sentinel-2 imagery ingested", time: "5 hours ago", status: "Processing", icon: Layers, color: "text-blue-600", bg: "bg-blue-100" },
                    { id: "LOG-8919", event: "Vegetation loss detected (Zone B)", time: "1 day ago", status: "Alert", icon: AlertTriangle, color: "text-amber-600", bg: "bg-amber-100" },
                  ].map((log, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/50 border border-white/40 hover:bg-white/80 transition-colors">
                      <div className={`h-10 w-10 rounded-full ${log.bg} flex items-center justify-center`}>
                        <log.icon className={`h-5 w-5 ${log.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <h4 className="font-bold text-slate-800 text-sm">{log.event}</h4>
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${log.bg} ${log.color}`}>
                            {log.status}
                          </span>
                        </div>
                        <div className="flex justify-between items-center mt-1">
                          <p className="text-xs text-slate-500 font-mono">{log.id}</p>
                          <p className="text-xs text-slate-400">{log.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Stats */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-blue-600 to-purple-700 text-white border-none shadow-xl">
              <CardHeader>
                <CardTitle className="text-white/90 flex items-center gap-2 text-lg">
                  <Activity className="h-5 w-5" /> Network Status
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="text-sm text-blue-200 font-medium mb-1">Total Verified Carbon</div>
                  <div className="text-4xl font-black">12.4M <span className="text-lg font-bold opacity-60">tCO2e</span></div>
                </div>
                <div className="h-px bg-white/20" />
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs text-blue-200 uppercase font-bold">Active Sensors</div>
                    <div className="text-xl font-bold">142</div>
                  </div>
                  <div>
                    <div className="text-xs text-blue-200 uppercase font-bold">Data Points</div>
                    <div className="text-xl font-bold">8.2B</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-xl border-white/40">
              <CardHeader>
                <CardTitle className="text-slate-800 flex items-center gap-2 text-base">
                  <BarChart3 className="h-4 w-4 text-purple-600" /> Absorption Rates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { label: "Mangrove", value: 85, color: "bg-emerald-500" },
                    { label: "Seagrass", value: 65, color: "bg-cyan-500" },
                    { label: "Salt Marsh", value: 45, color: "bg-blue-500" },
                  ].map((item, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex justify-between text-xs font-bold text-slate-600">
                        <span>{item.label}</span>
                        <span>{item.value}/100</span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.value}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-6 text-xs font-bold uppercase tracking-wider">
                  View Full Report
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-xl border-white/40 overflow-hidden">
              <div className="p-4 bg-amber-50 border-b border-amber-100 flex gap-3 items-start">
                 <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                 <div>
                   <h4 className="text-sm font-bold text-amber-800">Anomaly Detected</h4>
                   <p className="text-xs text-amber-700 mt-1">
                     Possible illegal logging detected in Sector 7 via Sentinel-1 SAR radar change.
                   </p>
                   <Button size="sm" className="mt-2 bg-amber-600 hover:bg-amber-700 text-white border-0 h-7 text-xs">
                     <Eye className="mr-1 h-3 w-3" /> Investigate
                   </Button>
                 </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-scan {
          animation: scan 3s linear infinite;
        }
      `}</style>
    </div>
  )
}