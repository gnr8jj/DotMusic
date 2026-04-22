import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native';

// 1. Define the shape of your data
// If you already made this in your Data.js (which should be renamed to Data.ts), 
// you can import it instead of writing it here!
interface Playlist {
  id: number;
  title: string;
  tracks: number;
  // ImageSourcePropType is the official React Native type for require() images
  cover: ImageSourcePropType;
}

// 2. Define the Props for this specific component
interface PlaylistCardProps {
  playlist: Playlist;
}

// 3. Tell the component to use those props
export const PlaylistCard = ({ playlist }: PlaylistCardProps) => {
  return (
    <TouchableOpacity activeOpacity={0.8} className="w-35 h-50 bg-secondary p-3 rounded-2xl gap-3">

      {/* TOP SECTION: Image + Sideways Text */}
      <View className="flex-row h-32 gap-5">

        {/* The Cover Image */}
        <View className="flex-1 rounded-sm overflow-hidden bg-neutral-200">
          <Image
            source={playlist.cover}
            className="w-full h-full"
            resizeMode="cover"
          />
        </View>

        {/* The Vertical Text Container */}
        {/* items-center is crucial here—it keeps the rotated box perfectly in the middle of this column */}
        <View className="w-4 h-21 justify-center items-center">
          <Text
            // Stick to the standard center rotation. It is bulletproof.
            style={{ transform: [{ rotate: '90deg' }] }}
            numberOfLines={1}
            // MATCH THE HEIGHT: We use w-30 so the text box is exactly as long as the image is tall
            // text-center keeps the text perfectly aligned in the middle of the vertical strip
            className="font-ndot55 text-xs text-black tracking-widest w-30 text-center"
          >
            PLAYLIST {String(playlist.id).padStart(2, '0')}
          </Text>
        </View>

      </View>

      {/* BOTTOM SECTION: Title & Track Count */}
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