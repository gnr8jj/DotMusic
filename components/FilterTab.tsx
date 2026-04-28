import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

interface FilterTabsProps {
    tabs: string[];
    activeTab: string;
    onTabChange: (tab: string) => void;
}

export const FilterTabs = ({ tabs, activeTab, onTabChange }: FilterTabsProps) => {
    return (
        <View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerClassName="px-5 gap-6"
            >
                {tabs.map((tab) => {
                    const isActive = activeTab === tab;

                    return (
                        <TouchableOpacity
                            key={tab}
                            onPress={() => onTabChange(tab)}
                            className={`pb- border-b-2 ${isActive ? 'border-accent' : 'border-transparent'
                                }`}
                        >
                            <Text
                                className={`font-letteramono text-lg tracking-tighter ${isActive ? 'text-black' : 'text-neutral-400'
                                    }`}
                            >
                                {tab}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        </View>
    );
};