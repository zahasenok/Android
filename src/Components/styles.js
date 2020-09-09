import {StyleSheet, Dimensions} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const buttonsContainerWidth = deviceWidth*0.8;
const buttonsContainerHeight = deviceHeight*0.8;

const styles = StyleSheet.create({
    container : {
        width: deviceWidth,
        height: deviceHeight,
        backgroundColor: '#D6D6D6',
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    textBar :{
        width: deviceWidth*0.8,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius : 20,
        textAlign: 'center',
        padding: 15,
    },
    buttonsContainer : {
       width : buttonsContainerWidth,
       backgroundColor: 'grey' ,
       flexDirection: "row",
       flexWrap: 'wrap',
       justifyContent: 'space-around',
       paddingTop: buttonsContainerWidth*0.02,
       borderRadius: 10
    },
    button : {
        width: buttonsContainerWidth*0.23,
        height: buttonsContainerWidth*0.23,
        marginBottom :buttonsContainerWidth*0.02,
        justifyContent: 'center',
        alignItems : 'center',
        backgroundColor: '#82B2F7',
        borderRadius: 10
    },
    buttonValue : {
        fontWeight: 'bold',
        fontSize: 20
    }
});

export default styles;