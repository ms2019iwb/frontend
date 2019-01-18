class LocationService {
  getCurrentPosition() {
    return new Promise((resolve, reject) => {
      const options = {
        enableHighAccuracy: true, 
        maximumAge: 30000
      };
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  }

  getGeocodeFromLatLng(getLat, getLng) {
    return new Promise((resolve, reject) => {
      const NodeGeocoder = require('node-geocoder');
  
      const options = {
        provider: 'google',
        httpAdapter: 'https',
        apiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
        formatter: null
      };

      const geocoder = NodeGeocoder(options);

      geocoder.reverse({lat: getLat, lon: getLng})
        .then((res) => resolve(res[0]))
        .catch((err) => reject(err));
    });
  }
}

export default LocationService;