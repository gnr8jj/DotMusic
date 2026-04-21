import * as MediaLibrary from 'expo-media-library';
import { useRouter } from "expo-router";
import { styled } from "nativewind";
import { Image, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../../components/Button';
import { Heading } from '../../components/Header';

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {

    const router = useRouter();

    // 2. Added a dummy function so the app doesn't crash when called!
    // You will put your SQLite database logic inside here later.
    const startBackgroundLibraryIndexing = async () => {
        console.log("Indexing started in the background...");
    };

    const handleGrantPermission = async () => {
        const { status } = await MediaLibrary.requestPermissionsAsync();

        if (status === 'granted') {
            startBackgroundLibraryIndexing();
            router.push('/createprofile');
        } else {
            console.log("Permission denied! Show an alert to the user.");
        }
    };

    return (
        <View className="flex-1 bg-black">

            {/* LAYER 1: Background Image */}
            <Image
                source={require('../../assets/images/(onboarding)/onbdgbg.png')}
                className="absolute w-full h-full"
                resizeMode="cover"
            />

            {/* LAYER 2: Bottom Image 
                Moved this BEFORE the SafeAreaView so it doesn't block touches!
                Also added 'pointer-events-none' just to be 100% safe.
            */}
            <View className="items-center absolute bottom-0 w-full" pointerEvents="none">
                <Image
                    source={require('../../assets/images/(onboarding)/onbdgpreview.png')}
                    className="w-90 h-120"
                    resizeMode="contain"
                />
            </View>

            {/* LAYER 3: Safe Area (Renders on top of everything) */}
            <SafeAreaView className="flex-1">
                <View className='flex-1 py-3 px-5 justify-between'>

                    {/* Top Section */}
                    <View className="items-center justify-center gap-2 mt-10 h-95">
                        <View className='items-center justify-center gap-4'>
                            <Image
                            source={require('../../assets/images/(onboarding)/icon.png')}
                            className="w-30 h-30"
                        />
                        <Heading>Welcome to DotMusic</Heading>
                        </View>
                        <Text className="text-secondary font-letteramono lettering-tight w-85 text-center">
                            untouched. offline. a sacred place for your local music.
                        </Text>
                    </View>
                    <Button label="Next" onPress={handleGrantPermission}/>
                </View>
            </SafeAreaView>
        </View>
    );
}