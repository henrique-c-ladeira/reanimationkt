/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Animated, {
  CurvedTransition,
  EntryExitTransition,
  FadeIn,
  FadeOut,
  JumpingTransition,
  SequencedTransition,
  SlideInDown,
  SlideOutDown,
  SlideOutLeft,
} from 'react-native-reanimated';

type AnimatedListProps = {
  array: number[];
};

export const AnimatedList: React.FC<AnimatedListProps> = ({array}) => (
  <View style={styles.container}>
    {array?.map((elem, index) => (
      <Animated.View
        style={styles.circle}
        key={elem}
        entering={SlideInDown.duration(500 + 100 * index)}
        layout={JumpingTransition.delay(100 * index).duration(1000)}
        exiting={SlideOutDown.duration(500 + 50 * index)}>
        <Text style={styles.text}>{elem}</Text>
      </Animated.View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {flexDirection: 'row', flexWrap: 'wrap', width: '100%'},
  circle: {
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
