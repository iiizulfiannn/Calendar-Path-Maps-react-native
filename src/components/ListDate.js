import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const ListDate = ({day, month, date, onPress}) => {
  return (
    <TouchableOpacity style={styles.containerDateItem} onPress={onPress}>
      <Text style={styles.text}>{day}</Text>
      <Text style={styles.text}>
        {month} {date}
      </Text>
    </TouchableOpacity>
  );
};

export default ListDate;

const styles = StyleSheet.create({
  containerDateItem: {
    marginRight: 45,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});
