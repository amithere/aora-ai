import CustomButton from "@/components/CustomButton";
import { images } from "@/constants";
import { useGlobalContext } from "@/context/GlobalProviders";
import { Link, Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {

  const {isLoading, isLoggedIn} = useGlobalContext();

  if(!isLoading && isLoggedIn) return <Redirect href='/home'/>

  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View 
          className='w-full justify-center items-center h-full px-4'>
          <Image 
          source={images.logo}
          className='w-[130px] h-[84px]'
          resizeMode="contain">
          </Image>

          <Image
          source={images.cards}
          className='max-w-[380-px] w-full h-[300px]'>

          </Image>

          <View>
            <Text style={{color: 'white'}}>
              Discover endless possibilities with{' '}
              <Text className='text-amber-400'>Aora</Text>

              <Image
              source={images.path}
              className='w-[136px] h-[15px] absolute -bottom-2 -right-2'
              resizeMode="contain">
                
              </Image>
            </Text>
          </View>

          <CustomButton
           title='Continue with Email'
           handlePress={() => router.push('/sign-in')}
           containerStyles='w-full mt-7'
          />
        </View>
      </ScrollView>
      <StatusBar
        backgroundColor="#161622"
        style="light"
      />
    </SafeAreaView>
  );
}
