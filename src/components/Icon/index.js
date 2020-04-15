import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const os = Platform.OS === 'ios' ? 'ios' : 'md'

const Icon = ({ name, size, color }) => {
  return <Ionicons name={`${os}-${name}`} size={size} color={color} />
}

export default Icon
