import { Magnifier } from "@solar-icons/react-native/Linear";
import { styled } from "nativewind";
import { TextInput, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';
import { Heading } from "../../components/Header";

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
    return (
        <SafeAreaView className='flex-1 p-5 bg-primary gap-5'>
            <Heading className='text-tertiary'>Search</Heading>

            <View className="text-field">
                <Magnifier size={16} color="#666" />
                <TextInput
                    placeholder="Search Library"
                    // value={username}
                    // onChangeText={setUsername}
                    className="flex-1 ml-1 font-letteramono text-lg lettering-tight"
                    placeholderTextColor="#999"
                />
            </View>

        </SafeAreaView>
    );
}