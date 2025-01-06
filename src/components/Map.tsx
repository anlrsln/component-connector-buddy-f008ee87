import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import { useState } from 'react';

const Map = () => {
  const [token, setToken] = useState('');
  
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: token,
  });

  const center = {
    lat: 41.0082,
    lng: 29.0122
  };

  if (!token) {
    return (
      <div className="p-4 bg-yellow-50 rounded-lg">
        <p className="text-sm text-yellow-800 mb-2">
          Please enter your Google Maps API key to view the map. You can get it from{' '}
          <a 
            href="https://console.cloud.google.com/google/maps-apis"
            target="_blank" 
            rel="noopener noreferrer"
            className="underline"
          >
            Google Cloud Console
          </a>
        </p>
        <input
          type="text"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          placeholder="Enter your Google Maps API key"
          className="w-full p-2 border rounded"
        />
      </div>
    );
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-[400px] rounded-lg overflow-hidden">
      <GoogleMap
        zoom={12}
        center={center}
        mapContainerClassName="w-full h-full"
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export default Map;