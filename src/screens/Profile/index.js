import { View, Image } from "react-native";
import style from './style'

import Header from '../../components/Header';

export default function Home({navigation}) {
    return (
      <>
        <View style={style.section__header}>
          <Header texto="Aqui será o seu perfil!"/>
          <Image style={{ width: '100%', height: 650 }} source={ require(`../../../assets/img/profile.jpg`) } />
        </View>
        <View>
          
        </View>
      </>
    );
  }