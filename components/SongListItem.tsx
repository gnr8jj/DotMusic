import { MenuDots } from '@solar-icons/react-native/Bold';
import { Image, Text, TouchableOpacity, View } from 'react-native';

interface SongListItemProps {
    song: any; // Type this properly with your MediaItem interface later!
}

export const SongListItem = ({ song }: SongListItemProps) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            className="flex-row items-center justify-between bg-secondary rounded-xl p-3"
        >

            <View className="flex-row items-center flex-1">

                <View className="w-14 h-14 bg-neutral-200 rounded-md overflow-hidden">
                    <Image
                        source={song.cover}
                        className="w-full h-full"
                        resizeMode="cover"
                    />
                </View>

                <View className="ml-4 flex-1">
                    <Text className="font-inter text-md text-black leading-none" numberOfLines={1} style={{ includeFontPadding: false }}>
                        {song.title}
                    </Text>
                    <Text className="font-inter text-neutral-500 text-sm leading-none" numberOfLines={1} style={{ includeFontPadding: false }}>
                        {song.artist}
                    </Text>
                </View>

            </View>

            <TouchableOpacity
                className="bg-primary py-1.5 px-1 rounded-lg ml-4"
                hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
                onPress={() => console.log('Open options for', song.title)}
            >
                <MenuDots size={18} style={{ transform: [{ rotate: '90deg' }] }} />
            </TouchableOpacity>

        </TouchableOpacity>
    );
};