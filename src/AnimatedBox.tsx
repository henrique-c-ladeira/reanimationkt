import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Animated, {
  JumpingTransition,
  ZoomIn,
  ZoomOut,
} from 'react-native-reanimated';

type AnimatedBoxProps = {
  list: number[];
};

export const AnimatedBox: React.FC<AnimatedBoxProps> = ({list}) => (
  <View style={styles.container}>
    {list?.map((elem, index) => (
      <Animated.View
        key={elem}
        style={styles.box}
        entering={ZoomIn.delay(100 * index).duration(1000)}
        exiting={ZoomOut.delay(100 * index).duration(1000)}
        layout={JumpingTransition.delay(100 * index).duration(1000)}>
        <Text style={styles.text}>{elem}</Text>
      </Animated.View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {flexDirection: 'row', flexWrap: 'wrap', width: '100%'},
  box: {
    width: 50,
    height: 50,
    margin: 10,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
  },
});
