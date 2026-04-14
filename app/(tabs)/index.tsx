import '@/global.css';
import { Link } from 'expo-router';
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-maintext">
        Welcome to Nativewind!
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
    </View>
  );
}