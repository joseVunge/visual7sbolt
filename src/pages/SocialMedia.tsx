import React, { useState } from 'react';
import { 
  Instagram, 
  Facebook, 
  Linkedin, 
  Calendar, 
  Image, 
  Video, 
  Send,
  Eye,
  Heart,
  MessageCircle,
  Share
} from 'lucide-react';

const SocialMedia: React.FC = () => {
  const [postContent, setPostContent] = useState('');
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [scheduleDate, setScheduleDate] = useState('');

  const platforms = [
    { id: 'instagram', name: 'Instagram', icon: Instagram, color: 'bg-pink-500', connected: true },
    { id: 'facebook', name: 'Facebook', icon: Facebook, color: 'bg-blue-600', connected: true },
    { id: 'linkedin', name: 'LinkedIn', icon: Linkedin, color: 'bg-blue-700', connected: true },
    { id: 'tiktok', name: 'TikTok', icon: Video, color: 'bg-black', connected: false },
  ];

  const recentPosts = [
    {
      id: 1,
      content: 'Novo apartamento disponível no centro da cidade! 3 quartos, 2 banheiros...',
      platforms: ['instagram', 'facebook'],
      date: '2024-01-15',
      stats: {
        views: 1250,
        likes: 89,
        comments: 12,
        shares: 5
      },
      status: 'published'
    },
    {
      id: 2,
      content: 'Confira nossa seleção especial de veículos seminovos com ótimas condições...',
      platforms: ['linkedin', 'facebook'],
      date: '2024-01-14',
      stats: {
        views: 890,
        likes: 45,
        comments: 8,
        shares: 3
      },
      status: 'published'
    },
    {
      id: 3,
      content: 'Dicas importantes para quem está procurando o primeiro imóvel...',
      platforms: ['instagram'],
      date: '2024-01-16',
      stats: {
        views: 0,
        likes: 0,
        comments: 0,
        shares: 0
      },
      status: 'scheduled'
    }
  ];

  const handlePlatformToggle = (platformId: string) => {
    setSelectedPlatforms(prev => 
      prev.includes(platformId) 
        ? prev.filter(id => id !== platformId)
        : [...prev, platformId]
    );
  };

  const handlePublish = () => {
    if (postContent.trim() && selectedPlatforms.length > 0) {
      console.log('Publishing to platforms:', selectedPlatforms);
      console.log('Content:', postContent);
      console.log('Schedule:', scheduleDate);
      setPostContent('');
      setSelectedPlatforms([]);
      setScheduleDate('');
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Redes Sociais</h1>
        <p className="text-gray-600">Publique automaticamente em todas as suas redes sociais</p>
      </div>

      {/* Platform Status */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Status das Plataformas</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {platforms.map((platform) => (
            <div key={platform.id} className="flex items-center p-4 border rounded-lg">
              <div className={`${platform.color} p-2 rounded-lg mr-3`}>
                <platform.icon className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">{platform.name}</p>
                <p className={`text-sm ${platform.connected ? 'text-green-600' : 'text-red-600'}`}>
                  {platform.connected ? 'Conectado' : 'Desconectado'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Post Composer */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Nova Publicação</h2>
        
        <div className="space-y-4">
          {/* Platform Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Selecionar Plataformas
            </label>
            <div className="flex flex-wrap gap-3">
              {platforms.filter(p => p.connected).map((platform) => (
                <button
                  key={platform.id}
                  onClick={() => handlePlatformToggle(platform.id)}
                  className={`flex items-center px-4 py-2 rounded-lg border transition-all duration-200 ${
                    selectedPlatforms.includes(platform.id)
                      ? 'border-primary-500 bg-primary-50 text-primary-700'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <platform.icon className="h-4 w-4 mr-2" />
                  {platform.name}
                </button>
              ))}
            </div>
          </div>

          {/* Content Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Conteúdo da Publicação
            </label>
            <textarea
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="O que você gostaria de compartilhar?"
            />
            <p className="text-sm text-gray-500 mt-1">
              {postContent.length}/2000 caracteres
            </p>
          </div>

          {/* Media Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mídia (Opcional)
            </label>
            <div className="flex space-x-4">
              <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <Image className="h-4 w-4 mr-2" />
                Adicionar Imagem
              </button>
              <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <Video className="h-4 w-4 mr-2" />
                Adicionar Vídeo
              </button>
            </div>
          </div>

          {/* Schedule */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Agendar Publicação (Opcional)
            </label>
            <div className="flex items-center space-x-4">
              <Calendar className="h-5 w-5 text-gray-400" />
              <input
                type="datetime-local"
                value={scheduleDate}
                onChange={(e) => setScheduleDate(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-3">
            <button
              onClick={handlePublish}
              disabled={!postContent.trim() || selectedPlatforms.length === 0}
              className="inline-flex items-center px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              <Send className="h-4 w-4 mr-2" />
              {scheduleDate ? 'Agendar' : 'Publicar Agora'}
            </button>
          </div>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Publicações Recentes</h2>
        
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <div key={post.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <p className="text-gray-900 mb-2">{post.content}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                    <div className="flex items-center space-x-2">
                      {post.platforms.map((platformId) => {
                        const platform = platforms.find(p => p.id === platformId);
                        return platform ? (
                          <platform.icon key={platformId} className="h-4 w-4" />
                        ) : null;
                      })}
                    </div>
                  </div>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  post.status === 'published' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {post.status === 'published' ? 'Publicado' : 'Agendado'}
                </span>
              </div>
              
              {post.status === 'published' && (
                <div className="flex items-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Eye className="h-4 w-4 mr-1" />
                    <span>{post.stats.views}</span>
                  </div>
                  <div className="flex items-center">
                    <Heart className="h-4 w-4 mr-1" />
                    <span>{post.stats.likes}</span>
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="h-4 w-4 mr-1" />
                    <span>{post.stats.comments}</span>
                  </div>
                  <div className="flex items-center">
                    <Share className="h-4 w-4 mr-1" />
                    <span>{post.stats.shares}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;