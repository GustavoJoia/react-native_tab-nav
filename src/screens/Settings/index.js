import { View, Image } from "react-native";
import style from './style'

import Header from '../../components/Header';

export default function Home({navigation}) {
    return (
      <>
        <View style={style.section__header}>
          <Header texto="Aqui você poderá mexer em opções!"/>
          <Image style={{ width: '100%', height: 650 }} source={{ uri: `https://i.pinimg.com/564x/e9/76/29/e976297a9c957220e8af95f955c7dcb4.jpg` }} />
        </View>
        <View>
          
        </View>
      </>
    );
  }