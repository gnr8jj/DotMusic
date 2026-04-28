import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native';

interface Playlist {
  id: number;
  title: string;
  tracks: number;
  cover: ImageSourcePropType;
}

interface PlaylistCardProps {
  playlist: Playlist;
  className?: string;
  size?: 'sm' | 'lg';
}

export const PlaylistCard = ({ playlist, size = 'sm' }: PlaylistCardProps) => {

  const isLg = size === 'lg';

  const containerClass = isLg ? "flex-1 max-w-[48%] p-4 rounded-2xl gap-3" : "w-40 p-3 rounded-2xl gap-3";
  const imageRowGapClass = isLg ? "gap-3" : "gap-4";
  const rotatedWidthClass = isLg ? "w-5 h-24" : "w-4 h-21";
  const rotatedTextClass = isLg ? "text-[11.5px] w-35 mt-11 h-7" : "text-xs w-30 mt-9";
  const titleClass = isLg ? "text-[19px]" : "text-xl";
  const subtitleClass = isLg ? "text-[11.5px]" : "text-xs";

  return (
    <TouchableOpacity activeOpacity={0.8} className={`bg-secondary ${containerClass}`}>

      <View className={`flex-row w-full ${imageRowGapClass}`}>

        <View className="flex-1 rounded-sm overflow-hidden bg-neutral-200 aspect-[5/8]">
          <Image
            source={playlist.cover}
            className="w-full h-full"
            resizeMode="cover"
          />
        </View>

        <View className={`${rotatedWidthClass} justify-center items-center`}>
          <Text
            style={{ transform: [{ rotate: '90deg' }] }}
            numberOfLines={1}
            className={`font-ndot55 text-black tracking-widest text-left ${rotatedTextClass}`}
          >
            PLAYLIST {String(playlist.id).padStart(2, '0')}
          </Text>
        </View>

      </View>

      <View className="">
        <Text
          numberOfLines={1}
          className={`font-ntype82 text-black leading-none ${titleClass}`}
          style={{ includeFontPadding: false }}
        >
          {playlist.title}
        </Text>

        <Text className={`font-letteramono text-textsecondary lettering-tight ${subtitleClass}`}>
          {playlist.tracks} Tracks
        </Text>
      </View>

    </TouchableOpacity>
  );
};