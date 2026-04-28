import { Image, Text, TouchableOpacity, View } from 'react-native';

interface ArtistListItemProps {
    artist: any; // replace with  MediaItem interface later
}

export const ArtistListItem = ({ artist }: ArtistListItemProps) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            className="flex-row items-center justify-between bg-secondary rounded-xl p-3"
        >

            <View className="flex-row items-center flex-1">

                <View className="w-14 h-14 bg-neutral-200 rounded-md overflow-hidden">
                    {artist.avatar ? (
                        <Image
                            source={artist.avatar}
                            className="w-full h-full"
                            resizeMode="cover"
                        />
                    ) : (
                        <Image
                            source={require('../assets/images/(library)/placeholder.png')}
                            className="w-full h-full"
                            resizeMode="cover"
                        />
                    )}
                </View>

                <View className="ml-4 flex-1">
                    <Text className="font-inter text-md text-black leading-none" numberOfLines={1} style={{ includeFontPadding: false }}>
                        {artist.name}
                    </Text>
                    <Text className="font-inter text-neutral-500 text-sm leading-none" numberOfLines={1} style={{ includeFontPadding: false }}>
                        {artist.songCount} Songs
                    </Text>
                </View>

            </View>

        </TouchableOpacity>
    );
};