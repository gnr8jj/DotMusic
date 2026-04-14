import { Link } from 'expo-router';
import { Text, View } from 'react-native';

const profile = () => {
    return (
        <View>
            <Text>profile</Text>
            <Link href="/">go back</Link>
        </View>
    )
}

export default profile