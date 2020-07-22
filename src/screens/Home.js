import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Header} from '../components';

const Home = ({navigation}) => {
  return (
    <>
      <Header title="Home" />
      <View style={styles.container}>
        <Button
          title="Calendar"
          onPress={() => navigation.navigate('WeeklyCalendar')}
        />
        <Button title="Maps" onPress={() => navigation.navigate('PathMaps')} />
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
});
