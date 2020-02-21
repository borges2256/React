import { StyleSheet , Dimensions} from "react-native"

export default StyleSheet.create({
    layer: {
        height: Dimensions.get('window').height * 0.25,
        // opacity: 0.7,
    },
    backgroundProfile: {
        padding: 16,
        paddingTop: 48,
    },
    container: {
        // width: 80,
        // height: 80,
        // borderRadius: 40,
        // borderColor: 'red',
        // borderWidth: 5,
    },
    imagem: {
        width: '100%',
        height: "100%",
        borderRadius: 40,
        // borderColor: 'red',
        // borderWidth: 5,
    },
})