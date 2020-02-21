import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '',
        padding: 20
    },
    formBox: {
        width: '95%',
        // height: '95%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    formulario: {
        width: '100%',
    },
    logotipo: {
        width: '60%',
        height: '25%',
        //paddingTop: 50,
        marginTop: 60,
        // borderWidth: 2, borderColor: 'red',
        // marginTop: 60,
        // marginBottom: 20,
    },
    inputField: {
        height: 50,
        width: '100%',
        marginBottom: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontSize: 18,
        backgroundColor: '#9370db',
        color: 'black',
        opacity: 0.8,
        borderRadius: 25,

    },
    loginButton: {
        height: 50,
        width: '100%',
        marginTop: 30,
        padding: 10,
        backgroundColor: '#9370db',
        borderRadius: 25,

    },
    textLoginButton: {
        color: 'black',
        textAlign: 'center',
        fontSize: 18,
    },
    conainerForgot: {
        width: '100%',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    textForgot: {
        fontSize: 18,
        color: '#252d30',
        fontWeight: 'bold',
        opacity: .99,
    },
    socialAccount: {
        color: '#9730db',
        fontSize: 18,
    }
});