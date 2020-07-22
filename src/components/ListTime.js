import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const ListTime = ({time, resultTime, onPress, isActive}) => {
  return (
    <TouchableOpacity style={styles.timeItem} onPress={onPress}>
      <View style={styles.timeRow}>
        <View style={styles.timeWrap}>
          <Text style={styles.timeText}>{time}</Text>
        </View>
        <View style={styles.timeDivider} />
      </View>
      <View style={[styles.timeRow, styles.timeRowContent]}>
        {isActive && (
          <>
            <View style={styles.timeWrap} />
            <View style={styles.timeContent}>
              <Text>{resultTime}</Text>
            </View>
          </>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ListTime;

const styles = StyleSheet.create({
  timeRow: {
    flexDirection: 'row',
  },
  timeRowContent: {
    height: 50,
  },
  timeDivider: {
    flex: 1,
    height: 2,
    alignSelf: 'center',
    backgroundColor: '#bbb',
    borderRadius: 1,
  },
  timeWrap: {
    width: 50,
  },
  timeText: {
    color: '#bbb',
    fontWeight: 'bold',
  },
  timeContent: {
    flex: 1,
    borderLeftColor: 'blue',
    borderLeftWidth: 4,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginVertical: 2,
    backgroundColor: 'white',
    borderRadius: 2,
  },
});
