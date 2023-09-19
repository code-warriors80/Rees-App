import React, { useState } from 'react';
import { View } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';

const RadioInput = ({ option, onChange }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (optionValue) => {
    setSelectedOption(optionValue);
    onChange(optionValue);
  };

  return (
    <View>
      options(option) = (
        <View key={option.value} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton
            value={option.value}
            status={selectedOption === option.value ? 'checked' : 'unchecked'}
            onPress={() => handleOptionChange(option.value)}
          />
          <Text>{option.label}</Text>
        </View>
      )
    </View>
  );
};

export default RadioInput;
