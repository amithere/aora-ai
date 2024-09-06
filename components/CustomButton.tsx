import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {
  return (
    <TouchableOpacity 
        activeOpacity={0.7}
        className={`bg-amber-500 rounded-xl min-h-[60px] justify-center items-center
        ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
        disabled={isLoading}
        onPress={handlePress}
        
        >
        <Text className='text-primary font-semibold text-lg'>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton