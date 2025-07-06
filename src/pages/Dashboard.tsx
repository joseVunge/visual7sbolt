import React from 'react';
import { 
  TrendingUp, 
  Users, 
  MessageCircle, 
  Share2, 
  Building, 
  Car,
  Eye,
  Heart,
  Send
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const Dashboard: React.FC = () => {
  const stats = [
    { name: 'Imóveis Ativos', value: '127', change: '+12%', icon: Building, color: 'bg-blue-500' },
    { name: 'Veículos Ativos', value: '89', change: '+8%', icon: Car, color: 'bg-green-500' },
    { name: 'Mensagens Enviadas', value: '2,847', change: '+23%', icon: MessageCircle, color: 'bg-purple-500' },
    { name: 'Publicações Ativas', value: '156', change: '+15%', icon: Share2, color: 'bg-orange-500' },
  ];

  const monthlyData = [
    { name: 'Jan', vendas: 45, leads: 120 },
    { name: 'Fev', vendas: 52, leads: 135 },
    { name: 'Mar', vendas: 48, leads: 128 },
    { name: 'Abr', vendas: 61, leads: 142 },
    { name: 'Mai', vendas: 55, leads: 138 },
    { name: 'Jun', vendas: 67, leads: 155 },
  ];

  const socialMediaData = [
    { name: 'Instagram', value: 35, color: '#E4405F' },
    { name: 'Facebook', value: 28, color: '#1877F2' },
    { name: 'LinkedIn', value: 20, color: '#0A66C2' },
    { name: 'TikTok', value: 17, color: '#000000' },
  ];

  const recentActivities = [
    { type: 'message', content: 'Nova mensagem em massa enviada para 245 contatos', time: '2 min atrás', icon: Send },
    { type: 'social', content: 'Publicação automática no Instagram obteve 127 curtidas', time: '15 min atrás', icon: Heart },
    { type: 'view', content: '23 novas visualizações nas publicações do LinkedIn', time: '1 hora atrás', icon: Eye },
    { type: 'lead', content: 'Novo lead interessado em imóvel no Centro', time: '2 horas atrás', icon: Users },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Visão geral da sua plataforma de vendas e marketing</p>
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
        {/* Monthly Performance */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Mensal</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="vendas" fill="#3B82F6" name="Vendas" />
              <Bar dataKey="leads" fill="#10B981" name="Leads" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Social Media Distribution */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Distribuição Redes Sociais</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={socialMediaData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {socialMediaData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Atividades Recentes</h3>
        <div className="space-y-4">
          {recentActivities.map((activity, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                  <activity.icon className="w-4 h-4 text-primary-600" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900">{activity.content}</p>
                <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Ações Rápidas</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-all duration-200 text-center">
            <MessageCircle className="h-8 w-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-700">Enviar Mensagem em Massa</p>
          </button>
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-all duration-200 text-center">
            <Share2 className="h-8 w-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-700">Publicar nas Redes Sociais</p>
          </button>
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-all duration-200 text-center">
            <TrendingUp className="h-8 w-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-700">Ver Analytics Detalhado</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;