import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    section__header:{
        flex: 1, 
        alignItems: 'center', 
        //justifyContent: 'center'
    },

    section__card:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch'
    },

    image:{
        width: '100%',
        height: '100%'
    },
    
    column: {
        flex: 1,
        margin: 5,
      }
})

export default style;