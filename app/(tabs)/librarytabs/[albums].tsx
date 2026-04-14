import { Link, useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

const AlbumDetails = () => {
    const { id } = useLocalSearchParams<{ id: string }>();
    return (
        <View>
            <Text>{id}</Text>
            <Link href="/library">Back to Library</Link>
        </View>
    )
}

export default AlbumDetails