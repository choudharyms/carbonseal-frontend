"use client"

import { useState } from "react"
import {
  TrendingUp,
  MapPin,
  Leaf,
  Plus,
  CheckCircle2,
  Clock,
  AlertCircle,
  Activity,
  Database,
  Upload,
  Sparkles,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

// Mock data for the chart
const chartData = [
  { month: "Jan", credits: 180000 },
  { month: "Feb", credits: 245000 },
  { month: "Mar", credits: 310000 },
  { month: "Apr", credits: 420000 },
  { month: "May", credits: 580000 },
  { month: "Jun", credits: 750000 },
  { month: "Jul", credits: 920000 },
  { month: "Aug", credits: 1150000 },
  { month: "Sep", credits: 1420000 },
  { month: "Oct", credits: 1780000 },
  { month: "Nov", credits: 2100000 },
  { month: "Dec", credits: 2500000 },
]

interface ActivityItem {
  id: string
  project: string
  status: "verified" | "pending" | "rejected"
  credits: number
  location: string
  timestamp: string
}

export default function DashboardPage() {
  const [isUploading, setIsUploading] = useState(false)
  const [activities, setActivities] = useState<ActivityItem[]>([
    {
      id: "1",
      project: "Mangrove Site #12",
      status: "verified",
      credits: 15420,
      location: "Gulf of Khambhat, Gujarat",
      timestamp: "2 hours ago",
    },
    {
      id: "2",
      project: "Seagrass Restoration #8",
      status: "verified",
      credits: 8750,
      location: "Chilika Lake, Odisha",
      timestamp: "5 hours ago",
    },
    {
      id: "3",
      project: "Coastal Wetland #5",
      status: "pending",
      credits: 12300,
      location: "Sundarbans, West Bengal",
      timestamp: "1 day ago",
    },
  ])

  const handleSimulateUpload = async () => {
    setIsUploading(true)

    try {
      // Generate random project data
      const projectNumber = Math.floor(Math.random() * 1000) + 1
      const randomCredits = Math.floor(Math.random() * 20000) + 5000
      const locations = [
        "Mumbai Coast, Maharashtra",
        "Kochi Backwaters, Kerala",
        "Andaman Islands",
        "Gulf of Kutch, Gujarat",
        "Pichavaram, Tamil Nadu",
      ]
      const randomLocation = locations[Math.floor(Math.random() * locations.length)]

      const payload = {
        name: `Mangrove Site #${projectNumber}`,
        location: randomLocation,
        coordinates: {
          lat: (Math.random() * 20 + 8).toFixed(6),
          lng: (Math.random() * 20 + 68).toFixed(6),
        },
        credits: randomCredits,
        area: (randomCredits / 100).toFixed(2),
      }

      // Call backend API
      const response = await fetch("http://localhost:5000/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error("Failed to upload project data")
      }

      const data = await response.json()

      // Add new activity to the feed
      const newActivity: ActivityItem = {
        id: data.projectId || Date.now().toString(),
        project: payload.name,
        status: data.verificationStatus === "verified" ? "verified" : "pending",
        credits: randomCredits,
        location: randomLocation,
        timestamp: "Just now",
      }

      setActivities([newActivity, ...activities])

      // Show success alert
      alert(
        `✅ Project Uploaded Successfully!\n\n` +
          `Project ID: ${data.projectId}\n` +
          `Status: ${data.verificationStatus}\n` +
          `Credits: ${randomCredits.toLocaleString()} BCC\n` +
          `Location: ${randomLocation}`
      )
    } catch (error) {
      console.error("Error simulating data upload:", error)
      alert(
        "❌ Upload Failed\n\n" +
          "Make sure the backend server is running on http://localhost:5000"
      )
    } finally {
      setIsUploading(false)
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "verified":
        return (
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-50 to-green-50 border-2 border-emerald-300 text-emerald-700 text-xs font-black shadow-lg shadow-emerald-500/20">
            <CheckCircle2 className="h-4 w-4" />
            Verified
          </span>
        )
      case "pending":
        return (
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-orange-50 to-amber-50 border-2 border-orange-300 text-orange-700 text-xs font-black shadow-lg shadow-orange-500/20">
            <Clock className="h-4 w-4" />
            Pending
          </span>
        )
      case "rejected":
        return (
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-red-50 to-rose-50 border-2 border-red-300 text-red-700 text-xs font-black shadow-lg shadow-red-500/20">
            <AlertCircle className="h-4 w-4" />
            Rejected
          </span>
        )
    }
  }

  return (
    <div className="min-h-screen py-12 px-6 relative">
      {/* Floating Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-10 animate-float" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-3xl opacity-10 animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="max-w-7xl mx-auto space-y-10 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-xl border-2 border-purple-200 shadow-lg mb-3">
              <Sparkles className="h-4 w-4 text-purple-600" />
              <span className="text-xs font-black text-purple-600">DASHBOARD</span>
            </div>
            <h1 className="text-5xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Command Center
            </h1>
            <p className="text-slate-600 text-lg font-semibold">
              Monitor and manage your blue carbon projects
            </p>
          </div>

          <Button
            onClick={handleSimulateUpload}
            disabled={isUploading}
            size="lg"
            className="group shadow-2xl"
          >
            {isUploading ? (
              <>
                <Database className="h-5 w-5 animate-pulse" />
                Uploading...
              </>
            ) : (
              <>
                <Plus className="h-5 w-5 group-hover:rotate-90 transition-transform" />
                Simulate Data Upload
              </>
            )}
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Total Carbon Credits",
              value: "2.5M",
              subtitle: "+12.5% from last month",
              icon: TrendingUp,
              gradient: "from-blue-500 to-cyan-500",
              iconBg: "from-blue-50 to-cyan-50",
            },
            {
              title: "Active Projects",
              value: "48",
              subtitle: "+4 new this week",
              icon: MapPin,
              gradient: "from-purple-500 to-pink-500",
              iconBg: "from-purple-50 to-pink-50",
            },
            {
              title: "Verified Area",
              value: "15,240",
              subtitle: "Hectares Monitored",
              icon: Leaf,
              gradient: "from-emerald-500 to-green-500",
              iconBg: "from-emerald-50 to-green-50",
            },
          ].map((stat, i) => (
            <div key={i} className="relative group">
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity`} />
              <Card className="relative card-hover cursor-pointer overflow-hidden">
                <CardHeader className="relative">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-slate-700 text-sm font-black uppercase tracking-wider">
                      {stat.title}
                    </CardTitle>
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${stat.iconBg} border-2 border-blue-200 group-hover:scale-110 transition-transform shadow-lg`}>
                      <stat.icon className="h-7 w-7 text-blue-600" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative space-y-2">
                  <div className="text-5xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="flex items-center gap-2 text-emerald-600 text-sm font-bold">
                    <TrendingUp className="h-4 w-4" />
                    <span>{stat.subtitle}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Chart Section */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity" />
          <Card className="relative card-hover">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 shadow-lg">
                  <Activity className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-slate-800 text-2xl">
                  Credit Issuance Over Time
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={chartData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="colorCredits" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.1} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis
                      dataKey="month"
                      stroke="#64748b"
                      style={{ fontSize: "14px", fontWeight: "600" }}
                    />
                    <YAxis
                      stroke="#64748b"
                      style={{ fontSize: "14px", fontWeight: "600" }}
                      tickFormatter={(value) =>
                        `${(value / 1000000).toFixed(1)}M`
                      }
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(255, 255, 255, 0.95)",
                        border: "2px solid rgb(191, 219, 254)",
                        borderRadius: "12px",
                        backdropFilter: "blur(12px)",
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                      }}
                      labelStyle={{ color: "#1e293b", fontWeight: "700" }}
                      itemStyle={{ color: "#6366f1", fontWeight: "600" }}
                      formatter={(value: number) =>
                        `${value.toLocaleString()} BCC`
                      }
                    />
                    <Area
                      type="monotone"
                      dataKey="credits"
                      stroke="#6366f1"
                      strokeWidth={3}
                      fillOpacity={1}
                      fill="url(#colorCredits)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Activity Feed */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity" />
          <Card className="relative card-hover">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-200 shadow-lg">
                  <Upload className="h-6 w-6 text-cyan-600" />
                </div>
                <CardTitle className="text-slate-800 text-2xl">
                  Recent Activity
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-5">
                {activities.map((activity, index) => (
                  <div
                    key={activity.id}
                    className="relative group/item"
                    style={{
                      animation: `fadeIn 0.5s ease-in-out ${index * 0.1}s both`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-lg opacity-0 group-hover/item:opacity-20 transition-opacity" />
                    <div className="relative flex items-center justify-between p-6 rounded-2xl bg-gradient-to-br from-white/90 to-blue-50/50 backdrop-blur-sm border-2 border-white/60 shadow-lg group-hover/item:shadow-2xl group-hover/item:border-blue-200 transition-all">
                      <div className="flex items-start gap-5 flex-1">
                        <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-xl group-hover/item:scale-110 transition-transform">
                          <MapPin className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0 space-y-3">
                          <div className="flex items-center gap-3 flex-wrap">
                            <h4 className="text-slate-800 font-black text-xl">
                              {activity.project}
                            </h4>
                            {getStatusBadge(activity.status)}
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-sm text-slate-600 font-semibold">
                            <span className="flex items-center gap-2">
                              <MapPin className="h-4 w-4 text-blue-600" />
                              {activity.location}
                            </span>
                            <span className="flex items-center gap-2">
                              <Leaf className="h-4 w-4 text-emerald-600" />
                              {activity.credits.toLocaleString()} BCC
                            </span>
                            <span className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-purple-600" />
                              {activity.timestamp}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
