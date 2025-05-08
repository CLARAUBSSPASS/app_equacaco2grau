import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, a, setA, b, setB, c, setC, root1, root2, calcularBhaskara, limparCampos } from 'react-native';
 
 
export default function App() {
 
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [root1, setRoot1] = useState(null);
  const [root2, setRoot2] = useState(null);
 
  function calcularBhaskara() {
    const delta = b * b - 4 * a * c;
    if (delta < 0) {
      setRoot1('Sem raízes reais');
      setRoot2('Sem raízes reais');
      return;
    }
    const sqrtDelta = Math.sqrt(delta);
    const r1 = (-b + sqrtDelta) / (2 * a);
    const r2 = (-b - sqrtDelta) / (2 * a);
    setRoot1(r1.toFixed(2));
    setRoot2(r2.toFixed(2));
  }

  function limparCampos() {
    setA('');
    setB('');
    setC('');
    setRoot1(null);
    setRoot2(null);
  }

  return (
    <View style={styles.container}>

      {/* Primeira parte - cabeçalho */}
      
      <View style={styles.header}>
        <Image source={require('./assets/icon.avif')} style={styles.image} />
        <Text style={styles.headerText}>App Equação de 2º Grau</Text>
      </View>

      {/* Para colocar os valores para serem calculados */}

      <Text style={styles.instrucao}>Entre com os valores nos campos abaixo :</Text>
      <View style={styles.inputRow}>
        <TextInput style={styles.input} keyboardType="numeric" value={a} onChangeText={setA} placeholder="0" />
        <Text style={styles.esquacaoContinuacao}>x² +</Text>
        <TextInput style={styles.input} keyboardType="numeric" value={b} onChangeText={setB} placeholder="0" />
        <Text style={styles.esquacaoContinuacao}>x +</Text>
        <TextInput style={styles.input} keyboardType="numeric" value={c} onChangeText={setC} placeholder="0" />
        <Text style={styles.esquacaoContinuacao}>= 0</Text>
      </View>

      {/* vai mostrar os resultados apresentados */}
      <View style={styles.resultado}>
        <Text style={styles.resultadoText}>Raiz 1: <Text style={styles.bold}>{root1 ?? 0}</Text></Text>
        <Text style={styles.resultadoText}>Raiz 2: <Text style={styles.bold}>{root2 ?? 0}</Text></Text>
        
        

         {/* Fórmula de Bhaskara */}
      <Text style={styles.formulaTitle}>Fórmula de Bhaskara</Text>
      <Text style={styles.formula}>x = (-b ± √(b² - 4ac)) / (2a)</Text>

      {/* Botões (calcular ou limpar) */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.calcButton} onPress={calcularBhaskara}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.clearButton} onPress={limparCampos}>
          <Text style={styles.buttonText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      {/* créditos ou direitos autorais */}
      <Text style={styles.footer}>copyright 2024 - Desenvolvido por Clara</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

  },
  header: {
    backgroundColor: '#ec8d32',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 50,
    borderRadius: 10,
    marginBottom: 20,
    margin: 0,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  //caixa 2

  instrucao: {
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'center',
    padding: 50,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: 50,
    height: 40,
    marginHorizontal: 5,
    textAlign: 'center',
    fontSize: 18,
    borderRadius: 5,
  },
  esquacaoContinuacao: {
    fontSize: 18,
  },

//terceira caixa 

  resultado: {
    backgroundColor: '#f2c59c',
    width: '100%',
    borderRadius: 10,
    padding: 90,
    marginBottom: 20,
    alignItems: 'center',
    margin: 170,
  },
  resultadoText: {
    fontSize: 18,
    marginVertical: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
  formulaTitle: {
    color: '#ec8d32',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  formula: {
    fontSize: 16,
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  calcButton: {
    backgroundColor: '#3366FF',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  clearButton: {
    backgroundColor: '#ec8d32',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  footer: {
    fontSize: 12,
    marginTop: 'auto',
    color: '#888',
  },
});
