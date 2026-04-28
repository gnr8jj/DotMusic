import { ArtistListItem } from "components/ArtistListItem";
import { MediaCard } from "components/MediaCard";
import { PlaylistCard } from "components/PlaylistCard";
import { SongListItem } from "components/SongListItem";
import { MOCK_ARTISTS, PLAYLISTS, RECENTLY_PLAYED } from "constants/Data";
import { styled } from "nativewind";
import { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';
import { FilterTabs } from '../../components/FilterTab';
import { Heading } from '../../components/Header';

const SafeAreaView = styled(RNSafeAreaView);

const TABS = ['Songs', 'Albums', 'Artists', 'Playlists', 'Hearted'];

export default function LibraryScreen() {
    const [activeTab, setActiveTab] = useState('Songs');

    const renderContent = () => {
        switch (activeTab) {
            case 'Songs':
                return (
                    <FlatList
                        key="songs-list"
                        contentContainerClassName="px-5 pt-4 pb-20 gap-2"
                        data={RECENTLY_PLAYED}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => <SongListItem song={item} />}
                        showsVerticalScrollIndicator={false}
                    />
                );
            case 'Albums':
                return (
                    <FlatList
                        key="albums-grid"
                        contentContainerClassName="px-5 pt-4 pb-20 gap-y-6"
                        columnWrapperClassName="gap-x-3"
                        data={RECENTLY_PLAYED}
                        numColumns={3}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => <MediaCard item={item} className="flex-1 max-w-[31%]" />}
                        showsVerticalScrollIndicator={false}
                    />
                );
            case 'Artists':
                return (
                    <FlatList
                        key="artists-list"
                        contentContainerClassName="px-5 pt-4 pb-20 gap-2"
                        data={MOCK_ARTISTS}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => <ArtistListItem artist={item} />}
                        showsVerticalScrollIndicator={false}
                    />
                );
            case 'Playlists':
                return (
                    <FlatList
                        key="playlists-grid"
                        contentContainerClassName="px-5 pt-4 pb-20 gap-y-4"
                        columnWrapperClassName="gap-x-3"
                        data={PLAYLISTS}
                        numColumns={2}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => <PlaylistCard playlist={item} size="lg" />}
                        showsVerticalScrollIndicator={false}
                    />
                );
            case 'Hearted':
                return (
                    <View className="px-5 mt-4">
                        <Text className="font-letteramono text-black text-lg">Hearted tracks go here</Text>
                    </View>
                );
            default:
                return (
                    <View className="px-5 mt-4">
                        <Text className="font-letteramono text-black text-lg">Coming soon...</Text>
                    </View>
                );
        }
    };


    return (
        <SafeAreaView className="flex-1 bg-primary pt-5">
            <View className="px-5 mb-6">
                <Heading className="text-tertiary">Library</Heading>
            </View>

            <View className="mb-4">
                <FilterTabs
                    tabs={TABS}
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                />
            </View>

            <View className="flex-1">
                {renderContent()}
            </View>
        </SafeAreaView>
    );
}