import { ArrowRight, Settings } from '@solar-icons/react-native/Linear';
import { Link } from 'expo-router';
import { styled } from "nativewind";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';
import { Heading } from "../../components/Header";

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className='flex-1 p-5 bg-primary gap-5'>

      <View className='display-flex flex-row justify-between'>
        <Heading className='text-tertiary'>Home</Heading>
        <TouchableOpacity
          className="bg-white flex-row h-full items-center justify-center rounded-full p-2"
        >
          <Settings size={20} color="black" />
        </TouchableOpacity>
      </View>

      <View className='debug'>
        <View className='flex-row justify-between'>
          <Text className='font-letteramono lettering-tight'>Recently Played</Text>
          <TouchableOpacity
            // onPress={}
            hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}>
            <ArrowRight size={20} color='black' />
          </TouchableOpacity>
        </View>
      </View>

      <View className='debug'>
        <View className='flex-row justify-between'>
          <Text className='font-letteramono lettering-tight'>Your Playlists</Text>
          <TouchableOpacity
            // onPress={}
            hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}>
            <ArrowRight size={20} color='black' />
          </TouchableOpacity>
        </View>

        <View>
          
        </View>
      </View>


      <Link className='w-fill p-5 debug' href="/(onboarding)/welcome">onboarding test</Link>
      <Link className='w-fill p-5 debug' href="/(onboarding)/createprofile">createprofile test</Link>
    </SafeAreaView>
  );
}