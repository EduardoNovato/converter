import { useState } from 'react';

interface Props {
  platform: 'youtube' | 'facebook' | 'tiktok';
}

export default function VideoConverter({ platform }: Props) {
  const [url, setUrl] = useState('');
  const [format, setFormat] = useState('mp3');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de conversión
    console.log(`Converting ${platform} video: ${url} to ${format}`);
  };

  const getPlatformColor = () => {
    switch (platform) {
      case 'youtube':
        return 'bg-red-600 hover:bg-red-700 focus:ring-red-500';
      case 'facebook':
        return 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500';
      case 'tiktok':
        return 'bg-black hover:bg-gray-900 focus:ring-gray-500';
      default:
        return 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500';
    }
  };

  const isUrlValid = url.trim().length > 0;

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-xl shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label htmlFor="url" className="block text-lg font-medium text-gray-700 mb-2">
            URL del video
          </label>
          <input
            type="url"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder={`Ingresa la URL del video de ${platform}`}
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors duration-200"
            required
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700 mb-4">
            Formato de conversión
          </label>
          <div className="flex space-x-6">
            <label className="flex items-center space-x-3 text-lg">
              <input
                type="radio"
                value="mp3"
                checked={format === 'mp3'}
                onChange={(e) => setFormat(e.target.value)}
                className="w-5 h-5 text-indigo-600 focus:ring-indigo-500"
              />
              <span>MP3</span>
            </label>
            <label className="flex items-center space-x-3 text-lg">
              <input
                type="radio"
                value="mp4"
                checked={format === 'mp4'}
                onChange={(e) => setFormat(e.target.value)}
                className="w-5 h-5 text-indigo-600 focus:ring-indigo-500"
              />
              <span>MP4</span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          disabled={!isUrlValid}
          className={`w-full py-4 px-6 text-lg font-semibold text-white rounded-lg shadow-md focus:outline-none focus:ring-4 transition-colors duration-200 ${
            isUrlValid 
              ? getPlatformColor()
              : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          Convertir Video
        </button>
      </form>
    </div>
  );
}