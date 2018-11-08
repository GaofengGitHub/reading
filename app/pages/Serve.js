/*
 * 说明：服务协议
 * 时间：2018/11/6 15:52
 * 创建：Vin Gogh
 */

import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Button ,
  Alert
} from 'react-native';
console.log("我的demoindex")

class Serve extends Component {
  static navigationOptions = {
    header: null
  }
  componentDidMount() {
    // SplashScreen.hide();
  }
  notAgree(){
    
    Alert.alert(
      '温馨提示',
      '智慧少先队会将您的信息用于提供服务或改善服务体验，我们将保护您的信息安全。',
      [
        {text: '知道了', onPress: () => console.log('知道同意协议提示了')},
      ],
      { cancelable: false }
    )
  }
  agree(){
    alert("同意")
  }
  render() { 
    console.log('1234123')
    return (
      <View style={styles.content}>
        <View >
            <Text style={styles.head}>《智慧少先队APP使用须知》</Text>
            <Text style={styles.lineP}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;《智慧少先队》软件已获中华人民共和国国家版权局计算机软件著作权登记（登记号:2018SR476244）,著作权所有人为江苏瑞银文化传媒有限公司和中国共产主义青年团南京市委员会。任何第三方及个人，在未获得著作权人正式书面授权的情况下，擅自使用、复制、转载等一切行为，均视为侵权，著作权人将追究其相应法律责任。</Text>
            <Text style={styles.lineP}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;江苏瑞银文化传媒有限公司</Text>
            <Text style={styles.lineP}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中国共产主义青年团南京市委员会</Text>
            <Text style={styles.lineP}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;二0一八年八月</Text>
            <Text style={styles.lineP}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如您已阅读并同意以上所述，请点击“同意”并开始使用我们的产品和服务。</Text>
        </View>
        <View style={styles.btnBlockServe}>
            <Button
                onPress={this.notAgree}
                title="不同意"
                color="#007aff"
                style={{width:180}}
                accessibilityLabel="not agree the agreement"
            /> 
            <Button
                onPress={this.agree}
                title="同    意"
                color="#007aff"
                style={{width:120}}
                accessibilityLabel="agree the agreement"
            />
        </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  content:{
    paddingLeft:10,
    paddingRight:10,
    height:"100%", 
    width:"100%"
  },
  head:{
    fontSize:24,
    textAlign:"center",
    marginTop:30,
    marginBottom:5, 
    color:"#000"
  },
  lineP:{
    color:"#8f8f94",
    lineHeight:20,
    marginTop:5,
    marginBottom:5
  },
  btnBlockServe:{
    position:"absolute", 
    bottom:0, 
    left:10,
    width:"100%",  
    flexDirection:"row", 
    justifyContent:"space-between",
    alignItems:"center",  
    paddingTop:15, 
    paddingBottom:15,
    paddingLeft:30,
    paddingRight:30,
    borderTopColor:"#ccc",
    borderTopWidth:0.5 
  }
});

export default  Serve;
