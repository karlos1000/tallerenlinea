import React, { useState} from 'react';
import { View, } from 'react-native';
import { useNavigation} from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { NativeBaseProvider, Box, Text, Heading, VStack, FormControl, Input, Link, Button, Icon, HStack, Center, Pressable, } from 'native-base';


const Stack = createStackNavigator();

const TabFooter = () =>{
  const navigation = useNavigation();

  const [selected, setSelected] = useState(null);

  const Contacto = () => {
    setSelected(0)
    navigation.navigate("Contacto");
    /* return(
      <Stack.Navigator>
        <Stack.Screen name="Contacto" component={ContactoScreen} />
      </Stack.Navigator>
    ) */
  }

  return (
    <NativeBaseProvider>
       <Box flex={1} bg="transparent" safeAreaTop>
        <Center flex={1}>
        </Center>
        <HStack bg="primary.500" alignItems="center" safeAreaBottom shadow={6}>
          <Pressable
            opacity={selected === 0 ? 1 : 0.5}
            py={2}
            flex={1}
            onPress={() => Contacto() }
          >
            <Center>
              <Icon
                mb={1}
                color="white"
                size="xs"
              />

              <Text color="white" fontSize={14}>Contacto</Text>
            </Center>
          </Pressable>
          <Pressable
            opacity={selected === 1 ? 1 : 0.5}
            py={2}
            flex={1}
            onPress={() => setSelected(1)}
          >
            <Center>
              <Icon
                mb={1}
                color="white"
                size="xs"
              />

              <Text color="white" fontSize={14}>Compartir</Text>
            </Center>
          </Pressable>
          <Pressable
            opacity={selected === 3 ? 1 : 0.5}
            py={2}
            flex={1}
            onPress={() => setSelected(3)}
          >
            <Center>
              <Icon
                mb={1}
                color="white"
                size="xs"
              />
              <Text color="white" fontSize={14}>Redes Sociales</Text>
            </Center>
          </Pressable>
        </HStack>
      </Box>
    </NativeBaseProvider>
  );
}

export default TabFooter;