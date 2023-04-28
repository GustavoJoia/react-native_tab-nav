import { View, Text } from "react-native"
import style from "./style"

export default function Header(props){
    return(
        <View style={style.container}>
            <Text style={style.title}>{props.texto}</Text>
        </View>
    )
}