import { Link } from 'expo-router';
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className='flex-1 p-5' bg-coloraccent> 

      <Text className="text-xl font-bold text-maintext">
        DotMusic
      </Text>
      <Link href="/welcome" className="text-maintext rounded bg-primary px-10 py-5 font-medium">
        What
      </Link>
      <Link href="/welcome" className="text-maintext rounded bg-primary px-10 py-5 font-medium">
        button2
      </Link>
      <Link href="/welcome" className="text-maintext rounded bg-primary px-10 py-5 font-medium">
        button3
      </Link>

      <Link href="/librarytabs/[albums]" className="text-maintext rounded bg-primary px-10 py-5 font-medium">
        BULLY - Kanye West
      </Link>
    </SafeAreaView>
  );
}