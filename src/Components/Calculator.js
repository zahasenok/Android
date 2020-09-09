import React from 'react';
import {View,Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';

const Calculator = () =>{
    return(
        <View style={styles.container}>
            <Text style={styles.textBar}>Zakhar Zaliznyi КП-82</Text>
            <View style={styles.buttonsContainer}>
                <ButtonItem value={'1'}/>
                <ButtonItem value={'2'}/>
                <ButtonItem value={'3'}/>
                <ButtonItem value={'+'}/>
                <ButtonItem value={'4'}/>
                <ButtonItem value={'5'}/>
                <ButtonItem value={'6'}/>
                <ButtonItem value={'-'}/>
                <ButtonItem value={'7'}/>
                <ButtonItem value={'8'}/>
                <ButtonItem value={'9'}/>
                <ButtonItem value={'*'}/>
                <ButtonItem value={'C'}/>
                <ButtonItem value={'0'}/>
                <ButtonItem value={'='}/>
                <ButtonItem value={'/'}/>
            </View>
        </View>
    )
}

const ButtonItem = ({value}) =>{
    return(
        <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonValue}>{value}</Text>
        </TouchableOpacity>
    )
}
export default Calculator;