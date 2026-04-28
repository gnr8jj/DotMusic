import { ArrowRight, Settings } from '@solar-icons/react-native/Linear';
import { MediaCard } from 'components/MediaCard';
import { Link } from 'expo-router';
import { styled } from "nativewind";
import { FlatList, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';
import { Heading } from "../../components/Header";
import { PlaylistCard } from '../../components/PlaylistCard';
import { PLAYLISTS, RECENTLY_PLAYED } from "../../constants/Data";

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className='flex-1 bg-primary gap-5'>

      <View className='flex-row justify-between px-5 mt-5'>
        <Heading className='text-tertiary'>Home</Heading>
        <TouchableOpacity
          className="bg-white flex-row h-full items-center justify-center rounded-full p-2"
        >
          <Settings size={20} color="black" />
        </TouchableOpacity>
      </View>



      <ScrollView
        contentContainerClassName='gap-5 pb-22 px-5'
        className='flex-1 rounded-2xl'
        showsVerticalScrollIndicator={false}>

        <View className='gap-3'>
          <View className='flex-row justify-between'>
            <Text className='font-letteramono text-lg lettering-tight'>Recently Played</Text>
            <TouchableOpacity
              // onPress={}
              hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}>
              <ArrowRight size={20} color='black' />
            </TouchableOpacity>

          </View>
          // Inside your index.tsx
          <FlatList
            className="-mx-5"
            contentContainerClassName="gap-3 px-5"
            horizontal
            showsHorizontalScrollIndicator={false}
            data={RECENTLY_PLAYED.slice(0, 8)}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <MediaCard item={item} className="w-35" />}
          />
        </View>

        <View className='gap-3'>
          <View className='flex-row justify-between'>
            <Text className='font-letteramono text-lg lettering-tight'>Randomized Picks</Text>
            <TouchableOpacity
              // onPress={}
              hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}>
              <ArrowRight size={20} color='black' />
            </TouchableOpacity>

          </View>
          <FlatList
            className="-mx-5"
            contentContainerClassName="gap-3 px-5"
            horizontal
            showsHorizontalScrollIndicator={false}
            data={RECENTLY_PLAYED.slice(0, 8)}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <MediaCard item={item} className="w-35" />}
          />
        </View>

        <View className='gap-3'>
          <View className='flex-row justify-between'>
            <Text className='font-letteramono text-lg lettering-tight'>Your Playlists</Text>
            <TouchableOpacity
              // onPress={}
              hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}>
              <ArrowRight size={20} color='black' />
            </TouchableOpacity>

          </View>
          <FlatList
            className="-mx-5"
            contentContainerClassName="gap-4 px-5"
            horizontal
            showsHorizontalScrollIndicator={false}
            data={PLAYLISTS.slice(0, 8)}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <PlaylistCard playlist={item} />}
          />
        </View>

        <View className='debug flex-1 flex-row'>
          <Link className='p-5' href="/(onboarding)/welcome">onboarding test</Link>
          <Link className='p-5' href="/(onboarding)/createprofile">createprofile test</Link>
        </View>

        <View className='debug flex-1 flex-row'>
          <Link className='p-5' href="/(musiclink)/joininput">join input</Link>
          <Link className='p-5' href="/(musiclink)/hostlobby">host</Link>
          <Link className='p-5' href="/(musiclink)/joinlobby">lobby</Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}