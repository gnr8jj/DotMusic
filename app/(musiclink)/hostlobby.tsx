import { ArrowLeft } from '@solar-icons/react-native/Linear';
import { useRouter } from 'expo-router';
import { styled } from "nativewind";
import { useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';

import { RoomMembersBox } from 'components/(musiclink)/RoomMembersBox';
import { SessionPin } from 'components/(musiclink)/SessionPin';
import { Button } from 'components/Button';
import { Heading } from 'components/Header';

const SafeAreaView = styled(RNSafeAreaView);

const MOCK_MEMBERS = [
    { id: '1', username: 'jae2x', avatar: require('../../assets/images/dummydata/crysalis.jpg') },
];

export default function HostLobbyScreen() {
    const router = useRouter();

    const [sessionPin, setSessionPin] = useState("");

    useEffect(() => {
        // currently generating a random 6-digit pin to simulate room function
        // will be used later to fetch() to backend to create a room
        const generateMockPin = Math.floor(100000 + Math.random() * 900000).toString();
        setSessionPin(generateMockPin);
    }, []);

    return (
        <SafeAreaView className="flex-1 bg-primary p-5 justify-between gap-10">

            <View className="mb-8">
                <TouchableOpacity onPress={() => router.back()} hitSlop={15} className="mb-4">
                    <ArrowLeft size={28} color="black" />
                </TouchableOpacity>
                <Heading className="text-tertiary">Host Session</Heading>
            </View>

            <View className='flex-1 gap-5'>
                <View className='flex-1 gap-10'>
                    {/* newly generated state pin here */}
                    <SessionPin pin={sessionPin} subtitle="invite your friends to join by sharing the session pin." />
                    <RoomMembersBox members={MOCK_MEMBERS} />
                </View>

                <View className="">
                    <Button
                        label="Start Session"
                        variant="red"
                        className="w-full"
                        onPress={() => {
                            console.log(`Starting room ${sessionPin}...`);
                            // router.push('/musiclink/activesession');
                        }}
                    />
                </View>
            </View>

        </SafeAreaView>
    );
}