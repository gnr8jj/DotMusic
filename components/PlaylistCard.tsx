import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native';

interface Playlist {
  id: number;
  title: string;
  tracks: number;

  cover: ImageSourcePropType;
}

interface PlaylistCardProps {
  playlist: Playlist;
}

export const PlaylistCard = ({ playlist }: PlaylistCardProps) => {
  return (
    <TouchableOpacity activeOpacity={0.8} className="w-40 h-57 bg-secondary p-3 rounded-2xl gap-3">

      <View className="flex-row h-39 gap-5">

        <View className="flex-1 rounded-sm overflow-hidden bg-neutral-200">
          <Image
            source={playlist.cover}
            className="w-full h-full"
            resizeMode="cover"
          />
        </View>

        <View className="w-4 h-21 justify-center items-center">
          <Text
            style={{ transform: [{ rotate: '90deg' }] }}
            numberOfLines={1}
            className="font-ndot55 text-xs text-black tracking-widest w-30 text-center"
          >
            PLAYLIST {String(playlist.id).padStart(2, '0')}
          </Text>
        </View>

      </View>

      <View className="">
        <Text
          numberOfLines={1}
          className="font-ntype82 text-xl text-black leading-none"
          style={{ includeFontPadding: false }}
        >
          {playlist.title}
        </Text>

        <Text className="font-letteramono text-textsecondary text-xs lettering-tight" style={{ includeFontPadding: false }}>
          {playlist.tracks} Tracks
        </Text>
      </View>

    </TouchableOpacity>
  );
};