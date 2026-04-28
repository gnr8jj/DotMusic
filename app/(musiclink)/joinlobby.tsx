import { ArrowLeft } from '@solar-icons/react-native/Linear';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { styled } from "nativewind";
import { TouchableOpacity, View } from 'react-native';
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';

import { RoomMembersBox } from 'components/(musiclink)/RoomMembersBox';
import { SessionPin } from 'components/(musiclink)/SessionPin';
import { Button } from 'components/Button';
import { Heading } from 'components/Header';

const SafeAreaView = styled(RNSafeAreaView);

const MOCK_MEMBERS = [
    { id: '1', username: 'jae2x', avatar: require('../../assets/images/dummydata/crysalis.jpg') },
    { id: '2', username: 'chaelestials', avatar: require('../../assets/images/dummydata/crysalis.jpg') },
    { id: '3', username: 'whasdfjhafasjh', avatar: require('../../assets/images/dummydata/crysalis.jpg') },
    { id: '4', username: 'jae2x', avatar: require('../../assets/images/dummydata/crysalis.jpg') },
    { id: '5', username: 'jae2x', avatar: require('../../assets/images/dummydata/crysalis.jpg') },
    { id: '6', username: 'jae2x', avatar: require('../../assets/images/dummydata/crysalis.jpg') },
    { id: '7', username: 'jae2x', avatar: require('../../assets/images/dummydata/crysalis.jpg') },
    { id: '8', username: 'jae2x', avatar: require('../../assets/images/dummydata/crysalis.jpg') },
];

export default function GuestLobbyScreen() {
    const router = useRouter();

    const { sessionPin } = useLocalSearchParams();

    // use sessionPin to fetch real members from database

    return (
        <SafeAreaView className="flex-1 bg-primary p-5 justify-between gap-10">

            <View className="mb-8">
                <TouchableOpacity onPress={() => router.back()} hitSlop={15} className="mb-4">
                    <ArrowLeft size={28} color="black" />
                </TouchableOpacity>
                <Heading className="text-tertiary">Join Session</Heading>
            </View>

            <View className='flex-1 gap-5'>
                <View className='flex-1 gap-10'>
                    <SessionPin pin={String(sessionPin)} subtitle="invite your friends to join by sharing the session pin." />
                    <RoomMembersBox members={MOCK_MEMBERS} />
                </View>

                <View className="">
                    <Button
                        label="Waiting for host..."
                        variant="gray"
                        className="w-full"
                        onPress={() => { }}
                    />
                </View>
            </View>

        </SafeAreaView>
    );
}