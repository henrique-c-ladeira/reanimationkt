import React, {useEffect} from 'react';
import {Pressable, StyleSheet} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

type Props = {
  selected?: boolean;
  onPress?: () => void;
};

export const AnimatedSelectable: React.FC<Props> = ({selected, onPress}) => {
  const scale = useSharedValue(1);

  useEffect(() => {
    scale.value = withSpring(selected ? 1.2 : 1, {
      damping: 5,
      stiffness: 200,
    });
  }, [selected, scale]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
      backgroundColor: selected ? 'rgb(50,80,255)' : 'rgb(30,30,30)',
    };
  });

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
