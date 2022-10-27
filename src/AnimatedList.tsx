/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Animated, {
  CurvedTransition,
  EntryExitTransition,
  FadeIn,
  FadeOut,
  JumpingTransition,
  RotateInUpRight,
  RotateOutDownLeft,
  SequencedTransition,
  SlideInDown,
  SlideOutDown,
  SlideOutLeft,
  ZoomInRotate,
  ZoomOutRotate,
} from 'react-native-reanimated';

type AnimatedListProps = {
  array?: any[];
};

export const AnimatedList: React.FC<AnimatedListProps> = ({array}) => (
  <View style={styles.container}>
    {array?.map((elem, index) => (
      <Animated.View
        style={styles.circle}
        key={elem.id}
        entering={ZoomInRotate.delay(100 * index).duration(600)}
        layout={CurvedTransition.delay(100 * index).duration(500)}
        exiting={ZoomOutRotate.delay(50 * index).duration(300)}>
        <Image source={{uri: elem.image}} style={styles.image} />
        <Text style={styles.text}>{elem.name}</Text>
      </Animated.View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-around',
  },
  circle: {
    width: 80,
    height: 80,
    margin: 10,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 12,
    color: 'white',
  },
  image: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
});
