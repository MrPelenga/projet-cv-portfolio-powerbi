import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line } from 'recharts';
import { TrendingUp, TrendingDown, Users, DollarSign, ShoppingCart, Calendar } from 'lucide-react';
import HorizontalBarChart from './HorizontalBarChart';

// Données complètes par année et pays
const completeData = {
  2003: {
    totalSales: 3.5,
    totalOrders: 263,
    averageBasket: 13.31,
    countries: {
      'USA': 1.5,
      'Spain': 0.5,
      'UK': 0.3,
      'Sweden': 0.1,
      'Switzerland': 0.1,
      'Australia': 0.2,
      'Austria': 0.15,
      'Belgium': 0.25,
      'Canada': 0.3,
      'Denmark': 0.1
    }
  },
  2004: {
    totalSales: 10.03,
    totalOrders: 307,
    averageBasket: 32.68,
    countries: {
      'USA': 3.8,
      'Spain': 1.2,
      'UK': 0.8,
      'Sweden': 0.3,
      'Switzerland': 0.2,
      'Australia': 0.6,
      'Austria': 0.4,
      'Belgium': 0.7,
      'Canada': 0.9,
      'Denmark': 0.3
    }
  },
  2005: {
    totalSales: 8.7,
    totalOrders: 276,
    averageBasket: 31.52,
    countries: {
      'USA': 2.9,
      'Spain': 1.1,
      'UK': 0.7,
      'Sweden': 0.25,
      'Switzerland': 0.18,
      'Australia': 0.5,
      'Austria': 0.35,
      'Belgium': 0.6,
      'Canada': 0.8,
      'Denmark': 0.25
    }
  }
} as const;

const salesByDealSize = [
  { name: 'Large', value: 6.08, percentage: 60.68, color: '#3B82F6' },
  { name: 'Medium', value: 2.64, percentage: 26.34, color: '#10B981' },
  { name: 'Small', value: 1.30, percentage: 12.98, color: '#F59E0B' }
];

// Données corrigées pour les graphiques horizontaux
const salesByCategory = [
  { name: 'Classic Cars', value: 20, sales: 20000, orders: 967 },
  { name: 'Planes', value: 18, sales: 18000, orders: 173 },
  { name: 'Motorcycles', value: 16, sales: 16000, orders: 331 },
  { name: 'Trucks and Buses', value: 14, sales: 14000, orders: 239 },
  { name: 'Ships', value: 12, sales: 12000, orders: 87 },
  { name: 'Vintage Cars', value: 10, sales: 10000, orders: 238 },
  { name: 'Trains', value: 8, sales: 8000, orders: 77 }
];

const monthlySales2004 = [
  { month: 'Jan', sales: 0.35 },
  { month: 'Fév', sales: 0.45 },
  { month: 'Mar', sales: 0.52 },
  { month: 'Avr', sales: 0.68 },
  { month: 'Mai', sales: 0.76 },
  { month: 'Jun', sales: 0.84 },
  { month: 'Jul', sales: 1.02 },
  { month: 'Aoû', sales: 1.15 },
  { month: 'Sep', sales: 1.35 },
  { month: 'Oct', sales: 1.68 },
  { month: 'Nov', sales: 2.03 },
  { month: 'Déc', sales: 1.20 }
];

const yearData = [
  { year: '2003', deals: 263, sales: 3.5 },
  { year: '2004', deals: 307, sales: 10.03 },
  { year: '2005', deals: 276, sales: 8.7 }
];

type ValidYear = '2003' | '2004' | '2005';

const PowerBIDashboard = () => {
  const [selectedYear, setSelectedYear] = useState<ValidYear>('2004');
  const [selectedCountry, setSelectedCountry] = useState('Tous');
  const [activeTab, setActiveTab] = useState('overview');

  const kpiData = useMemo(() => {
    const yearData = completeData[selectedYear];
    
    if (selectedCountry === 'Tous') {
      return {
        totalSales: yearData.totalSales,
        totalOrders: yearData.totalOrders,
        averageBasket: yearData.averageBasket
      };
    } else {
      const countrySales = yearData.countries[selectedCountry as keyof typeof yearData.countries] || 0;
      const estimatedOrders = Math.round(countrySales / (yearData.averageBasket / 1000) * 10);
      const countryBasket = estimatedOrders > 0 ? (countrySales * 1000) / estimatedOrders : 0;
      
      return {
        totalSales: countrySales,
        totalOrders: estimatedOrders,
        averageBasket: countryBasket / 1000
      };
    }
  }, [selectedYear, selectedCountry]);

  // Données des pays filtrées par année - CORRIGÉ
  const salesByCountry = useMemo(() => {
    const yearData = completeData[selectedYear];
    return Object.entries(yearData.countries)
      .map(([country, sales]) => ({ name: country, value: sales }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 5);
  }, [selectedYear]);

  const chartConfig = {
    sales: { label: "Ventes (M€)", color: "#10B981" },
    deals: { label: "Commandes", color: "#3B82F6" },
    averageBasket: { label: "Panier Moyen (K€)", color: "#F59E0B" },
    orders: { label: "Commandes", color: "#8b5cf6" }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Sales KPI</h1>
          <p className="text-blue-100">Dashboard d'analyse des performances commerciales</p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2">
              <Calendar className="text-white" size={20} />
              <Select value={selectedYear} onValueChange={(value: ValidYear) => setSelectedYear(value)}>
                <SelectTrigger className="w-32 bg-white/20 text-white border-white/30">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2003">2003</SelectItem>
                  <SelectItem value="2004">2004</SelectItem>
                  <SelectItem value="2005">2005</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <Users className="text-white" size={20} />
              <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                <SelectTrigger className="w-40 bg-white/20 text-white border-white/30">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Tous">Tous les pays</SelectItem>
                  <SelectItem value="USA">USA</SelectItem>
                  <SelectItem value="Spain">Spain</SelectItem>
                  <SelectItem value="UK">UK</SelectItem>
                  <SelectItem value="Sweden">Sweden</SelectItem>
                  <SelectItem value="Switzerland">Switzerland</SelectItem>
                  <SelectItem value="Australia">Australia</SelectItem>
                  <SelectItem value="Austria">Austria</SelectItem>
                  <SelectItem value="Belgium">Belgium</SelectItem>
                  <SelectItem value="Canada">Canada</SelectItem>
                  <SelectItem value="Denmark">Denmark</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-white/10 backdrop-blur-sm">
            <TabsTrigger value="overview" className="data-[state=active]:bg-white/20 text-white">Vue d'ensemble</TabsTrigger>
            <TabsTrigger value="sales" className="data-[state=active]:bg-white/20 text-white">Analyse Ventes</TabsTrigger>
            <TabsTrigger value="geography" className="data-[state=active]:bg-white/20 text-white">Géographie</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-100 text-sm">Somme des Sales €</p>
                      <p className="text-white text-3xl font-bold">{kpiData.totalSales.toFixed(2)}M</p>
                      <p className="text-blue-200 text-xs">
                        {selectedCountry !== 'Tous' ? `${selectedCountry} - ${selectedYear}` : `Total ${selectedYear}`}
                      </p>
                    </div>
                    <DollarSign className="text-green-400" size={32} />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-100 text-sm">Nombre de Commandes</p>
                      <p className="text-white text-3xl font-bold">{kpiData.totalOrders}</p>
                      <p className="text-blue-200 text-xs">
                        {selectedCountry !== 'Tous' ? `${selectedCountry} - ${selectedYear}` : `Total ${selectedYear}`}
                      </p>
                    </div>
                    <ShoppingCart className="text-blue-400" size={32} />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-100 text-sm">Panier Moyen €</p>
                      <p className="text-white text-3xl font-bold">{kpiData.averageBasket.toFixed(2)}K</p>
                      <p className="text-blue-200 text-xs">
                        {selectedCountry !== 'Tous' ? `${selectedCountry} - ${selectedYear}` : `Moyenne ${selectedYear}`}
                      </p>
                    </div>
                    <TrendingUp className="text-green-400" size={32} />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Somme de SALES par DEALSIZE</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={salesByDealSize}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          dataKey="value"
                        >
                          {salesByDealSize.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <ChartTooltip content={<ChartTooltipContent />} />
                      </PieChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                  <div className="flex justify-center gap-4 mt-4">
                    {salesByDealSize.map((item) => (
                      <Badge key={item.name} variant="secondary" className="bg-white/20 text-white">
                        {item.name}: {item.percentage}%
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Évolution des Ventes Mensuelle 2004</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={monthlySales2004}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
                        <XAxis dataKey="month" stroke="white" fontSize={10} />
                        <YAxis stroke="white" fontSize={12} />
                        <Bar dataKey="sales" fill="#10B981" radius={[4, 4, 0, 0]} />
                        <ChartTooltip content={<ChartTooltipContent />} />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="sales" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* GRAPHIQUE CORRIGÉ - Panier moyen par catégorie */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Panier Moyen par PRODUCTLINE</CardTitle>
                </CardHeader>
                <CardContent>
                  <HorizontalBarChart
                    data={salesByCategory}
                    dataKey="value"
                    color="#10B981"
                    formatValue={(value) => `${value}K€`}
                    className="h-80"
                  />
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Évolution des Ventes par Année</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={yearData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
                        <XAxis dataKey="year" stroke="white" fontSize={12} />
                        <YAxis stroke="white" fontSize={12} />
                        <Bar dataKey="sales" fill="#10B981" radius={[4, 4, 0, 0]} />
                        <ChartTooltip 
                          content={({ active, payload, label }) => {
                            if (active && payload && payload.length) {
                              return (
                                <div className="bg-white p-2 rounded shadow-lg border">
                                  <p className="font-medium">Année {label}</p>
                                  <p className="text-green-600">
                                    Ventes: {payload[0].value}M€
                                  </p>
                                  <p className="text-blue-600">
                                    Commandes: {payload[0].payload.deals}
                                  </p>
                                </div>
                              );
                            }
                            return null;
                          }}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="geography" className="space-y-6">
            {/* GRAPHIQUE CORRIGÉ - Top 5 des pays */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">
                  Top 5 des meilleurs Pays - {selectedYear}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <HorizontalBarChart
                  data={salesByCountry}
                  dataKey="value"
                  color="#3B82F6"
                  formatValue={(value) => `${value}M€`}
                  className="h-96"
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PowerBIDashboard;
