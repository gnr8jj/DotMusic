import { Button } from "components/Button";
import { Heading } from "components/Header";
import { styled } from "nativewind";
import { Image, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
    return (
        <SafeAreaView className='flex-1 p-5 bg-primary'>

            <View className='display-flex'>
                <View className="mb-6">
                    <Heading className="text-tertiary">MusicLink</Heading>
                </View>

                <View className="items-center justify-center gap-8 h-105">
                    <View className='items-center justify-center gap-2'>
                        <View className='items-center justify-center gap-4'>
                            <View className="w-50 h-40">
                            <Image
                            source={require('../../assets/images/(pages)/musiclink.png')}
                            className="w-full h-full"
                            resizeMode="contain"/>
                        </View>

                        <Heading className="text-tertiary">What is MusicLink?</Heading>
                        </View>

                        <Text className="text-secondary text-tertiary font-letteramono lettering-tight w-85 text-center">
                            shared frequencies. sync your local archives with others in the vault.
                        </Text>
                    </View>

                    <View className="gap-2 w-full flex-row">
                       <View className="flex-1">
                            <Button label="Host Session" variant="black" className="w-full" onPress={() => console.log('host')} />
                        </View>
                        <View className="flex-1">
                            <Button label="Join Session" variant="white" className="w-full" onPress={() => console.log('join')} />
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}