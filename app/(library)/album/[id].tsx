import { MenuDots } from '@solar-icons/react-native/Bold';
import { ArrowLeft, Play, Shuffle } from '@solar-icons/react-native/Linear';
import { Heading } from 'components/Header';
import { RECENTLY_PLAYED } from "constants/Data";
import { useLocalSearchParams, useRouter } from 'expo-router';
import { styled } from "nativewind";
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';

const SafeAreaView = styled(RNSafeAreaView);

export default function AlbumDetailsScreen() {
    const router = useRouter();

    const { id } = useLocalSearchParams();

    const album = RECENTLY_PLAYED.find((item) => item.id.toString() === id);

    if (!album) {
        return (
            <SafeAreaView className="flex-1 bg-primary p-5 items-center justify-center">
                <Text className="font-letteramono">Album not found</Text>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView className="flex-1 bg-primary p-5 gap-3">

            <View className="mb-2">
                <TouchableOpacity
                    onPress={() => router.back()}
                    hitSlop={15}
                    className="mb-4"
                >
                    <ArrowLeft size={28} color="black" />
                </TouchableOpacity>
                <Heading className="text-tertiary">Album Details</Heading>
            </View>

            <View className='gap-4 items-center'>
                <View className="relative w-65 aspect-square overflow-hidden rounded-3xl border border-outline">
                    <Image
                        source={album.cover}
                        className="w-full h-full "
                        resizeMode="cover"
                    />
                </View>
                <View className='gap-1 items-center leading-none'>
                    <Text className="font-inter text-2xl text-textprimary">{album.title}</Text>
                    <Text className="font-inter text-textsecondary">{album.artist}</Text>
                </View>

                <View className='flex-row gap-2'>
                    <TouchableOpacity
                        onPress={() => console.log('Play album')}
                        className="flex-1 bg-black flex-row h-12 items-center justify-center rounded-2xl gap-2"
                    >
                        <Play size={16} color="white" />
                        <Text className="font-letteramono text-white lettering-tight">Play All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => console.log('Shuffle album')}
                        className="flex-1 border border-outline flex-row h-12 items-center justify-center rounded-2xl gap-2 bg-white"
                    >
                        <Shuffle size={18} color="black" />
                        <Text className="text-black font-letteramono lettering-tight">Shuffle</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => console.log('Open options for album')}
                        className="aspect-square border border-outline flex-row h-12 items-center justify-center rounded-full gap-2 bg-white"
                    >
                        <MenuDots size={18} style={{ transform: [{ rotate: '90deg' }] }} />
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    );
}