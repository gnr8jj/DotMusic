import { Link } from 'expo-router';
import { styled } from "nativewind";
import { Text, View, ImageBackground } from "react-native";
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';
import { Colors } from "../../constants/Colors";

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
    return (
        <ImageBackground
            source={require('../../assets/images/(onboarding)/onbdgbg.png')}
            resizeMode='cover'
            style={{ flex: 1 }}
        >

        <SafeAreaView>
            
        </SafeAreaView>

        </ImageBackground>

    );
}