import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import IconBack from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import {gradient} from '../utils/colors';

const Header = ({type, title, onPress}) => {
  const Icon = () => {
    if (type === 'icon-back') {
      return (
        <TouchableOpacity style={styles.icon}>
          <IconBack
            name="arrowleft"
            size={26}
            color="white"
            onPress={onPress}
          />
        </TouchableOpacity>
      );
    }
  };

  return (
    <LinearGradient
      colors={gradient}
      start={{x: 0, y: 0.5}}
      end={{x: 1, y: 0.5}}
      style={styles.container}>
      {type && <Icon />}
      <Text style={styles.text}>{title}</Text>
    </LinearGradient>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 80,
    width: '100%',
    alignItems: 'center',
    paddingLeft: 25,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 22,
    color: 'white',
  },
  icon: {
    paddingRight: 25,
  },
});
