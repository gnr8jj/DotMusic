import { ShareCircle } from '@solar-icons/react-native/Linear';
import { Link } from 'expo-router';
import { styled } from "nativewind";
import { Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';
import { Colors } from "../../constants/Colors";

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className='flex-1 p-5 bg-background'>

      <View className='display-flex flex-row justify-between'>
        <Text className="text-2xl font-bold text-maintext">
          Home
        </Text>
        <Link href="/welcome">
          <ShareCircle color={Colors.coloraccent} />
        </Link>
      </View>
    </SafeAreaView>
  );
}