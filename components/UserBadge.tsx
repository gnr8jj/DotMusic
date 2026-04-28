import { Image, Text, View } from 'react-native';

interface UserBadgeProps {
    user: {
        username: string;
        avatar: any;
    };
}

export const UserBadge = ({ user }: UserBadgeProps) => {
    return (
        <View className="w-26.5 gap-1">
            <View className="w-26.5 h-26.5 rounded-2xl overflow-hidden border border-outline">
                <Image
                    source={user.avatar}
                    className="w-full h-full"
                    resizeMode="cover"
                />
            </View>
            <Text
                className="font-letteramono text-xs tracking-tighter text-black"
                numberOfLines={1}
            >
                {user.username}
            </Text>
        </View>
    );
};