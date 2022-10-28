import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import Animated, {
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

type Props = {
  selected?: boolean;
  onPress?: () => void;
};

export const AnimatedSelectable: React.FC<Props> = ({selected, onPress}) => {
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      {scale: withSpring(selected ? 1.2 : 1, {damping: 5, stiffness: 200})},
    ],
    backgroundColor: withTiming(selected ? 'blue' : 'black', {
      duration: 1000,
    }),
  }));

  return (
    <Animated.View style={[styles.box, animatedStyles]}>
      <Pressable onPress={onPress} style={styles.pressable} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  box: {
    height: 80,
    width: 80,
  },
  pressable: {
    flex: 1,
  },
});
