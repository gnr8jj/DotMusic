import { useRouter } from 'expo-router';
import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native';

export interface MediaItem {
  id: number | string;
  type?: 'album' | 'single';
  title: string;
  artist: string;
  cover: ImageSourcePropType;
}

interface MediaCardProps {
  item: MediaItem;
  className?: string;
}

export const MediaCard = ({ item, className = "w-30" }: MediaCardProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push({
      pathname: "/(library)/album/[id]",
      params: { id: item.id }
    });
  };

  return (
    <View className={className}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={handleNavigation}
        className='gap-1.5'
      >
        <View className="relative w-full aspect-square overflow-hidden rounded-2xl">
          <Image source={item.cover} className="w-full h-full" resizeMode="cover" />

          {/* <View className="absolute -bottom-2 -right-2">
            <View className="absolute top-1 left-1 w-12 h-12 bg-black/30 rounded-xl" />
          </View> */}
        </View>

        <View>
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