import { Text, View } from 'react-native';

interface SessionPinProps {
  pin: string;
  title?: string;
  subtitle?: string;
}

export const SessionPin = ({ 
  pin, 
  title = "Your Session PIN", 
  subtitle 
}: SessionPinProps) => {
  const paddedPin = pin.padEnd(6, '•').split(''); 

  return (
    <View className="items-center w-full">
      <Text className="font-letteramono text-lg tracking-tighter mb-4">
        {title}
      </Text>
      
      <View className="flex-row gap-2 justify-center w-full">
        {paddedPin.map((digit, index) => {
          const isPlaceholder = digit === '•';
          
          return (
            <View 
              key={index} 
              className="w-[14%] aspect-[3/4] border border-neutral-300 rounded-2xl items-center justify-center bg-transparent"
            >
              <Text className={`font-ndot55 text-3xl pt-2 ${isPlaceholder ? 'text-neutral-300' : 'text-black'}`}>
                {digit}
              </Text>
            </View>
          );
        })}
      </View>

      {subtitle && (
        <Text className="font-letteramono text-center text-sm tracking-tighter text-black mt-6 px-4">
          {subtitle}
        </Text>
      )}
    </View>
  );
};