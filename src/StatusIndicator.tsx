import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

export type StatusIndicatorProps = {
  status: 'idle' | 'pending' | 'success' | 'error';
};

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({status}) => {
  const color = useSharedValue('black');
  const scale = useSharedValue(1);
  const translate = useSharedValue(0);

  useEffect(() => {
    if (status === 'idle') {
      translate.value = withTiming(0, {duration: 300});
      scale.value = withTiming(1, {duration: 300});
      color.value = withTiming('black', {duration: 1000});
    }

    if (status === 'pending') {
      translate.value = withTiming(0, {duration: 300});
      scale.value = withRepeat(withTiming(0.8, {duration: 1000}), -1, true);
      color.value = 'black';
      color.value = withRepeat(withTiming('grey', {duration: 1000}), -1, true);
    }

    if (status === 'error') {
      translate.value = withTiming(5, {duration: 100}, () => {
        translate.value = withSpring(0, {
          damping: 10,
          stiffness: 500,
        });
      });
      scale.value = withTiming(1, {duration: 300});
      color.value = withTiming('red', {duration: 100});
    }

    if (status === 'success') {
      translate.value = withTiming(0, {duration: 300});
      scale.value = withTiming(1.2, {duration: 300}, () => {
        scale.value = withTiming(1, {duration: 300});
      });

      color.value = withTiming('green', {duration: 100});
    }
  }, [color, status, scale, translate]);

  const animatedStyle = useAnimatedStyle(() => ({
    backgroundColor: color.value,
    transform: [{scale: scale.value}, {translateX: translate.value}],
  }));

  return <Animated.View style={[styles.circle, animatedStyle]} />;
};

const styles = StyleSheet.create({
  circle: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
});
