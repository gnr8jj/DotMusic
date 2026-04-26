import { ArrowLeft } from "@solar-icons/react-native/Linear";
import { styled } from "nativewind";
import { View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';
import { Heading } from "../../components/Header";

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
    return (
        <SafeAreaView className='flex-1 p-5 bg-primary gap-7'>

            <View className='display-flex flex-col justify-between gap-5'>
                <ArrowLeft size={30}/>
                <Heading className='text-tertiary'>What should we call you?</Heading>
            </View>

            <View>
                
            </View>

        </SafeAreaView>
    );
}