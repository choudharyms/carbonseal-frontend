"use client"

import { 
  Globe, 
  ShieldCheck, 
  Leaf, 
  Users, 
  Target, 
  Award,
  ArrowRight,
  Cpu,
  Lock
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/layout/Header"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50/50 pb-20">
      <Header />

      {/* Hero Section */}
      <div className="relative bg-white/40 backdrop-blur-xl border-b border-white/20 pt-20 pb-24 px-6 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] -z-10" />

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 font-bold text-xs uppercase tracking-wider">
            <Users className="h-3 w-3" /> Our Mission
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
            Building the <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Trust Layer
            </span>{" "}
            for Nature.
          </h1>
          
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
            Carbon Seal bridges the gap between ecological restoration and financial markets using satellite intelligence and blockchain immutability.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto px-6 -mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: "Hectares Monitored", value: "2.5M+", icon: Globe, color: "text-blue-600" },
            { label: "Carbon Verified", value: "12.4M t", icon: ShieldCheck, color: "text-emerald-600" },
            { label: "Partner Projects", value: "140+", icon: Leaf, color: "text-purple-600" },
          ].map((stat, i) => (
            <Card key={i} className="bg-white/80 backdrop-blur-xl border-white/60 shadow-xl shadow-slate-200/50">
              <CardContent className="p-8 flex items-center gap-6">
                <div className={`p-4 rounded-2xl bg-slate-50 border border-slate-100`}>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <div>
                  <div className="text-3xl font-black text-slate-800">{stat.value}</div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-wide">{stat.label}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* The Solution Section */}
      <div className="max-w-7xl mx-auto px-6 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-black text-slate-800">
              Why Carbon Markets are Broken (And How We Fix It)
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1 h-8 w-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">✕</div>
                <div>
                  <h3 className="font-bold text-lg text-slate-800">The Problem: Phantom Credits</h3>
                  <p className="text-slate-600">Traditional registries rely on paper audits that happen once every 5 years. This leads to "phantom credits" where trees are sold but no longer exist.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 text-emerald-600 font-bold">✓</div>
                <div>
                  <h3 className="font-bold text-lg text-slate-800">Our Solution: Digital MRV</h3>
                  <p className="text-slate-600">We use Sentinel-2 satellite imagery to verify biomass in real-time. If the trees disappear, the credits are automatically burned on-chain.</p>
                </div>
              </div>
            </div>
            <Link href="/projects">
              <Button size="lg" className="mt-4 bg-slate-900 text-white hover:bg-slate-800">
                See Our Tech in Action <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Visual Graphic */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-20" />
            <div className="relative bg-white/60 backdrop-blur-xl border border-white/60 rounded-3xl p-8 space-y-6">
              {[
                { title: "Satellite Data Ingestion", icon: Globe, sub: "ESA Sentinel-2 / NASA Landsat" },
                { title: "AI Analysis", icon: Cpu, sub: "Computer Vision Biomass Estimation" },
                { title: "Smart Contract Minting", icon: Lock, sub: "Polygon PoS Network" },
                { title: "Marketplace Listing", icon: Target, sub: "Global Carbon Exchange" },
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/50 border border-white/40 hover:bg-white/80 transition-colors">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <div className="font-bold text-slate-800">{step.title}</div>
                    <div className="text-xs font-semibold text-slate-500 uppercase">{step.sub}</div>
                  </div>
                  <div className="ml-auto text-slate-300">
                    {step.icon && <step.icon className="h-5 w-5" />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-6 mt-32 mb-16">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-black text-slate-800">Meet the Builders</h2>
          <p className="text-slate-600">Experts in Web3, Blockchain, and Building Unique Ideas.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { name: "Madhusudan Singh", role: "Cheif Tech Officer", bg: "from-emerald-400 to-teal-500" },
            { name: "Kunal Gupta", role: "SWE", bg: "from-blue-400 to-indigo-500" },
            { name: "Lakshit", role: "SWE", bg: "from-purple-400 to-pink-500" },
            { name: "Pragya Sharma", role: "SWE & Researcher", bg: "from-orange-400 to-red-500" },
            { name: "Mahak Sharma", role: "SWE - UI&UX", bg: "from-pink-400 to-rose-500" },
            { name: "Aastha ", role: "Project Manager", bg: "from-yellow-400 to-amber-500" },
          ].map((member, i) => (
            <div key={i} className="group relative">
              <div className="relative overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className={`h-32 bg-gradient-to-br ${member.bg} opacity-80 group-hover:opacity-100 transition-opacity`} />
                <div className="p-6 -mt-12 relative">
                  <div className="h-20 w-20 rounded-2xl bg-white p-1 shadow-md mx-auto mb-4">
                     {/* Avatar Placeholder */}
                    <div className={`h-full w-full rounded-xl bg-gradient-to-br ${member.bg} opacity-50`} />
                  </div>
                  <div className="text-center">
                    <h3 className="font-bold text-lg text-slate-800">{member.name}</h3>
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">{member.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="mt-24 py-20 bg-slate-900 text-center px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl font-black text-white">Ready to make an impact?</h2>
          <p className="text-slate-400 text-lg">Join the registry that is redefining trust in the voluntary carbon market.</p>
          <div className="flex justify-center gap-4">
             <Link href="/marketplace">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white px-8 h-12 rounded-full">
                Start Trading
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}