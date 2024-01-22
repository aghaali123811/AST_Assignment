import React, {useEffect, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  PermissionsAndroid,
} from 'react-native';
import styles from './styles';
import Header from '../../components/Headers/Header';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import Geocoding from 'react-native-geocoding';
import Geocoder from 'react-native-geocoding';
import ImagePath from '../../common/ImagePath';

function MapScreen(props) {
  const [region, setRegion] = useState({
    latitude: 49.2827,
    longitude: -123.1207,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [formatedAddress, setFormatedAddress] = useState('');
  const [hospitals, setHospitals] = useState([]);

  const API_KEY = 'AIzaSyBBeIbUHS5dgSAlaWYAcedmocJChGN-jK4';

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'App needs access to your location',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Location permission granted');
        getCurrentLocation();
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      async position => {
        console.log('position => ', position);
        setRegion({
          latitude: position?.coords?.latitude,
          longitude: position?.coords?.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
        setLatitude(position?.coords?.latitude);
        setLongitude(position?.coords?.longitude);
        // Reverse Geocoding
        try {
          Geocoder.init('AIzaSyBGp3FKxPmQdfxnhaYxbCzggV0m_bvd2ps');
          const geoResponse = await Geocoding.from(
            position?.coords?.latitude,
            position?.coords?.longitude,
          );
          const address =
            geoResponse.results[0]?.formatted_address || 'Location not found';
          setFormatedAddress(address);
        } catch (error) {
          console.error('Error in reverse geocoding:', error);
        }
      },
      error => {
        console.log('Error is:', error.message);
      },
      {
        enableHighAccuracy: false,
        timeout: 20000,
        maximumAge: 1000,
      },
    );
  };

  useEffect(() => {
    // ... (previous useEffect code)

    // Fetch nearby hospitals
    const fetchNearbyHospitals = async () => {
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${region.latitude},${region.longitude}&radius=5000&type=hospital&key=${API_KEY}`,
        );
        const data = await response.json();
        console.log(data.results);

        const hospitalMarkers = data.results.map(hospital => ({
          coordinate: {
            latitude: hospital.geometry.location.lat,
            longitude: hospital.geometry.location.lng,
          },
          title: hospital.name,
          description: hospital.vicinity,
        }));
        setHospitals(hospitalMarkers);
      } catch (error) {
        console.error('Error fetching nearby hospitals:', error);
      }
    };

    fetchNearbyHospitals();
  }, [region]);

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{flex: 1}}
        region={region}
        showsUserLocation={true}
        maxZoomLevel={200}
        initialRegion={region}
        showsMyLocationButton={true}>
        {hospitals.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}
            image={ImagePath.HospitalMarker}
            style={{width: 10, height: 10}}
          />
        ))}
      </MapView>
    </View>
  );
}

export default MapScreen;
