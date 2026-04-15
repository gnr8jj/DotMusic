import { Home, Library, Magnifier, ShareCircle } from '@solar-icons/react-native/Linear';
import { Tabs } from "expo-router";
import React, { useEffect, useRef } from "react";
import { Animated } from 'react-native';
import { Colors } from "../../constants/Colors";

const AnimatedIcon = ({ focused, children }: { focused: boolean, children: React.ReactNode }) => {
    const scale = useRef(new Animated.Value(1)).current;
    const opacity = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        if (focused) {
            Animated.sequence([
                Animated.parallel([
                    Animated.timing(scale, {
                        toValue: 0.8,    // Shrinks to 80% size
                        duration: 100,   // Extremely fast (100ms)
                        useNativeDriver: true,
                    }),
                    Animated.timing(opacity, {
                        toValue: 0.4,    // Drops to 40% opacity
                        duration: 100,
                        useNativeDriver: true,
                    })
                ]),
                // STEP 2: The "Snap Back" (Return to normal)
                Animated.parallel([
                    Animated.spring(scale, {
                        toValue: 1,      // Back to 100% size
                        friction: 4,     // Keeps that nice bouncy finish
                        tension: 80,
                        useNativeDriver: true,
                    }),
                    Animated.timing(opacity, {
                        toValue: 1,      // Back to 100% opacity
                        duration: 150,   // Smooth fade back in
                        useNativeDriver: true,
                    })
                ])
            ]).start();
        } else {
            scale.setValue(1);
            opacity.setValue(1);
        }
    }, [focused]);

    return (
        <Animated.View style={{ transform: [{ scale }], opacity }}>
            {children}
        </Animated.View>
    );
};

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: Colors.coloraccent,
                tabBarInactiveTintColor: Colors.colortertiary,
                tabBarShowLabel: false,
                tabBarLabelPosition: 'beside-icon',

                tabBarStyle: {
                    position: 'absolute',
                    marginHorizontal: 20,
                    bottom: 30,
                    height: 70,
                    borderRadius: 100,
                    borderTopWidth: 0,
                    backgroundColor: Colors.colorsecondary,
                    paddingBottom: 0,
                    paddingHorizontal: 15,
                    elevation: 0,
                },

                tabBarItemStyle: {
                    height: 70,
                    justifyContent: 'center',
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, focused }) => (
                        <AnimatedIcon focused={focused}>
                            <Home color={color} />
                        </AnimatedIcon>
                    )
                }}
            />
            <Tabs.Screen
                name="search"
                options={{
                    title: "Search",
                    tabBarIcon: ({ color, focused }) => (
                        <AnimatedIcon focused={focused}>
                            <Magnifier color={color} />
                        </AnimatedIcon>
                    )
                }}
            />
            <Tabs.Screen
                name="library"
                options={{
                    title: "Library",
                    tabBarIcon: ({ color, focused }) => (
                        <AnimatedIcon focused={focused}>
                            <Library color={color} />
                        </AnimatedIcon>
                    )
                }}
            />
            <Tabs.Screen
                name="musiclink"
                options={{
                    title: "MusicLink",
                    tabBarIcon: ({ color, focused }) => (
                        <AnimatedIcon focused={focused}>
                            <ShareCircle color={color} />
                        </AnimatedIcon>
                    )
                }}
            />
        </Tabs>
    );
}