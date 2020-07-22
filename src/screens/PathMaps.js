import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header} from '../components';

const PathMaps = ({navigation}) => {
  return (
    <>
      <Header
        title="Static path on the map"
        type="icon-back"
        onPress={() => navigation.goBack()}
      />
      <View>
        <Text>PathMaps</Text>
      </View>
    </>
  );
};

export default PathMaps;

const styles = StyleSheet.create({});
