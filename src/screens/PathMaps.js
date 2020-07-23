import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Polyline} from 'react-native-maps';
import IconOrigin from 'react-native-vector-icons/FontAwesome5';
import IconDestination from 'react-native-vector-icons/Fontisto';

import {Header} from '../components';

const PathMaps = ({navigation}) => {
  const coordOrigin = {
    latitude: -0.017417,
    longitude: 109.310531,
  };

  const coordDestination = {
    latitude: -0.0080209,
    longitude: 109.3101039,
  };

  return (
    <>
      <Header
        title="Static path on the map"
        type="icon-back"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: coordOrigin.latitude,
            longitude: coordOrigin.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
          <Marker coordinate={coordOrigin}>
            <IconOrigin name="map-marker-alt" color="black" size={30} />
          </Marker>
          <Marker coordinate={coordDestination}>
            <IconDestination name="flag" color="black" size={30} />
          </Marker>
          <Polyline
            coordinates={[
              coordOrigin,
              {latitude: -0.017942, longitude: 109.309077},
              {latitude: -0.017827, longitude: 109.308807},
              {latitude: -0.017289, longitude: 109.308824},
              {latitude: -0.014205, longitude: 109.309004},
              {latitude: -0.01315, longitude: 109.30908},
              {latitude: -0.011783, longitude: 109.309295},
              {latitude: -0.009463, longitude: 109.309984},
              {latitude: -0.008124, longitude: 109.310436},
              coordDestination,
            ]}
            strokeColor="#3498db"
            strokeWidth={6}
            lineJoin="round"
          />
        </MapView>
      </View>
    </>
  );
};

export default PathMaps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
