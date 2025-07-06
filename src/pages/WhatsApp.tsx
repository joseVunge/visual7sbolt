import React, { useState } from 'react';
import { Send, Users, MessageSquare, Clock, CheckCircle, Eye } from 'lucide-react';

const WhatsApp: React.FC = () => {
  const [message, setMessage] = useState('');
  const [selectedGroups, setSelectedGroups] = useState<string[]>([]);

  const groups = [
    { id: '1', name: 'Clientes VIP', members: 45, status: 'active' },
    { id: '2', name: 'Interessados Imóveis', members: 128, status: 'active' },
    { id: '3', name: 'Compradores Veículos', members: 89, status: 'active' },
    { id: '4', name: 'Leads Qualificados', members: 67, status: 'active' },
  ];

  const recentCampaigns = [
    {
      id: 1,
      title: 'Promoção Apartamentos Centro',
      sent: 245,
      delivered: 238,
      read: 156,
      responses: 23,
      date: '2024-01-15',
      status: 'completed'
    },
    {
      id: 2,
      title: 'Novos Veículos Disponíveis',
      sent: 189,
      delivered: 185,
      read: 98,
      responses: 15,
      date: '2024-01-14',
      status: 'completed'
    },
    {
      id: 3,
      title: 'Convite Evento Imobiliário',
      sent: 156,
      delivered: 150,
      read: 45,
      responses: 8,
      date: '2024-01-13',
      status: 'in_progress'
    }
  ];

  const handleGroupToggle = (groupId: string) => {
    setSelectedGroups(prev => 
      prev.includes(groupId) 
        ? prev.filter(id => id !== groupId)
        : [...prev, groupId]
    );
  };

  const handleSendMessage = () => {
    if (message.trim() && selectedGroups.length > 0) {
      // Simulate sending message
      console.log('Sending message to groups:', selectedGroups);
      console.log('Message:', message);
      setMessage('');
      setSelectedGroups([]);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">WhatsApp Marketing</h1>
        <p className="text-gray-600">Envie mensagens em massa e gerencie campanhas</p>
      </div>

      {/* Message Composer */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Nova Mensagem em Massa</h2>
        
        <div className="space-y-4">
          {/* Group Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Selecionar Grupos
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {groups.map((group) => (
                <div
                  key={group.id}
                  className={`p-3 border rounded-lg cursor-pointer transition-all duration-200 ${
                    selectedGroups.includes(group.id)
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                  onClick={() => handleGroupToggle(group.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="font-medium text-gray-900">{group.name}</span>
                    </div>
                    <span className="text-sm text-gray-500">{group.members} membros</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Message Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mensagem
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Digite sua mensagem aqui..."
            />
            <p className="text-sm text-gray-500 mt-1">
              {message.length}/1000 caracteres
            </p>
          </div>

          {/* Send Button */}
          <div className="flex justify-end">
            <button
              onClick={handleSendMessage}
              disabled={!message.trim() || selectedGroups.length === 0}
              className="inline-flex items-center px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              <Send className="h-4 w-4 mr-2" />
              Enviar Mensagem
            </button>
          </div>
        </div>
      </div>

      {/* Campaign Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="bg-blue-500 p-3 rounded-lg">
              <Send className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Mensagens Enviadas</p>
              <p className="text-2xl font-semibold text-gray-900">2,847</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="bg-green-500 p-3 rounded-lg">
              <CheckCircle className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Entregues</p>
              <p className="text-2xl font-semibold text-gray-900">2,735</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="bg-purple-500 p-3 rounded-lg">
              <Eye className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Visualizadas</p>
              <p className="text-2xl font-semibold text-gray-900">1,892</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="bg-orange-500 p-3 rounded-lg">
              <MessageSquare className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Respostas</p>
              <p className="text-2xl font-semibold text-gray-900">234</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Campaigns */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Campanhas Recentes</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Campanha
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Enviadas
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Entregues
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Lidas
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Respostas
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Data
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentCampaigns.map((campaign) => (
                <tr key={campaign.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{campaign.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {campaign.sent}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {campaign.delivered}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {campaign.read}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {campaign.responses}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(campaign.date).toLocaleDateString('pt-BR')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      campaign.status === 'completed'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {campaign.status === 'completed' ? 'Concluída' : 'Em Andamento'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WhatsApp;