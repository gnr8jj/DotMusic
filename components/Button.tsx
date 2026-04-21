import { ReactNode } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface ButtonProps {
  label: string;
  onPress: () => void;
  variant?: 'red' | 'black' | 'white'; // Added your 3rd color
  size?: 'md' | 'sm'; // Added size support
  rounded?: 'full' | 'lg'; // Added custom rounding
  outline?: 'true' | 'false';
  icon?: ReactNode; // Slot for your icons
}

export const Button = ({ 
  label, 
  onPress, 
  variant = 'red', 
  size = 'md', 
  rounded = 'full',
  outline = 'false',
  icon 
}: ButtonProps) => {

  // 1. Container Styles (Backgrounds)
  const variants = {
    red: "bg-accent",
    white: "bg-transparent",
    black: "bg-secondary", // Your 3rd figma color
  };

  // 2. Text Color Mapping
  const textColors = {
    red: "text-white",
    white: "text-tertiary",
    black: "text-secondary",
  };

  // 3. Size Mapping
  const sizes = {
    md: "px-8 py-6", 
    sm: "px-4 py-3", // Smaller for your sub-menus
  };

  const outlineStyle = outline === 'true' ? 'border-1 border-outline/30' : 'border-0'

  const roundedStyle = rounded === 'full' ? 'rounded-full' : 'rounded-2xl';

  return (
    <TouchableOpacity 
      onPress={onPress} 
      activeOpacity={0.8}
      className={`flex-row items-center justify-center ${variants[variant]} ${sizes[size]} ${roundedStyle} w-full`}
    >
      {/* ICON SLOT: If an icon is passed, it shows up here */}
      {icon && <View className="mr-2">{icon}</View>}

      <Text className={`
        ${textColors[variant]} 
        font-letteramono 
        lettering-tight 
        text-center
        ${size === 'sm' ? 'text-sm' : 'text-md'}
      `}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};