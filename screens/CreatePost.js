import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
  StatusBar,
  SafeAreaView,
  TextInput,
  ScrollView
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { RFValue } from "react-native-responsive-fontsize";

export default class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
          preview_image: "image_1",
          dropDownHeight: 40
        };
      }
    
      render() {

        let preview_images = {
          image_1: require("../assets/image_1.jpg"),
          image_2: require("../assets/image_2.jpg"),
          image_3: require("../assets/image_3.jpg"),
          image_4: require("../assets/image_4.jpg"),
          image_5: require("../assets/image_5.jpg"),
          image_6: require("../assets/image_6.jpg"),
          image_7: require("../assets/image_7.jpg")
        };

          return (
            <View style={styles.container}>
              <SafeAreaView style={styles.droidSafeArea}/>
              <View style={styles.appTitle}>
                <View style={styles.appIcon}>
                    <Image source={require('../assets/logo.png')} style={styles.iconImage}/>
                </View>

                <View style={styles.appTitleTextContainer}>
                    <Text style={styles.appTitleText}>New Post</Text>
                </View>
              </View>

              <View styles={styles.fieldsContainer}>
                <ScrollView>
                    <Image source={preview_images[this.state.preview_image]} style={styles.preview_image}/>

                    <View style={{height: RFValue(this.state.dropDownHeight)}}>
                        <DropDownPicker
                        items={[
                          {label: 'image_1', value: 'image_1'},
                          {label: 'image_2', value: 'image_2'},
                          {label: 'image_3', value: 'image_3'},
                          {label: 'image_4', value: 'image_4'},
                          {label: 'image_5', value: 'image_5'},
                          {label: 'image_6', value: 'image_6'},
                          {label: 'image_7', value: 'image_7'},
                        ]}
      
                        defaultValue={
                          this.state.preview_image
                        }
                        
                        open={
                          this.state.dropDownHeight == 170 ? true : false
                        }

                        onOpen={() => {
                          this.setState({dropDownHeight: 170})
                        }}

                        onClose={() => {
                          this.setState({dropDownHeight: 40})
                        }}

                        style={{backgroundColor: 'transparent', borderWidth: 1, borderColor: 'white'}}

                        textstyle={{color: this.state.dropDownHeight== 170 ? 'black' : 'white',}}

                        onSelectItem={(item) => this.setState({preview_image: item.value})}
                      />
                    </View>

                    <TextInput 
                    style={styles.inputFont} 
                    onChangeText={caption => this.setState({caption})}
                    placeholder={"Caption"}
                    placeholderTextColor="white"
                    />
                </ScrollView>
              </View> 
              <View style={{ flex: 0.08}} />
            </View>
          );
        }
      }

      const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: "#15193c"
        },
        droidSafeArea: {
          marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
        },
        appTitle: {
          flex: 0.2,
          flexDirection: "row"
        },
        appIcon: {
          flex: 0.3,
          justifyContent: "center",
          alignItems: "center"
        },
        iconImage: {
          width: "100%",
          height: "100%",
          resizeMode: "contain"
        },
        appTitleTextContainer: {
          flex: 0.7,
          justifyContent: "center"
        },
        appTitleText: {
          color: "white",
          fontSize: RFValue(28),
        },
      
        fieldsContainer: { 
          flex: 0.85, 
        }, 
        
        preview_image: { 
          width: "93%", 
          height: RFValue(250), 
          alignSelf: "center", 
          borderRadius: RFValue(10), 
          marginVertical: RFValue(10), 
          resizeMode: "contain", 
        },
      
        inputFont: { 
          height: RFValue(40), 
          borderColor: "white", 
          borderWidth: RFValue(1), 
          borderRadius: RFValue(10), 
          paddingLeft: RFValue(10), 
          color: "white", 
          marginTop: RFValue(10), 
        }, 
      }
    );
      