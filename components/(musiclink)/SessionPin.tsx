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
  const paddedPin = pin.padEnd(6, '-').split('');

  return (
    <View className="items-center w-full gap-3">
      <Text className="font-letteramono text-lg lettering-tight">
        {title}
      </Text>

      <View className="flex-row gap-2 justify-center w-full">
        {paddedPin.map((digit, index) => {
          const isPlaceholder = digit === '-';

          return (
            <View
              key={index}
              className="w-[15%] aspect-[4/6] border border-neutral-300 rounded-2xl items-center justify-center bg-secondary"
            >
              <Text className={`font-ndot57 text-3xl pt-2 ${isPlaceholder ? 'text-neutral-300' : 'text-black'}`}>
                {digit}
              </Text>
            </View>
          );
        })}
      </View>

      {subtitle && (
        <Text className="font-letteramono text-center w-80 text-sm lettering-tight text-black leading-none">
          {subtitle}
        </Text>
      )}
    </View>
  );
};