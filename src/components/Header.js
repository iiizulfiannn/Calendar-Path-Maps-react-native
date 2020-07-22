import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import IconBack from 'react-native-vector-icons/AntDesign';

const Header = ({type, title, onPress}) => {
  const Icon = () => {
    if (type === 'icon-back') {
      return (
        <TouchableOpacity style={styles.icon}>
          <IconBack
            name="arrowleft"
            size={26}
            color="black"
            onPress={onPress}
          />
        </TouchableOpacity>
      );
    }
  };

  return (
    <View style={styles.container}>
      {type && <Icon />}
      <Text style={styles.text}>{title}</Text>
    </View>
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
    color: 'black',
  },
  icon: {
    paddingRight: 25,
  },
});
