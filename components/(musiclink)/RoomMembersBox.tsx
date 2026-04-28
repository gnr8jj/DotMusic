import { UserBadge } from 'components/UserBadge';
import { ScrollView, Text, View } from 'react-native';

interface User {
    id: string | number;
    username: string;
    avatar: any;
}

interface RoomMembersBoxProps {
    members: User[];
}

export const RoomMembersBox = ({ members }: RoomMembersBoxProps) => {
    return (
        <View className="flex-1 bg-white rounded-3xl p-5 gap-3">

            <Text className="font-letteramono text-lg lettering-tight text-black">
                Room Members ({members.length})
            </Text>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View className="flex-row flex-wrap gap-x-1.5 gap-y-2">
                    {members.map((member) => (
                        <UserBadge key={member.id} user={member} />
                    ))}
                </View>
            </ScrollView>

        </View>
    );
};