import { Pressable, StyleSheet, Text, View, ViewStyle, TextStyle } from 'react-native';
import Colors from '../constants/Colors';
import { forwardRef } from 'react';

type ButtonProps = {
  text: string;
  textStyle?: TextStyle;
} & React.ComponentPropsWithoutRef<typeof Pressable>;

const Button = forwardRef<View | null, ButtonProps>(
   ({ text, style, textStyle, ...pressableProps }, ref) => {
      return (
         <Pressable
            ref={ref}
            style={({ pressed }) => [
               styles.container,
               pressed && styles.pressed,
               style as ViewStyle,
            ]}
            {...pressableProps}
         >
            <Text style={[styles.text, textStyle]}>{text}</Text>
         </Pressable>
      );
   }
);

export default Button;

const styles = StyleSheet.create({
   container: {
      backgroundColor: Colors.jollibee.color,
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "center",
      width: '50%',
      
   },
   pressed: {
      opacity: 0.75,
   },
   text: {
      color: "white",
      fontSize: 16,
      fontWeight: "600",
   },
})