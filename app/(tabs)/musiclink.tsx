import { Heading } from "components/Header";
import { styled } from "nativewind";
import { Image, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
    return (
        <SafeAreaView className='flex-1 pt-5 bg-primary'>

            <View className='display-flex justify-between'>
                <View className="px-5 mb-6">
                    <Heading className="text-tertiary">MusicLink</Heading>
                </View>

                <View className="items-center justify-center gap-2 h-95 debug">
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
            </View>
        </SafeAreaView>
    );
}