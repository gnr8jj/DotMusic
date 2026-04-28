import { ReactNode } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface ButtonProps {
  label: string;
  onPress: () => void;
  variant?: 'red' | 'black' | 'white' | 'gray';
  size?: 'md' | 'sm';
  rounded?: 'full' | 'lg';
  outline?: 'true' | 'false';
  icon?: ReactNode;
  className?: string;
}

export const Button = ({
  label,
  onPress,
  variant = 'red',
  size = 'md',
  rounded = 'full',
  outline = 'false',
  icon,
  className = ''
}: ButtonProps) => {

  const variants = {
    red: "bg-accent",
    white: "bg-secondary",
    black: "bg-tertiary",
    gray: "bg-neutral-300",
  };

  const textColors = {
    red: "text-white",
    white: "text-tertiary",
    black: "text-secondary",
    gray: "text-white",
  };

  const sizes = {
    md: "px-3 py-6",
    sm: "px-4 py-3",
  };

  const outlineStyle = outline === 'true' ? 'border-1 border-outline/30' : 'border-0'

  const roundedStyle = rounded === 'full' ? 'rounded-full' : 'rounded-2xl';

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      className={`flex-row items-center justify-center ${variants[variant]} ${sizes[size]} ${roundedStyle}`}
    >
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