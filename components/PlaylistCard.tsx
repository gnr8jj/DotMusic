import { Image, Text, TouchableOpacity, View } from 'react-native';

// The "Dumb" component just receives the data
export const PlaylistCard = ({ playlist }) => {
  return (
    // 'w-40' keeps the whole card a consistent width. Adjust as needed.
    <TouchableOpacity activeOpacity={0.8} className="w-40 mr-4">
      
      {/* TOP SECTION: Image + Sideways Text */}
      <View className="flex-row mb-2">
        
        {/* The Cover Image (Takes up most of the space) */}
        <View className="flex-1 rounded-xl overflow-hidden bg-neutral-200 aspect-[3/4]">
          <Image 
            source={{ uri: playlist.coverUri }} 
            className="w-full h-full"
            resizeMode="cover"
          />
        </View>

        {/* The Sideways Text Container */}
        {/* w-8 gives it just enough horizontal space to exist */}
        <View className="w-8 items-center justify-center">
          {/* React Native rotates from the center, so we force it to not wrap */}
          <Text 
            // The magic rotation property
            style={{ transform: [{ rotate: '90deg' }] }}
            // numberOfLines={1} prevents it from breaking into multiple weird lines
            numberOfLines={1}
            // Use your specific dotted/mono font here
            className="font-letteramono tracking-widest text-xs text-black w-32 text-center"
          >
            {/* Pad the ID so '1' becomes '01' */}
            PLAYLIST {String(playlist.id).padStart(2, '0')}
          </Text>
        </View>

      </View>

      {/* BOTTOM SECTION: Title & Track Count */}
      <View className="pr-8"> {/* Padding right so text doesn't go under the sideways text gap */}
        <Text 
          numberOfLines={1} 
          className="font-ntype82 text-xl text-black mb-1"
          style={{ includeFontPadding: false }}
        >
          {playlist.title}
        </Text>
        
        <Text className="font-letteramono text-neutral-500 text-sm">
          {playlist.trackCount} Tracks
        </Text>
      </View>

    </TouchableOpacity>
  );
};