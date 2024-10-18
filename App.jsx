import {
  View,
  Text,
  Alert,
  Button,
  StatusBar,
  Switch,
  Image,
  Animated,
} from 'react-native';
import {React, useState, useRef} from 'react';
import tw from 'twrnc';

const App = () => {
  const [open, setOpen] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <>
      <View style={tw`flex flex-row  gap-2 flex-wrap p-3 w-full h-40`}>
        <StatusBar hidden={false} barStyle={'light-content'} />
        <Switch
          thumbColor={'white'}
          optional={true}
          trackColor={{false: '#767577', true: '#81b0ff'}}
          onChange={() => {
            setOpen(!open);
          }}
          value={open}
        />
        <View style={tw`justify-center bg-red-500 w-1/5`}>
          <Text>扫一扫</Text>
        </View>
        <View style={tw`justify-center bg-red-500 w-1/5`}>
          <Text>付款码</Text>
        </View>
        <View style={tw`justify-center bg-red-500 w-1/5`}>
          <Text>卡包</Text>
        </View>
        <View style={tw`justify-center bg-red-500 w-1/5 `}>
          <Text>出行</Text>
        </View>
        <Button
          style={tw`w-29 bg-red-500`}
          title="click"
          onPress={() => Alert.alert('hello', 'world')}>
          click
        </Button>

        <Image
          style={tw`w-120 h-120 text-center mt-60`}
          source={{
            uri: 'https://webstatic.mihoyo.com/upload/contentweb/2022/06/27/3e70ceb4ff8af4cb953528cbe0ad978c_1194470955685479611.png',
          }}
        />
      </View>
      <View>
        <Animated.View
          style={[
            tw`p-2 bg-white`,
            {
              // Bind opacity to animated value
              opacity: fadeAnim,
            },
          ]}>
          <Text style={tw`text-4xl text-pink-500 text-center`}>
            Hello React Native!
          </Text>
        </Animated.View>
        <View style={tw``}>
          <Button title="Fade In View" onPress={fadeIn} />
          <Button title="Fade Out View" onPress={fadeOut} />
        </View>
      </View>
    </>
  );
};
export default App;
