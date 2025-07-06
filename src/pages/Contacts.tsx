import React, { useState } from 'react';
import { Plus, Search, Filter, Upload, Download, Edit, Trash2, Phone, Mail, MapPin } from 'lucide-react';

const Contacts: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterGroup, setFilterGroup] = useState('all');

  const contacts = [
    {
      id: 1,
      name: 'Carlos Mendes',
      email: 'carlos@email.com',
      phone: '+244 923456789',
      location: 'São Paulo, AO',
      group: 'leads',
      tags: ['Imóvel', 'Centro'],
      lastContact: '2024-01-15',
      status: 'active'
    },
    {
      id: 2,
      name: 'Fernanda Lima',
      email: 'fernanda@email.com',
      phone: '+244 912345678',
      location: 'Rua Nossa Senhora da Muxima, 123',
      group: 'clients',
      tags: ['Veículo', 'Seminovo'],
      lastContact: '2024-01-14',
      status: 'active'
    },
    {
      id: 3,
      name: 'Roberto Santos',
      email: 'roberto@email.com',
      phone: '+244 911223344',
      location: 'Belo Horizonte, MG',
      group: 'prospects',
      tags: ['Casa', 'Jardins'],
      lastContact: '2024-01-13',
      status: 'inactive'
    },
    {
      id: 4,
      name: 'Juliana Costa',
      email: 'juliana@email.com',
      phone: '+244 933445566',
      location: 'Brasília, DF',
      group: 'leads',
      tags: ['Apartamento', 'Luxo'],
      lastContact: '2024-01-12',
      status: 'active'
    }
  ];

  const groups = {
    leads: { label: 'Leads', color: 'bg-yellow-100 text-yellow-800', count: 0 },
    prospects: { label: 'Prospects', color: 'bg-blue-100 text-blue-800', count: 0 },
    clients: { label: 'Clientes', color: 'bg-green-100 text-green-800', count: 0 }
  };

  // Count contacts by group
  Object.keys(groups).forEach(key => {
    groups[key as keyof typeof groups].count = contacts.filter(c => c.group === key).length;
  });

  const filteredContacts = contacts.filter(contact => {
    const matchesSearch = contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contact.phone.includes(searchTerm);
    const matchesGroup = filterGroup === 'all' || contact.group === filterGroup;
    return matchesSearch && matchesGroup;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Contatos</h1>
            <p className="text-gray-600">Gerencie sua lista de contatos e leads</p>
          </div>
          <div className="mt-4 sm:mt-0 flex space-x-3">
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200">
              <Upload className="h-4 w-4 mr-2" />
              Importar
            </button>
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200">
              <Download className="h-4 w-4 mr-2" />
              Exportar
            </button>
            <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-200">
              <Plus className="h-4 w-4 mr-2" />
              Adicionar Contato
            </button>
          </div>
        </div>
      </div>

      {/* Group Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(groups).map(([key, group]) => (
          <div key={key} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{group.label}</p>
                <p className="text-2xl font-semibold text-gray-900">{group.count}</p>
              </div>
              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${group.color}`}>
                {group.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Buscar contatos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-400" />
            <select
              value={filterGroup}
              onChange={(e) => setFilterGroup(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="all">Todos os Grupos</option>
              <option value="leads">Leads</option>
              <option value="prospects">Prospects</option>
              <option value="clients">Clientes</option>
            </select>
          </div>
        </div>
      </div>

      {/* Contacts Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contato
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Informações
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Grupo
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tags
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Último Contato
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredContacts.map((contact) => (
                <tr key={contact.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{contact.name}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="space-y-1">
                      <div className="flex items-center text-sm text-gray-600">
                        <Mail className="h-3 w-3 mr-1" />
                        {contact.email}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Phone className="h-3 w-3 mr-1" />
                        {contact.phone}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-3 w-3 mr-1" />
                        {contact.location}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      groups[contact.group as keyof typeof groups].color
                    }`}>
                      {groups[contact.group as keyof typeof groups].label}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-wrap gap-1">
                      {contact.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-flex px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(contact.lastContact).toLocaleDateString('pt-BR')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      contact.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {contact.status === 'active' ? 'Ativo' : 'Inativo'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-primary-600 hover:text-primary-900 transition-colors duration-200">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-900 transition-colors duration-200">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {filteredContacts.length === 0 && (
        <div className="bg-white rounded-lg shadow-sm p-12 text-center">
          <div className="text-gray-400 mb-4">
            <Phone className="h-12 w-12 mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum contato encontrado</h3>
          <p className="text-gray-600">Tente ajustar os filtros ou adicione novos contatos.</p>
        </div>
      )}
    </div>
  );
};

export default Contacts;