// AnimatedCircles.js
// math calculated by Chat GPT

import Colors from "../../assets/colors";
import React, { useState, useEffect } from "react";
import { View, Animated, Easing, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const AnimatedCircles = ({ numCircles = 10, circleSize = 50 }) => {
  const [animations] = useState(
    Array.from({ length: numCircles }, () => new Animated.Value(0))
  );
  const [circlePositions, setCirclePositions] = useState(
    Array.from({ length: numCircles }, () => ({
      x: Math.random() * (width - circleSize),
      y: Math.random() * (height - circleSize),
    }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const newCirclePositions = circlePositions.map(() => ({
        x: Math.random() * (width - circleSize),
        y: Math.random() * (height - circleSize),
      }));
      setCirclePositions(newCirclePositions);
    }, 1000);

    return () => clearInterval(interval);
  }, [circlePositions]);

  useEffect(() => {
    const animateCircles = () => {
      const timingConfig = {
        toValue: 1,
        duration: 1000,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      };

      const reverseConfig = {
        toValue: 0,
        duration: 1000,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      };

      const sequence = animations.map((animation) =>
        Animated.sequence([
          Animated.timing(animation, timingConfig),
          Animated.timing(animation, reverseConfig),
        ])
      );

      Animated.loop(Animated.parallel(sequence)).start();
    };

    animateCircles();

    return () => {
      animations.forEach((animation) => animation.removeAllListeners());
    };
  }, [animations]);

  return (
    <View style={styles.container}>
      {circlePositions.map((position, index) => {
        const animatedStyle = {
          opacity: animations[index].interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 1, 0],
          }),
          transform: [
            {
              scale: animations[index].interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [1, 1.5, 1],
              }),
            },
          ],
        };

        return (
          <Animated.View
            key={index}
            style={[
              styles.circle,
              animatedStyle,
              {
                width: circleSize,
                height: circleSize,
                borderRadius: circleSize / 2,
                left: position.x,
                top: position.y,
              },
            ]}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  circle: {
    position: "absolute",
    backgroundColor: Colors.loginCircles,
  },
});

export default AnimatedCircles;
