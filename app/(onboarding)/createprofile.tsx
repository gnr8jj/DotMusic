import { ArrowLeft, GalleryRound, TrashBinTrash, User } from "@solar-icons/react-native/Linear";
import { Check } from 'lucide-react-native';
import { styled } from "nativewind";
import { useState } from 'react';
import { Image, Linking, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';
import { Button } from "../../components/Button";
import { Heading } from "../../components/Header";

const SafeAreaView = styled(RNSafeAreaView);

// const PRESET_ICONS = [
//     require('../../assets/icons/avatar1.png'),
//     require('../../assets/icons/avatar2.png'),
//     require('../../assets/icons/avatar3.png'),
// ];

const PLACEHOLDER = require('../../assets/images/(onboarding)/placeholder.jpg');

export default function App() {

    const [username, setUsername] = useState('');
    const [image, setImage] = useState(null); // Stores the final URI
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [agreed, setAgreed] = useState(false);

    // upload from gallery
    //   const pickImage = async () => {
    //     const result = await ImagePicker.launchImageLibraryAsync({
    //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
    //       allowsEditing: true,
    //       aspect: [1, 1],
    //       quality: 0.5,
    //     });

    //     if (!result.canceled) {
    //       const sourceUri = result.assets[0].uri;

    //       permanently save to app documents
    //       const fileName = `profile_${Date.now()}.jpg`;
    //       const destUri = `${FileSystem.documentDirectory}${fileName}`;

    //       await FileSystem.copyAsync({ from: sourceUri, to: destUri });
    //       setImage(destUri);
    //       setIsModalVisible(false);
    //     }
    //   };

    // select from pre-made icon
    //   const selectPreset = (iconAsset) => {
    //     // For local assets, the URI is actually a module ID
    //     setImage(Image.resolveAssetSource(iconAsset).uri);
    //     setIsModalVisible(false);
    //   };

    return (
        <SafeAreaView className='flex-1 p-5 bg-primary gap-7'>

            <View className='display-flex flex-col justify-between gap-5'>
                <ArrowLeft size={30} />
                <Heading className='text-tertiary'>What should we call you?</Heading>
            </View>

            <View className="items-center gap-5">
                <Image
                    source={image ? { uri: image } : PLACEHOLDER}
                    className="w-48 h-48 rounded-4xl border border-outline"
                    resizeMode="cover"
                />
                <View className="flex-row gap-3">
                    <TouchableOpacity
                        onPress={() => setIsModalVisible(true)}
                        className="flex-1 bg-black flex-row h-12 items-center justify-center rounded-2xl gap-2"
                    >
                        <GalleryRound size={16} color="white" />
                        <Text className="font-letteramono text-white lettering-tight">Choose Image</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => setImage(null)}
                        className="flex-1 border border-outline flex-row h-12 items-center justify-center rounded-2xl gap-2 bg-white"
                    >
                        <TrashBinTrash size={16} color="black" />
                        <Text className="text-black font-letteramono lettering-tight">Remove Image</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View className="gap-10">
                <View className="gap-5">
                    <View className="text-field">
                        <User size={16} color="#666" />
                        <TextInput
                            placeholder="Username"
                            value={username}
                            onChangeText={setUsername}
                            className="flex-1 ml-1 font-letteramono text-lg lettering-tight"
                            placeholderTextColor="#999"
                        />
                    </View>
                    <View className="flex-row px-1 items-center">
                        <TouchableOpacity
                            onPress={() => setAgreed(!agreed)}
                            activeOpacity={0.8}
                            className={`w-6 h-6 rounded-md border-1 items-center mb-1 justify-center ${agreed ? 'bg-accent border-accent' : 'border-outline bg-secondary'
                                }`}
                        >
                            {agreed && <Check size={16} color="white" strokeWidth={3} />}
                        </TouchableOpacity>

                        <View className="flex-1 ml-3 flex-row flex-wrap">
                            <Text className="text-black font-letteramono text-sm lettering-tight leading-5">
                                I have read and agree to the{' '}
                                <Text
                                    onPress={() => Linking.openURL('https://youtube.com')}
                                    className="text-accent underline font-letteramono lettering-tight text-sm"
                                >
                                    Terms and Conditions
                                </Text>
                            </Text>
                        </View>
                    </View>
                </View>

                <Button label="Enter App" />
            </View>

        </SafeAreaView>
    );
}