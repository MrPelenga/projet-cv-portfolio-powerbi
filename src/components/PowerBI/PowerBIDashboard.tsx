
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line } from 'recharts';
import { TrendingUp, TrendingDown, Users, DollarSign, ShoppingCart, Calendar } from 'lucide-react';

// Données simulées basées sur vos images
const salesByDealSize = [
  { name: 'Large', value: 2.18, percentage: 61.95, color: '#1e40af' },
  { name: 'Medium', value: 0.91, percentage: 25.75, color: '#059669' },
  { name: 'Small', value: 0.43, percentage: 12.31, color: '#f59e0b' }
];

const salesByCountry = [
  { country: 'USA', sales: 3.8 },
  { country: 'Spain', sales: 1.2 },
  { country: 'UK', sales: 0.8 },
  { country: 'Sweden', sales: 0.3 },
  { country: 'Switzerland', sales: 0.2 }
];

const salesByCategory = [
  { category: 'Classic Cars', sales: 3.8 },
  { category: 'Vintage Cars', sales: 1.8 },
  { category: 'Motorcycles', sales: 1.2 },
  { category: 'Trucks and Buses', sales: 1.1 },
  { category: 'Planes', sales: 0.9 },
  { category: 'Ships', sales: 0.6 },
  { category: 'Trains', sales: 0.4 }
];

const monthlySales = [
  { month: 'janvier', sales: 0.1 },
  { month: 'février', sales: 0.15 },
  { month: 'mars', sales: 0.12 },
  { month: 'avril', sales: 0.18 },
  { month: 'mai', sales: 0.16 },
  { month: 'juin', sales: 0.14 },
  { month: 'juillet', sales: 0.22 },
  { month: 'août', sales: 0.35 },
  { month: 'septembre', sales: 0.65 },
  { month: 'octobre', sales: 0.88 },
  { month: 'novembre', sales: 1.2 },
  { month: 'décembre', sales: 0.9 }
];

const yearData = [
  { year: '2003', deals: 631 },
  { year: '2004', deals: 1284 },
  { year: '2005', deals: 876 }
];

const PowerBIDashboard = () => {
  const [selectedYear, setSelectedYear] = useState('2004');
  const [selectedCountry, setSelectedCountry] = useState('Tous');
  const [activeTab, setActiveTab] = useState('overview');

  const chartConfig = {
    sales: { label: "Ventes", color: "#059669" },
    deals: { label: "Commandes", color: "#1e40af" }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Sales KPI</h1>
          <p className="text-blue-100">Dashboard d'analyse des performances commerciales</p>
        </div>

        {/* Filtres */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2">
              <Calendar className="text-white" size={20} />
              <Select value={selectedYear} onValueChange={setSelectedYear}>
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
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Navigation par onglets */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-white/10 backdrop-blur-sm">
            <TabsTrigger value="overview" className="data-[state=active]:bg-white/20 text-white">Vue d'ensemble</TabsTrigger>
            <TabsTrigger value="sales" className="data-[state=active]:bg-white/20 text-white">Analyse Ventes</TabsTrigger>
            <TabsTrigger value="geography" className="data-[state=active]:bg-white/20 text-white">Géographie</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-100 text-sm">Somme des Sales €</p>
                      <p className="text-white text-3xl font-bold">10.03M</p>
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
                      <p className="text-white text-3xl font-bold">307</p>
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
                      <p className="text-white text-3xl font-bold">32.68K</p>
                    </div>
                    <TrendingUp className="text-green-400" size={32} />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Graphiques principaux */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Pie Chart - Répartition par taille */}
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

              {/* Bar Chart - Évolution mensuelle */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Évolution des Ventes Mensuelle</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={monthlySales}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
                        <XAxis dataKey="month" stroke="white" fontSize={12} />
                        <YAxis stroke="white" fontSize={12} />
                        <Bar dataKey="sales" fill="#059669" radius={[4, 4, 0, 0]} />
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
              {/* Ventes par catégorie */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Panier Moyen par PRODUCTLINE</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={salesByCategory} layout="horizontal">
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
                        <XAxis type="number" stroke="white" fontSize={12} />
                        <YAxis dataKey="category" type="category" stroke="white" fontSize={10} width={100} />
                        <Bar dataKey="sales" fill="#059669" radius={[0, 4, 4, 0]} />
                        <ChartTooltip content={<ChartTooltipContent />} />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>

              {/* Ventes par année */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Ventes des Deals par Année</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={yearData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
                        <XAxis dataKey="year" stroke="white" fontSize={12} />
                        <YAxis stroke="white" fontSize={12} />
                        <Bar dataKey="deals" fill="#1e40af" radius={[4, 4, 0, 0]} />
                        <ChartTooltip content={<ChartTooltipContent />} />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="geography" className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Top 5 des meilleurs Pays</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-96">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={salesByCountry} layout="horizontal">
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
                      <XAxis type="number" stroke="white" fontSize={12} />
                      <YAxis dataKey="country" type="category" stroke="white" fontSize={12} width={80} />
                      <Bar dataKey="sales" fill="#059669" radius={[0, 4, 4, 0]} />
                      <ChartTooltip content={<ChartTooltipContent />} />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PowerBIDashboard;
