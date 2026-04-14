import { Link } from 'expo-router';
import { Text, View } from 'react-native';

const library = () => {
    return (
        <View>
            <Text>library</Text>
            <Link href="/">go back</Link>
        </View>
    )
}

export default library