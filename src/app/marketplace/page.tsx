"use client"

import { useState } from "react"
import { 
  Search, 
  Filter, 
  ShoppingCart, 
  Tag, 
  MapPin, 
  TrendingUp, 
  Wind, 
  Droplets,
  Trees 
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Header } from "@/components/layout/Header"

// Mock Data for Marketplace Listings
const listings = [
  {
    id: 1,
    title: "Sundarbans Mangrove #104",
    type: "Mangrove",
    location: "West Bengal, India",
    price: 1.2,
    currency: "ETH",
    credits: 500,
    vintage: "2024",
    image: "from-emerald-400 to-teal-500", // Gradient placeholder
    verified: true,
  },
  {
    id: 2,
    title: "Chilika Lake Seagrass #08",
    type: "Seagrass",
    location: "Odisha, India",
    price: 0.85,
    currency: "ETH",
    credits: 320,
    vintage: "2023",
    image: "from-cyan-400 to-blue-500",
    verified: true,
  },
  {
    id: 3,
    title: "Gulf of Mannar Reef #22",
    type: "Coral Reef",
    location: "Tamil Nadu, India",
    price: 2.5,
    currency: "ETH",
    credits: 1200,
    vintage: "2025",
    image: "from-purple-400 to-pink-500",
    verified: true,
  },
  {
    id: 4,
    title: "Kerala Backwaters #05",
    type: "Wetland",
    location: "Kerala, India",
    price: 0.95,
    currency: "ETH",
    credits: 450,
    vintage: "2024",
    image: "from-teal-400 to-green-500",
    verified: true,
  },
  {
    id: 5,
    title: "Andaman Blue Carbon #88",
    type: "Mangrove",
    location: "Andaman Islands",
    price: 3.1,
    currency: "ETH",
    credits: 1500,
    vintage: "2024",
    image: "from-blue-400 to-indigo-500",
    verified: true,
  },
  {
    id: 6,
    title: "Gujarat Coastal Zone #12",
    type: "Salt Marsh",
    location: "Gujarat, India",
    price: 0.75,
    currency: "ETH",
    credits: 280,
    vintage: "2023",
    image: "from-orange-400 to-red-500",
    verified: true,
  },
]

export default function MarketplacePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("All")

  const filteredListings = listings.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = selectedFilter === "All" || item.type === selectedFilter
    return matchesSearch && matchesFilter
  })

  const handleBuy = (item: any) => {
    alert(`🛒 Initiating Purchase:\n\nProject: ${item.title}\nPrice: ${item.price} ${item.currency}\nCredits: ${item.credits} BCC`)
  }

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20">
      <Header />
      
      {/* Hero Section */}
      <div className="relative bg-white/40 backdrop-blur-xl border-b border-white/20 pt-10 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 font-bold text-xs uppercase tracking-wider mb-4">
            <ShoppingCart className="h-4 w-4" /> Carbon Credit Marketplace
          </div>
          <h1 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Trade Verified Blue Carbon
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto font-medium">
            Buy and sell tokenized carbon credits directly from certified conservation projects.
          </p>
          
          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-10">
            {[
              { label: "Floor Price", value: "0.75 ETH" },
              { label: "Total Volume", value: "12.4K ETH" },
              { label: "Listed Items", value: "1,240" },
              { label: "Owners", value: "892" },
            ].map((stat, i) => (
              <div key={i} className="bg-white/60 backdrop-blur-md border border-white/40 p-4 rounded-2xl shadow-sm text-center">
                <div className="text-slate-500 text-xs font-bold uppercase">{stat.label}</div>
                <div className="text-xl font-black text-slate-800 mt-1">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 mt-12 space-y-8">
        
        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96 group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
            <Input 
              placeholder="Search projects or locations..." 
              className="pl-10 h-12 bg-white/70 border-white/40 focus:border-blue-400 shadow-sm rounded-xl text-base"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {["All", "Mangrove", "Seagrass", "Coral Reef", "Wetland"].map((filter) => (
              <Button
                key={filter}
                variant={selectedFilter === filter ? "default" : "outline"}
                onClick={() => setSelectedFilter(filter)}
                className={`rounded-full px-6 border-white/40 ${
                  selectedFilter === filter 
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 border-0 shadow-lg shadow-blue-500/20" 
                    : "bg-white/50 hover:bg-white/80 text-slate-600"
                }`}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredListings.map((item) => (
            <div key={item.id} className="group relative">
              {/* Card Hover Glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${item.image} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
              
              <Card className="relative bg-white/80 backdrop-blur-xl border-white/60 overflow-hidden hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-xl">
                {/* Image Placeholder */}
                <div className={`h-48 w-full bg-gradient-to-br ${item.image} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20" />
                  <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20">
                    #{item.id}
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center gap-1.5 text-xs font-medium bg-black/20 backdrop-blur-md px-2 py-1 rounded-lg w-fit mb-1">
                      <MapPin className="h-3 w-3" /> {item.location}
                    </div>
                  </div>
                </div>

                <CardContent className="pt-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-black text-lg text-slate-800 leading-tight">{item.title}</h3>
                      <p className="text-slate-500 text-sm font-medium">{item.type} Project • {item.vintage}</p>
                    </div>
                    <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                      {item.type === "Mangrove" && <Trees className="h-5 w-5" />}
                      {item.type === "Seagrass" && <Wind className="h-5 w-5" />}
                      {item.type === "Coral Reef" && <TrendingUp className="h-5 w-5" />}
                      {item.type === "Wetland" && <Droplets className="h-5 w-5" />}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 py-4 border-y border-slate-100">
                    <div>
                      <p className="text-xs text-slate-400 font-bold uppercase">Price</p>
                      <p className="text-lg font-black text-slate-800">{item.price} {item.currency}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-400 font-bold uppercase">Carbon Credits</p>
                      <p className="text-lg font-black text-emerald-600">{item.credits} BCC</p>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="pb-6 pt-0">
                  <Button 
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold h-12 rounded-xl shadow-lg hover:shadow-slate-500/20 transition-all"
                    onClick={() => handleBuy(item)}
                  >
                    Buy Now
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}