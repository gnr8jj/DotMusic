import { useRouter } from 'expo-router';
import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native';

interface MediaItem {
  id: number | string;
  type: 'album' | 'song';
  title: string;
  artist: string;
  cover: ImageSourcePropType;
}

interface MediaCardProps {
  item: MediaItem;
}

export const MediaCard = ({ item }: MediaCardProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    if (item.type === 'album') {
      router.push(`/album/${item.id}`);
    } else {
      router.push(`/song/${item.id}`);
    }
  };

  const handlePlay = () => {
    console.log(`Playing ${item.type}: ${item.title}`);
  };

  return (
    <View className="flex-row w-35">
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={handleNavigation}
        className='gap-1.5'
      >
        <View className="relative w-35 h-35 overflow-hidden rounded-2xl">
          <View className="w-35 h-35 overflow-hidden rounded-2xl">
            <Image source={item.cover} className="w-full h-full" resizeMode="cover" />
          </View>

          <View className="absolute -bottom-2 -right-2">
            <View className="absolute top-1 left-1 w-12 h-12 bg-black/30 rounded-xl" />
            {/* <TouchableOpacity
              activeOpacity={0.7}
              onPress={handlePlay}
              className="w-12 h-12 bg-neutral-900 rounded-xl items-center justify-center border border-white/10"
            >
              <Play size={22} color="white" />
            </TouchableOpacity> */}
          </View>
        </View>

        <View className="">
          <Text className="font-inter text-md text-black leading-none" numberOfLines={1} style={{ includeFontPadding: false }}>
            {item.title}
          </Text>
          <Text className="font-inter text-textsecondary text-sm leading-none" style={{ includeFontPadding: false }}>
            {item.artist}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};