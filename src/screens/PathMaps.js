import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import IconOrigin from 'react-native-vector-icons/FontAwesome5';
import IconDestination from 'react-native-vector-icons/Fontisto';
import MapDirections from 'react-native-maps-directions';

import {Header} from '../components';

const PathMaps = ({navigation}) => {
  const coordOrigin = {
    latitude: -0.0162365,
    longitude: 109.3157993,
  };

  const coordDestination = {
    latitude: -0.0080209,
    longitude: 109.3101039,
  };

  // not yet: DotEnv
  const API_KEYS = 'AIzaSyCNgXt9OKU9IW-2nwp6M6dop7rwfT4uCcI';

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
          <MapDirections
            origin={coordOrigin}
            destination={coordDestination}
            apikey={API_KEYS}
            strokeWidth={3}
            strokeColor={[
              '#7F0000',
              'dodgerblue',
              '#B24112',
              '#E5845C',
              '#238C23',
              '#7F0000',
            ]}
            onError={(errorMessage) => {
              console.log(errorMessage);
            }}
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
