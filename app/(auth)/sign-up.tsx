import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'
import { Link, router } from 'expo-router'
import { createUser } from '@/lib/appwrite'

const SignUp = () => {

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = async() => {

    if (!form.email || !form.password || !form.username) {
      Alert.alert('Please fill in all data')

    }
    setIsSubmitting(true);

    try {
      const result = await createUser(form.email, form.password, form.username);
      
      // set it to global state

      router.replace('/home');
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='text-white w-full justify-center min-h-[85vh] px-4 my-6'>
          <Image
            source={images.logo}
            resizeMode='contain'
            className='w-[115px] h-[35px]'
          />
          <Text className='text-white text-2xl mt-10 font-semibold'>Sign Up</Text>

          <FormField
            title='Username'
            value={form.username}
            placeholder='Enter Username'
            handleChangeText={(e) => setForm({...form, username: e })}
            otherStyles='mt-7'
            keyboardType='username'
          />

          <FormField
            title='Email'
            value={form.email}
            placeholder='Enter Email'
            handleChangeText={(e) => setForm({...form, email: e })}
            otherStyles='mt-7'
            keyboardType='email-address'
          />

          <FormField
            title='Password'
            value={form.password}
            placeholder='Enter Password'
            handleChangeText={(e) => setForm({...form, password: e })}
            otherStyles='mt-7 mb-7'
            keyboardType='password'
          />

          <CustomButton
            title='Sign Up'
            handlePress={submit}
            isLoading={isSubmitting}

          />

          <View className='justify-center pt-5 flex-row gap-2'>
            <Text className='text-lg text-gray-100'>
              Have an account already?
            </Text>
            <Link href='/sign-in' className='text-lg font-semibold text-amber-500'>Sign In</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp