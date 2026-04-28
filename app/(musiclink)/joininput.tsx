import { ArrowLeft, Backspace } from '@solar-icons/react-native/Linear';
import { useRouter } from 'expo-router';
import { styled } from "nativewind";
import { useState } from 'react';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';

import { SessionPin } from 'components/(musiclink)/SessionPin';
import { Button } from 'components/Button';
import { Heading } from 'components/Header';

const SafeAreaView = styled(RNSafeAreaView);

export default function JoinSessionScreen() {
    const router = useRouter();

    const [pin, setPin] = useState("");

    const handleKeyPress = (value: string) => {
        if (value === 'back') {
            setPin((prev) => prev.slice(0, -1));
        } else {
            if (pin.length < 6) {
                setPin((prev) => prev + value);
            }
        }
    };

    return (
        <SafeAreaView className="flex-1 bg-primary p-5 justify-between gap-10">

            <View className="mb-8">
                <TouchableOpacity onPress={() => router.back()} hitSlop={15} className="mb-4">
                    <ArrowLeft size={28} color="black" />
                </TouchableOpacity>
                <Heading className="text-tertiary">Join Session</Heading>
            </View>

            <View className='flex-1 justify-between'>
                <View className="items-center">
                    <SessionPin title="Enter Session PIN" pin={pin} />
                </View>

                <View className='gap-5'>
                    <Button
                        label="Continue"
                        variant="red"
                        className={`w-full ${pin.length === 6 ? 'opacity-100' : 'opacity-50'}`}
                        onPress={() => {
                            if (pin.length === 6) {
                                console.log("Joining room with PIN:", pin);
                                router.push(`../(musiclink)/joinlobby?sessionPin=${pin}`);
                            }
                        }}
                    />

                    <View className="flex-row flex-wrap justify-between gap-y-2">
                        {['1', '2', '3', '4', '5', '6', '7', '8', '9', ' ', '0', 'back'].map((key, index) => {

                            if (key === ' ') {
                                return <View key={index} className="w-30 aspect-[3/2]" />;
                            }

                            return (
                                <Pressable
                                    key={index}
                                    onPress={() => handleKeyPress(key)}
                                >
                                    {({ pressed }) => (
                                        <View
                                            className={`w-30 h-19 rounded-xl items-center justify-center transition-colors ${pressed ? 'bg-neutral-300' : 'bg-white'
                                                }`}
                                        >
                                            {key === 'back' ? (
                                                <Backspace size={28} color="black" />
                                            ) : (
                                                <Text className="font-ntype82 text-3xl text-black pt-2">
                                                    {key}
                                                </Text>
                                            )}
                                        </View>
                                    )}
                                </Pressable>
                            );
                        })}
                    </View>
                </View>
            </View>

        </SafeAreaView>
    );
}