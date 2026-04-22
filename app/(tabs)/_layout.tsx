import { Home, Library, Magnifier, ShareCircle } from '@solar-icons/react-native/Linear';
import { Tabs } from "expo-router";
import React, { useEffect, useRef } from "react";
import { Animated } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from "../../constants/Colors";

const AnimatedIcon = ({ focused, children }: { focused: boolean, children: React.ReactNode }) => {
    const scale = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        if (focused) {
            // 1. Stop any stuck animations before starting a new one
            scale.stopAnimation();

            // 2. Queue the ENTIRE sequence on the Native Thread
            Animated.sequence([
                // The Native Squish (50ms is so fast it looks instant, but protects the thread)
                Animated.timing(scale, {
                    toValue: 0.7,
                    duration: 50,
                    useNativeDriver: true, // Native driver handles it!
                }),
                // The Native Bounce
                Animated.spring(scale, {
                    toValue: 1,
                    friction: 4,
                    tension: 100,
                    useNativeDriver: true, // Native driver handles it!
                })
            ]).start();
        } else {
            // Reset silently when clicking away
            scale.setValue(1);
        }
    }, [focused]);

    return (
        <Animated.View style={{ transform: [{ scale }] }}>
            {children}
        </Animated.View>
    );
};

export default function TabLayout() {

    const insets = useSafeAreaInsets();

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
                    marginHorizontal: 17,
                    bottom: Math.max(insets.bottom, 25),
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