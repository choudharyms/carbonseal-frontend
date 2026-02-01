import Link from "next/link";
import { ArrowRight, Leaf, ShieldCheck, Globe, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <main className="flex-1 flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
        
        {/* Ambient Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] -z-10" />
        
        <div className="max-w-4xl space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 font-bold text-xs uppercase tracking-wider">
            <Globe className="h-3 w-3" /> World's First Blue Carbon Registry
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Verify. Trade.
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Restore the Planet.
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
            Carbon Seal uses satellite data and blockchain technology to verify mangrove restoration projects, enabling transparent high-value carbon credit trading.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            {/* UPDATED: GET STARTED BUTTON */}
            <Link href="/marketplace">
              <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/25">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            
            <Link href="/dashboard">
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-2 border-slate-200 bg-white/50 backdrop-blur-sm hover:bg-white/80 text-slate-700">
                View Dashboard
              </Button>
            </Link>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-24 w-full px-4">
          {[
            {
              title: "Satellite MRV",
              desc: "Real-time verification using Sentinel-2 imagery analysis.",
              icon: Globe,
              color: "text-blue-600",
              bg: "bg-blue-50"
            },
            {
              title: "Transparent Ledger",
              desc: "Every credit is tokenized on Polygon for total traceability.",
              icon: ShieldCheck,
              color: "text-purple-600",
              bg: "bg-purple-50"
            },
            {
              title: "High-Value Credits",
              desc: "Blue carbon projects sequester 4x more carbon than forests.",
              icon: Leaf,
              color: "text-emerald-600",
              bg: "bg-emerald-50"
            }
          ].map((feature, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white/60 backdrop-blur-md border border-white/60 shadow-xl shadow-slate-200/50 hover:-translate-y-1 transition-transform duration-300 text-left">
              <div className={`w-12 h-12 rounded-2xl ${feature.bg} flex items-center justify-center mb-6`}>
                <feature.icon className={`h-6 w-6 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
              <p className="text-slate-600 font-medium leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-500 text-sm font-semibold">
        <p>© 2025 Carbon Seal Registry.</p>
      </footer>
    </div>
  );
}