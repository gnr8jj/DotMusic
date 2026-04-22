import { Text, TextProps } from 'react-native';

interface HeadingProps extends TextProps {
  children: React.ReactNode;
  className?: string;
}

export const Heading = ({ children, className, ...props }: HeadingProps) => {
  return (
    <Text 
      style={{ includeFontPadding: false, textAlignVertical: 'center' }}
      className={`font-ntype82 text-secondary text-4xl leading-4 ${className}`}
      {...props}
    >
      {children}
    </Text>
  );
};