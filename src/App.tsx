/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Button, SafeAreaView, View} from 'react-native';
import {AnimatedSelectable} from './AnimatedSelectable';

const App: React.FC = () => {
  const [select, setSelect] = useState(false);

  return (
    <SafeAreaView>
      <View
        style={{
          alignItems: 'center',
        }}>
        <Button title="select" onPress={() => setSelect(prev => !prev)} />
        <AnimatedSelectable selected={select} />
      </View>
    </SafeAreaView>
  );
};

export default App;
