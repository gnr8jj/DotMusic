import { SongListItem } from "components/SongListItem";
import { RECENTLY_PLAYED } from "constants/Data";
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
                        // Add a little top padding to separate it from the tabs
                        contentContainerClassName="px-5 pt-4 pb-20 gap-2"
                        data={RECENTLY_PLAYED} // Swap this with a SONGS mock array later
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => <SongListItem song={item} />}
                        showsVerticalScrollIndicator={false}
                    />
                );
            case 'Albums':
                return (
                    <View className="px-5 mt-4">
                        <Text className="font-letteramono text-black text-lg">Album Grid goes here</Text>
                    </View>
                );
            case 'Artists':
                return (
                    <View className="px-5 mt-4">
                        <Text className="font-letteramono text-black text-lg">Artists List goes here</Text>
                    </View>
                );
            case 'Playlists':
                return (
                    <View className="px-5 mt-4">
                        <Text className="font-letteramono text-black text-lg">Playlists go here</Text>
                    </View>
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