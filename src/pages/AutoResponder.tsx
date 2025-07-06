import React, { useState } from 'react';
import { Plus, Bot, MessageSquare, Clock, Settings, Play, Pause, Edit, Trash2 } from 'lucide-react';

const AutoResponder: React.FC = () => {
  const [activeTab, setActiveTab] = useState('templates');

  const templates = [
    {
      id: 1,
      name: 'Boas-vindas Imóveis',
      trigger: 'palavra-chave: imóvel',
      message: 'Olá! Obrigado pelo interesse em nossos imóveis. Em breve um de nossos consultores entrará em contato.',
      platform: 'whatsapp',
      status: 'active',
      responses: 156,
      lastUsed: '2024-01-15'
    },
    {
      id: 2,
      name: 'Informações Veículos',
      trigger: 'palavra-chave: carro, veículo',
      message: 'Temos uma excelente seleção de veículos! Qual tipo de veículo você está procurando?',
      platform: 'whatsapp',
      status: 'active',
      responses: 89,
      lastUsed: '2024-01-14'
    },
    {
      id: 3,
      name: 'Horário de Atendimento',
      trigger: 'fora do horário',
      message: 'Nosso horário de atendimento é de segunda a sexta, das 8h às 18h. Deixe sua mensagem que retornaremos em breve!',
      platform: 'whatsapp',
      status: 'active',
      responses: 234,
      lastUsed: '2024-01-15'
    }
  ];

  const automationRules = [
    {
      id: 1,
      name: 'Follow-up Leads Imóveis',
      condition: 'Sem resposta há 3 dias',
      action: 'Enviar mensagem de follow-up',
      frequency: 'Uma vez',
      status: 'active',
      triggered: 45
    },
    {
      id: 2,
      name: 'Lembretes de Visita',
      condition: 'Visita agendada em 24h',
      action: 'Enviar lembrete',
      frequency: 'Diário',
      status: 'active',
      triggered: 23
    },
    {
      id: 3,
      name: 'Promoções Mensais',
      condition: 'Todo dia 1º do mês',
      action: 'Enviar ofertas especiais',
      frequency: 'Mensal',
      status: 'paused',
      triggered: 12
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Auto Resposta</h1>
        <p className="text-gray-600">Configure respostas automáticas e regras de automação</p>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('templates')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'templates'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <MessageSquare className="h-4 w-4 inline mr-2" />
              Templates de Resposta
            </button>
            <button
              onClick={() => setActiveTab('automation')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'automation'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Bot className="h-4 w-4 inline mr-2" />
              Regras de Automação
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'templates' && (
            <div className="space-y-6">
              {/* Templates Header */}
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-900">Templates de Resposta</h2>
                <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-200">
                  <Plus className="h-4 w-4 mr-2" />
                  Novo Template
                </button>
              </div>

              {/* Templates List */}
              <div className="space-y-4">
                {templates.map((template) => (
                  <div key={template.id} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{template.name}</h3>
                          <span className={`ml-3 inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            template.status === 'active' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {template.status === 'active' ? 'Ativo' : 'Inativo'}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          <strong>Gatilho:</strong> {template.trigger}
                        </p>
                        <p className="text-gray-700 bg-gray-50 p-3 rounded-lg">
                          {template.message}
                        </p>
                      </div>
                      <div className="flex space-x-2 ml-4">
                        <button className="p-2 text-gray-400 hover:text-primary-600 transition-colors duration-200">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-green-600 transition-colors duration-200">
                          {template.status === 'active' ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                        </button>
                        <button className="p-2 text-gray-400 hover:text-red-600 transition-colors duration-200">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <span>{template.responses} respostas enviadas</span>
                        <span>Último uso: {new Date(template.lastUsed).toLocaleDateString('pt-BR')}</span>
                      </div>
                      <span className="capitalize">{template.platform}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'automation' && (
            <div className="space-y-6">
              {/* Automation Header */}
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-900">Regras de Automação</h2>
                <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-200">
                  <Plus className="h-4 w-4 mr-2" />
                  Nova Regra
                </button>
              </div>

              {/* Automation Rules */}
              <div className="space-y-4">
                {automationRules.map((rule) => (
                  <div key={rule.id} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{rule.name}</h3>
                          <span className={`ml-3 inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            rule.status === 'active' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {rule.status === 'active' ? 'Ativo' : 'Pausado'}
                          </span>
                        </div>
                        <div className="space-y-2 text-sm text-gray-600">
                          <p><strong>Condição:</strong> {rule.condition}</p>
                          <p><strong>Ação:</strong> {rule.action}</p>
                          <p><strong>Frequência:</strong> {rule.frequency}</p>
                        </div>
                      </div>
                      <div className="flex space-x-2 ml-4">
                        <button className="p-2 text-gray-400 hover:text-primary-600 transition-colors duration-200">
                          <Settings className="h-4 w-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-green-600 transition-colors duration-200">
                          {rule.status === 'active' ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                        </button>
                        <button className="p-2 text-gray-400 hover:text-red-600 transition-colors duration-200">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{rule.triggered} vezes acionada</span>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>Última execução: há 2 horas</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="bg-blue-500 p-3 rounded-lg">
              <MessageSquare className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Templates Ativos</p>
              <p className="text-2xl font-semibold text-gray-900">
                {templates.filter(t => t.status === 'active').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="bg-green-500 p-3 rounded-lg">
              <Bot className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Regras Ativas</p>
              <p className="text-2xl font-semibold text-gray-900">
                {automationRules.filter(r => r.status === 'active').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="bg-purple-500 p-3 rounded-lg">
              <MessageSquare className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Respostas Hoje</p>
              <p className="text-2xl font-semibold text-gray-900">47</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="bg-orange-500 p-3 rounded-lg">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Tempo Médio</p>
              <p className="text-2xl font-semibold text-gray-900">2.3s</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoResponder;