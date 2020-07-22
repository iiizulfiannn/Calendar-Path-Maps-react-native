import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const ListDate = ({day, month, date, onPress}) => {
  return (
    <TouchableOpacity style={styles.containerDateItem} onPress={onPress}>
      <Text>{day}</Text>
      <Text>
        {month} {date}
      </Text>
    </TouchableOpacity>
  );
};

export default ListDate;

const styles = StyleSheet.create({
  containerDateItem: {
    marginRight: 40,
  },
});
