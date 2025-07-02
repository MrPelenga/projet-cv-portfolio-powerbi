import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line } from 'recharts';
import { TrendingUp, DollarSign, ShoppingCart, Calendar, Home, Download } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

// Données complètes par année et pays
const completeData = {
  2003: {
    totalSales: 3.5,
    totalOrders: 263,
    averageBasket: 13.31,
  },
  2004: {
    totalSales: 10.03,
    totalOrders: 307,
    averageBasket: 32.68,
  },
  2005: {
    totalSales: 8.7,
    totalOrders: 276,
    averageBasket: 31.52,
  }
} as const;

const salesByDealSize = [
  { name: 'Large', value: 6.08, percentage: 60.68, color: '#3B82F6' },
  { name: 'Medium', value: 2.64, percentage: 26.34, color: '#10B981' },
  { name: 'Small', value: 1.30, percentage: 12.98, color: '#F59E0B' }
];

// Nouvelles données pour les ventes par catégorie (graphique en barres)
const salesByCategory = [
  { name: 'Classic Cars', value: 4.0 },
  { name: 'Vintage Cars', value: 2.0 },
  { name: 'Motorcycles', value: 1.5 },
  { name: 'Trucks and Buses', value: 1.2 },
  { name: 'Planes', value: 1.0 },
  { name: 'Ships', value: 0.8 },
  { name: 'Trains', value: 0.3 }
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

type ValidYear = '2003' | '2004' | '2005';

const PowerBIDashboard = () => {
  const [selectedYear, setSelectedYear] = useState<ValidYear>('2004');
  const [activeTab, setActiveTab] = useState('overview');

  const kpiData = useMemo(() => {
    const yearData = completeData[selectedYear];
    return {
      totalSales: yearData.totalSales,
      totalOrders: yearData.totalOrders,
      averageBasket: yearData.averageBasket
    };
  }, [selectedYear]);

  const handleHomeClick = () => {
    window.open('https://gabriel-pelenga-mangi-portfolio.lovable.app/', '_blank');
  };

  const handleDownloadCV = () => {
    const pdfUrl = '/lovable-uploads/8f18a883-91d4-447a-a066-f93e101c9f43.png';
    const newWindow = window.open(pdfUrl, '_blank');
    
    toast({
      title: "Téléchargement du CV - Gabriel PELENGA MANGI",
      description: "CV étudiant Mastère Data Science in Business - Le CV s'ouvre dans un nouvel onglet.",
      duration: 5000,
    });
    
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      toast({
        title: "Problème d'ouverture",
        description: "Votre navigateur a bloqué l'ouverture. Utilisez le bouton à nouveau en autorisant les popups.",
        variant: "destructive",
        duration: 5000,
      });
    }
  };

  const chartConfig = {
    sales: { label: "Ventes (M€)", color: "#10B981" },
    deals: { label: "Commandes", color: "#3B82F6" },
    averageBasket: { label: "Panier Moyen (K€)", color: "#F59E0B" }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <Button 
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transition-all duration-300"
            >
              <Link to="/projets">
                <Home className="mr-2 h-4 w-4" />
                Home
              </Link>
            </Button>
          </div>
          <div className="text-center flex-1">
            <h1 className="text-4xl font-bold text-white mb-2">Sales KPI</h1>
            <p className="text-blue-100">Dashboard d'analyse des performances commerciales</p>
          </div>
          <div className="w-20"></div> {/* Spacer pour centrer le titre */}
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
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 bg-white/10 backdrop-blur-sm">
            <TabsTrigger value="overview" className="data-[state=active]:bg-white/20 text-white">Vue d'ensemble</TabsTrigger>
            <TabsTrigger value="sales" className="data-[state=active]:bg-white/20 text-white">Analyse Ventes</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-100 text-sm">Somme des Sales €</p>
                      <p className="text-white text-3xl font-bold">{kpiData.totalSales.toFixed(2)}M</p>
                      <p className="text-blue-200 text-xs">Total {selectedYear}</p>
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
                      <p className="text-blue-200 text-xs">Total {selectedYear}</p>
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
                      <p className="text-blue-200 text-xs">Moyenne {selectedYear}</p>
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
                      <LineChart data={monthlySales2004}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
                        <XAxis dataKey="month" stroke="white" fontSize={10} />
                        <YAxis stroke="white" fontSize={12} />
                        <Line 
                          type="monotone" 
                          dataKey="sales" 
                          stroke="#10B981" 
                          strokeWidth={3}
                          dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
                        />
                        <ChartTooltip content={<ChartTooltipContent />} />
                      </LineChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="sales" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-100 text-sm">Somme des Sales €</p>
                      <p className="text-white text-3xl font-bold">{kpiData.totalSales.toFixed(2)}M</p>
                      <p className="text-blue-200 text-xs">Total {selectedYear}</p>
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
                      <p className="text-blue-200 text-xs">Total {selectedYear}</p>
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
                      <p className="text-blue-200 text-xs">Moyenne {selectedYear}</p>
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
                  <ChartContainer config={chartConfig} className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={salesByDealSize}
                          cx="50%"
                          cy="50%"
                          outerRadius={100}
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
                  <CardTitle className="text-white">Ventes par Catégorie</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={salesByCategory}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
                        <XAxis 
                          dataKey="name" 
                          stroke="white" 
                          fontSize={10}
                          angle={-45}
                          textAnchor="end"
                          height={80}
                        />
                        <YAxis stroke="white" fontSize={12} />
                        <Bar 
                          dataKey="value" 
                          fill="#10B981" 
                          radius={[4, 4, 0, 0]}
                          stroke="#059669"
                          strokeWidth={1}
                        />
                        <ChartTooltip 
                          content={({ active, payload, label }) => {
                            if (active && payload && payload.length) {
                              return (
                                <div className="bg-gray-800 p-3 rounded shadow-lg border border-green-500">
                                  <p className="font-medium text-white">{label}</p>
                                  <p className="text-green-400">
                                    Ventes: {payload[0].value}M€
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
        </Tabs>
      </div>
    </div>
  );
};

export default PowerBIDashboard;
