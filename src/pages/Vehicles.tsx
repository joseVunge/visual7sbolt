import React, { useState } from 'react';
import { Plus, Search, Filter, Calendar, Gauge, Fuel, Edit, Trash2 } from 'lucide-react';

const Vehicles: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const vehicles = [
    {
      id: 1,
      title: 'Honda Civic 2022',
      brand: 'Honda',
      model: 'Civic',
      year: 2022,
      price: 'R$ 95.000',
      mileage: '15.000 km',
      fuel: 'Flex',
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'Disponível'
    },
    {
      id: 2,
      title: 'Toyota Corolla 2021',
      brand: 'Toyota',
      model: 'Corolla',
      year: 2021,
      price: 'R$ 85.000',
      mileage: '25.000 km',
      fuel: 'Flex',
      image: 'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'Vendido'
    },
    {
      id: 3,
      title: 'BMW X3 2023',
      brand: 'BMW',
      model: 'X3',
      year: 2023,
      price: 'R$ 280.000',
      mileage: '5.000 km',
      fuel: 'Gasolina',
      image: 'https://images.pexels.com/photos/3802503/pexels-photo-3802503.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'Disponível'
    }
  ];

  const filteredVehicles = vehicles.filter(vehicle => {
    const matchesSearch = vehicle.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vehicle.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || vehicle.brand.toLowerCase() === filterType.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Veículos</h1>
            <p className="text-gray-600">Gerencie seu estoque de veículos</p>
          </div>
          <button className="mt-4 sm:mt-0 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-200">
            <Plus className="h-4 w-4 mr-2" />
            Adicionar Veículo
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Buscar veículos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-400" />
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="all">Todas as Marcas</option>
              <option value="honda">Honda</option>
              <option value="toyota">Toyota</option>
              <option value="bmw">BMW</option>
            </select>
          </div>
        </div>
      </div>

      {/* Vehicles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVehicles.map((vehicle) => (
          <div key={vehicle.id} className="bg-white rounded-lg shadow-sm overflow-hidden card-hover">
            <div className="relative">
              <img
                src={vehicle.image}
                alt={vehicle.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  vehicle.status === 'Disponível' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {vehicle.status}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900">{vehicle.title}</h3>
                <div className="flex space-x-2">
                  <button className="p-1 text-gray-400 hover:text-primary-600 transition-colors duration-200">
                    <Edit className="h-4 w-4" />
                  </button>
                  <button className="p-1 text-gray-400 hover:text-red-600 transition-colors duration-200">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{vehicle.year}</span>
                  </div>
                  <div className="flex items-center">
                    <Gauge className="h-4 w-4 mr-1" />
                    <span>{vehicle.mileage}</span>
                  </div>
                  <div className="flex items-center">
                    <Fuel className="h-4 w-4 mr-1" />
                    <span>{vehicle.fuel}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary-600">{vehicle.price}</span>
                <span className="text-sm text-gray-500">{vehicle.brand}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredVehicles.length === 0 && (
        <div className="bg-white rounded-lg shadow-sm p-12 text-center">
          <div className="text-gray-400 mb-4">
            <Car className="h-12 w-12 mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum veículo encontrado</h3>
          <p className="text-gray-600">Tente ajustar os filtros ou adicione novos veículos.</p>
        </div>
      )}
    </div>
  );
};

export default Vehicles;