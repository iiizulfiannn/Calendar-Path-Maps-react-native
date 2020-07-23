import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Header, ListDate, ListTime} from '../components';
import LinearGradient from 'react-native-linear-gradient';
import {gradient} from '../utils/colors';

const WeeklyCalendar = ({navigation}) => {
  const [data, setData] = useState([]);

  const formats = ['AM', 'PM'];
  const times = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const displayListItem = formats.map((format) => {
    return times.map((time) => {
      const res = `${time} ${format}`;
      return (
        <ListTime
          key={`${time} ${format}`}
          time={`${time} ${format}`}
          resultTime={`${time} ${format} - ${
            time === 12
              ? `${1} ${format === 'AM' ? 'PM' : 'AM'}`
              : `${time + 1} ${format}`
          }`}
          isActive={data.find((val) => val === res)}
          onPress={() => handleClick(res)}
        />
      );
    });
  });

  const handleClick = (res) => {
    const item = data.find((item) => item === res);
    if (!item) {
      setData((oldData) => [...oldData, res]);
    } else {
      setData(data.filter((val) => val !== res));
    }
  };

  return (
    <>
      <Header
        type="icon-back"
        title="Pick a Time"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <LinearGradient
          colors={gradient}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}
          style={styles.containerDate}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <ListDate day="Tomorrow" month="Aug" date="19" />
            <ListDate day="Mon" month="Aug" date="20" />
            <ListDate day="Tue" month="Aug" date="21" />
            <ListDate day="Wed" month="Aug" date="22" />
            <ListDate day="Thu" month="Aug" date="23" />
            <ListDate day="Fri" month="Aug" date="24" />
            <ListDate day="Sat" month="Aug" date="25" />
          </ScrollView>
        </LinearGradient>
        <View style={styles.containerTime}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {displayListItem}
          </ScrollView>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('PathMaps')}>
          <LinearGradient
            colors={gradient}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}
            style={styles.btn}>
            <Text style={styles.text}>Choose Location</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default WeeklyCalendar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerDate: {
    flexDirection: 'row',
    height: 70,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingLeft: 20,
  },
  containerTime: {
    flex: 1,
    padding: 20,
    backgroundColor: '#efefef',
  },
  footer: {
    height: 65,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  btn: {
    width: 250,
    height: 40,
    borderRadius: 20 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
});
