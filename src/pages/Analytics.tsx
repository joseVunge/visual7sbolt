import React from 'react';
import { 
  TrendingUp, 
  Eye, 
  Users, 
  MessageCircle, 
  Share2,
  Calendar,
  Target,
  Activity
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const Analytics: React.FC = () => {
  const engagementData = [
    { name: 'Jan', instagram: 1200, facebook: 800, linkedin: 400, tiktok: 200 },
    { name: 'Fev', instagram: 1400, facebook: 900, linkedin: 450, tiktok: 300 },
    { name: 'Mar', instagram: 1100, facebook: 750, linkedin: 380, tiktok: 250 },
    { name: 'Abr', instagram: 1600, facebook: 1100, linkedin: 520, tiktok: 400 },
    { name: 'Mai', instagram: 1800, facebook: 1200, linkedin: 580, tiktok: 450 },
    { name: 'Jun', instagram: 2000, facebook: 1300, linkedin: 620, tiktok: 500 },
  ];

  const whatsappData = [
    { name: 'Seg', enviadas: 120, lidas: 95, respondidas: 23 },
    { name: 'Ter', enviadas: 150, lidas: 125, respondidas: 31 },
    { name: 'Qua', enviadas: 180, lidas: 145, respondidas: 28 },
    { name: 'Qui', enviadas: 200, lidas: 165, respondidas: 35 },
    { name: 'Sex', enviadas: 170, lidas: 140, respondidas: 29 },
    { name: 'Sab', enviadas: 90, lidas: 75, respondidas: 18 },
    { name: 'Dom', enviadas: 60, lidas: 50, respondidas: 12 },
  ];

  const platformDistribution = [
    { name: 'Instagram', value: 35, color: '#E4405F' },
    { name: 'Facebook', value: 28, color: '#1877F2' },
    { name: 'LinkedIn', value: 20, color: '#0A66C2' },
    { name: 'WhatsApp', value: 17, color: '#25D366' },
  ];

  const topPerformingPosts = [
    {
      id: 1,
      content: 'Apartamento moderno no centro - 3 quartos',
      platform: 'Instagram',
      views: 2500,
      engagement: 8.5,
      date: '2024-01-15'
    },
    {
      id: 2,
      content: 'Dicas para primeira compra de imóvel',
      platform: 'LinkedIn',
      views: 1800,
      engagement: 12.3,
      date: '2024-01-14'
    },
    {
      id: 3,
      content: 'Veículos seminovos com garantia',
      platform: 'Facebook',
      views: 1600,
      engagement: 6.8,
      date: '2024-01-13'
    }
  ];

  const stats = [
    { name: 'Total de Visualizações', value: '45.2K', change: '+12.5%', icon: Eye, color: 'bg-blue-500' },
    { name: 'Engajamento Médio', value: '8.7%', change: '+2.1%', icon: Activity, color: 'bg-green-500' },
    { name: 'Novos Seguidores', value: '1.2K', change: '+18.3%', icon: Users, color: 'bg-purple-500' },
    { name: 'Taxa de Conversão', value: '3.4%', change: '+0.8%', icon: Target, color: 'bg-orange-500' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics</h1>
            <p className="text-gray-600">Insights detalhados das suas campanhas e publicações</p>
          </div>
          <div className="mt-4 sm:mt-0 flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-gray-400" />
            <select className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent">
              <option>Últimos 30 dias</option>
              <option>Últimos 7 dias</option>
              <option>Último mês</option>
              <option>Últimos 3 meses</option>
            </select>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-lg shadow-sm p-6 card-hover">
            <div className="flex items-center">
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <div className="flex items-center">
                  <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                  <span className="ml-2 text-sm font-medium text-green-600">{stat.change}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Social Media Engagement */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Engajamento por Plataforma</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={engagementData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="instagram" stackId="1" stroke="#E4405F" fill="#E4405F" />
              <Area type="monotone" dataKey="facebook" stackId="1" stroke="#1877F2" fill="#1877F2" />
              <Area type="monotone" dataKey="linkedin" stackId="1" stroke="#0A66C2" fill="#0A66C2" />
              <Area type="monotone" dataKey="tiktok" stackId="1" stroke="#000000" fill="#000000" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* WhatsApp Performance */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance WhatsApp</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={whatsappData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="enviadas" fill="#25D366" name="Enviadas" />
              <Bar dataKey="lidas" fill="#128C7E" name="Lidas" />
              <Bar dataKey="respondidas" fill="#075E54" name="Respondidas" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Platform Distribution and Top Posts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Platform Distribution */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Distribuição de Tráfego</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={platformDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {platformDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Top Performing Posts */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Posts com Melhor Performance</h3>
          <div className="space-y-4">
            {topPerformingPosts.map((post, index) => (
              <div key={post.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 truncate">{post.content}</p>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="text-xs text-gray-500">{post.platform}</span>
                    <span className="text-xs text-gray-500">{post.views} visualizações</span>
                    <span className="text-xs text-green-600">{post.engagement}% engajamento</span>
                  </div>
                </div>
                <div className="flex items-center justify-center w-8 h-8 bg-primary-100 rounded-full">
                  <span className="text-sm font-semibold text-primary-600">#{index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Metrics */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Métricas Detalhadas</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">2.4M</div>
            <div className="text-sm text-gray-600">Impressões Totais</div>
            <div className="text-xs text-green-600 mt-1">+15.3% vs mês anterior</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">156K</div>
            <div className="text-sm text-gray-600">Cliques Totais</div>
            <div className="text-xs text-green-600 mt-1">+8.7% vs mês anterior</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">6.5%</div>
            <div className="text-sm text-gray-600">CTR Médio</div>
            <div className="text-xs text-red-600 mt-1">-0.3% vs mês anterior</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;