import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ImageBackground, KeyboardAvoidingView, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';




export default function App() {
  const [price, onChangePrice] = useState(0);
  const [vatAble, onChangeVatAble] = useState(0);
  const [vatAmount, onChangeVatAmount] = useState(0)

  const total = () => {

    totalVatAble = price / 1.12

    totalVatAmount = price - totalVatAble.toFixed(2)
    return onChangeVatAble(totalVatAble.toFixed(2)), onChangeVatAmount(totalVatAmount.toFixed(2))


  }

  const clear = () => {
    onChangePrice(0);
    onChangeVatAble(null);
    onChangeVatAmount(null)
  }




  return (

    <View style={styles.container}>
      <ImageBackground style={{
        flex: 1,
        justifyContent: 'center',
      }} source={require('./assets/daiso-bg.png')} resizeMode='cover' >


        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>SALES{"\n"}INVOICE{"\n"}<Text style={{ fontSize: 36 }}>CALCULATOR</Text></Text>

        </View>
        <View style={{ marginVertical: 35, }}>
          <View style={styles.containerInput}>
            <Text style={styles.text}>TOTAL PRICE:</Text>
            <TextInput
              style={styles.input}
              value={price}
              onChangeText={onChangePrice}
              placeholder='total price'
              inputMode='numeric'
              onBlur={total}
              onFocus={clear}

            />
          </View>
          <View style={styles.containerInput}>
            <Text style={styles.text}>VAT ABLE SALES:</Text>
            <Text style={styles.textResult}>{vatAble}</Text>
          </View>
          <View style={styles.containerInput}>
            <Text style={styles.text}>VAT AMOUNT:</Text>
            <Text style={styles.textResult}>{vatAmount}</Text>

          </View>

          <Pressable
            onPress={clear}
            style={[styles.button, price ? { backgroundColor: '#EF018D', } : { backgroundColor: '#FFC7C7', }]}
            disabled={price ? false : true}
          >
            <Text style={styles.buttonText}>CLEAR</Text>

          </Pressable>


        </View>
        <Text style={{ textAlign: 'center' }}>by: Kym Rhys Mallari</Text>

        <StatusBar style="auto" />
      </ImageBackground>
    </View>

  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  container: {
    flex: 1,



  },
  headerContainer: {
    marginLeft: 16,
    marginTop: 43


  },
  headerText: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  input: {
    height: 57,
    borderBottomColor: 'black',
    borderBottomWidth: 3,
    padding: 10,
    fontSize: 32,
    textAlign: 'center'
  },
  containerInput: {
    marginHorizontal: 16,
    marginTop: 32

  },
  text: {
    fontSize: 16,
    marginBottom: 16,
    fontWeight: 'bold'

  },
  textResult: {
    fontSize: 32,
    textAlign: 'center',
    borderBottomWidth: 3,
    color: '#161616'

  },
  button: {
    height: 52,

    marginHorizontal: 16,
    marginVertical: 32,
    padding: 10,
    justifyContent: 'center',
    borderRadius: 20


  },
  buttonText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  }

});
