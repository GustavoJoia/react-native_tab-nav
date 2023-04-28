import { View, Image } from "react-native";
import style from './style'

import Header from '../../components/Header';

export default function Home({navigation}) {
    return (
      <>
        <View style={style.section__header}>
          <Header texto="Bem vindo ao teste de navbar!"/>
          <Image style={{ width: '100%', height: 650 }} source={{ uri: `https://i.pinimg.com/564x/e6/f6/a9/e6f6a9636f81906116be5c85bcf95297.jpg` }} />
        </View>
        <View>
          
        </View>
      </>
    );
  }