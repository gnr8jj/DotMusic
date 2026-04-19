import { Settings, ArrowRight } from '@solar-icons/react-native/Linear';
import { Link } from 'expo-router';
import { styled } from "nativewind";
import { Text, View, Pressable } from "react-native";
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';
import { Colors } from "../../constants/Colors";

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className='flex-1 p-5 bg-primary'>

      <View className='display-flex flex-row justify-between'>
        <Text className="text-3xl font-ntype82">Home</Text>
        <Link href="/welcome" className='bg-secondary'>
          <Settings color={Colors.colortertiary} />
        </Link>
      </View>

      <View>
        <View className='flex-row justify-between'>
          <Text className='font-letteramono tracking-tight-letteramono'>
            Recently Played
          </Text>
          
        </View>
      </View>
      <Link href="/(onboarding)/welcome">onboarding test</Link>
    </SafeAreaView>
  );
}