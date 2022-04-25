import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,ImageBackground,Image } from 'react-native';
import { AntDesign,EvilIcons,FontAwesome,Octicons,Feather,MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {
  const device = { uri: "https://s3.envato.com/files/314811190/IMG_1599.jpg" };
  const java = { uri: "https://www.datasciencecentral.com/wp-content/uploads/2021/10/8667507462.jpeg"};
  const c_plus = { uri: "https://www.simplilearn.com/ice9/webinar_thum_image/CPP_Tutorial.jpg"};
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
      <View style={styles.settings}>
         <EvilIcons name="navicon" size={24} color="white" />
         <Text style={styles.settingText}>Course content</Text>
         <FontAwesome name="question-circle" size={24} color="white" />
        </View>        
        <Text style={styles.head}>ClassBaord</Text>

        <View style={styles.bigscreen0}>
          <View style={styles.settings1}>
            <View style={styles.smallbar}> 
              <Text style={styles.all}>Schedule(3)</Text>
              <FontAwesome name="question-circle" size={24} color="black" />
            </View>
            <View style={styles.smallbar}>
              <Text>See All</Text>
              <EvilIcons name="chevron-right" size={30} color="black" />
            </View>
          </View>  
          <View style={styles.rectangle01}>
            <View style={styles.impractangle}>
             <AntDesign name="exclamationcircleo" size={24} color="#DD2C00"/>
             <View style={styles.module1}>
               <Text style={styles.examm}>Exam</Text>
               <Text style={styles.program}>Mobile Divice Preogramming</Text>
               <Text>25/04/20222  13:00 pm</Text>
             </View>
            </View>
            <View style={styles.study1}>
              <View style={styles.tap}>
               <Text style={styles.all}>Study</Text>
              </View>
              <EvilIcons name="chevron-right" size={30} color="black" />
            </View>
          </View>
          <View style={styles.rectangle02}>
          <View style={styles.impractangle}>
          <Octicons name="book" size={24} color="black" />
             <View style={styles.module2}>
               <Text style={styles.examm}>Exam</Text>
               <Text style={styles.program}>C++ Preogramming</Text>
               <Text style={styles.date}>28/04/20222  08:00 am</Text>
             </View>
            </View>
            <View style={styles.study2}>
              <View style={styles.tap}>
               <Text style={styles.all}>Study</Text>
              </View>
              <EvilIcons name="chevron-right" size={30} color="black" />
            </View>
          </View>
          <View style={styles.rectangle02}>
           <View style={styles.impractangle}>
             <Octicons name="book" size={24} color="black" />
             <View style={styles.module2}>
               <Text style={styles.examm}>Exam</Text>
               <Text style={styles.program}>JAVA Preogramming</Text>
               <Text style={styles.date}>01/05/20222  12:00 pm</Text>
             </View>
            </View>
            <View style={styles.study2}>
              <View style={styles.tap}>
               <Text style={styles.all}>Study</Text>
              </View>
              <EvilIcons name="chevron-right" size={30} color="black" />
            </View>
          </View>
        </View>
        <View style={styles.bigadd}>
         <View style={styles.addingscreen}>
           <Text style={styles.addition}> Add an EXAM to your Schedule</Text>
         </View>
         <View style={styles.circle}>
          <Text style={styles.additionplus}>+</Text>
         </View>
         <Text style={styles.plus}>Course</Text>
        </View>
        <View style={styles. bigscreen}>
          <View style={styles.settings2}>
          <View style={styles.smallbar}> 
              <Text style={styles.all}>Course</Text>
              <FontAwesome name="question-circle" size={24} color="black" />
            </View>
            <Octicons name="search" size={24} color="black" />
            <View style={styles.smallbar}>
              <Text>All Courses</Text>
              <EvilIcons name="chevron-right" size={30} color="black" />
            </View>
          </View>
          <View style={styles.rectangle}>
           <ImageBackground source={device} resizeMode="cover" style={styles.image}>
             <View style={styles.lstone}>
             <Image style={styles.postpic}
                source={require('./assets/profile2.jpg')} />
                <Feather name="more-vertical" size={24} color="white"margin="left" />
             </View>
             <Text style={styles.lecturname}> Motho Makhetha</Text>
             <Text style={styles.fucalty}> BSSMY2S2</Text>
             <Text style={styles.text}>Mobile Device programming</Text>
             <View style={styles.storage}>
                <View style={styles.free}>
                  <Text style={styles.due}>Due today</Text>
                  <Text style={styles.excercise}>Exercise 3</Text>
                </View>
                <View style={styles.qeto}>
                 <MaterialCommunityIcons name="clipboard-text-multiple-outline" size={30} color="black" />
                 <AntDesign name="folder1" size={30} color="black" marginLeft={20} />
                </View>
              </View>
           </ImageBackground>
          </View>
          <View style={styles.rectangle1}>
          <ImageBackground source={java} resizeMode="cover" style={styles.image}>
            <View style={styles.lstone}>
              <Image style={styles.postpic}
                 source={require('./assets/profile1.jpg')} />
                <Feather name="more-vertical" size={24} color="white"margin="left" />
              </View>
             <Text style={styles.lecturname}> Motho Makhetha</Text>
             <Text style={styles.fucalty}> BSSMY2S2</Text>
             <Text style={styles.text}> JAVA programming</Text>
             <View style={styles.storage}>
                <View style={styles.free}>
                </View>
                <View style={styles.qeto}>
                <MaterialCommunityIcons name="clipboard-text-multiple-outline" size={30} color="black" />
                <AntDesign name="folder1" size={30} color="black" marginLeft={20} />
                </View>
              </View>
           </ImageBackground>
          </View>
          <View style={styles.rectangle2}>
           <ImageBackground source={c_plus} resizeMode="cover" style={styles.image}>
             <View style={styles.lstone}>
               <Image style={styles.postpic}
                 source={require('./assets/profile3.png')} />
                <Feather name="more-vertical" size={24} color="white"margin="left" />
             </View>
             <Text style={styles.lecturname}> Motho Makhetha</Text>
              <Text style={styles.fucalty}> BSSMY2S2</Text>
              <Text style={styles.text}>C++ programming</Text>
              <View style={styles.storage}>
                <View style={styles.free}>
                </View>
                <View style={styles.qeto}>
                <MaterialCommunityIcons name="clipboard-text-multiple-outline" size={30} color="black" />
                <AntDesign name="folder1" size={30} color="black" marginLeft={20} />
                </View>
              </View>
           </ImageBackground>
          </View>
          </View>
        </View>
        <View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  settings:{
    height:35,
    backgroundColor:'red',
    margin: 15,
    alignItems:'center',
   justifyContent: 'space-between',
   flexDirection: 'row',
  },
  settings1: {
    height:40,
    width:'100%',
    borderWidth: 3,
    borderColor: 'white',
    backgroundColor:'#EFEBE9',
    alignItems:'center',
   justifyContent: 'space-between',
   flexDirection: 'row',
   marginBottom: 3,
},
settings2:{
  height:40,
    width:'100%',
    borderWidth: 3,
    borderColor: 'white',
    backgroundColor:'#EFEBE9',
    alignItems:'center',
   justifyContent: 'space-between',
   flexDirection: 'row',
   marginBottom: 1,
},
bigadd:{
  height:50,
  width:'95%',
  backgroundColor:'white',
  alignContent:'center',
  flexDirection:'row',
  marginLeft:8,
},
  addingscreen:{
    height:30,
    width:'70%',
    borderWidth: 3,
    borderColor: '#2962FF',
    borderRadius:10,
    backgroundColor:'#2962FF',
    alignItems:'center',
    justifyContent:'center',
    marginLeft:10,
    marginTop:10,

},
circle:{
  height:30,
  width:30,
  borderRadius:40,
  backgroundColor:'blue',
  alignItems:'center',
  justifyContent:'center',
  marginLeft:10,
  marginTop:10,
},
addition:{
  fontSize:15,
  fontWeight:'bold',
  color:'white',
},
additionplus:{
  fontSize:50,
  fontWeight:'bold',
  color:'white',
  marginBottom:15,
},
plus:{
  fontSize:13,
  fontWeight:'bold',
  marginTop:15,
  marginLeft:5,
  color:'blue',
},
  settingText:{
    color:'white',
    fontSize:15,
    fontWeight:'bold',
  },
  rectangle0:{
    height:60,
    width:'100%',
    borderWidth: 3,
    borderColor: 'gray',
    backgroundColor:'#00000',
    alignItems:'center',
   justifyContent: 'space-between',
   flexDirection: 'row',
  },
  rectangle01:{
    height:60,
    width:'100%',
    borderWidth: 0.1,
    borderColor: 'gray',
    backgroundColor:'#FFF9C4',
    alignItems:'center',
   justifyContent: 'space-between',
   flexDirection: 'row',

  },
  bigscreen0:{
    height: 200,
    backgroundColor:'white',
    justifyContent:'center',
    margin: 12,
  },
  bigscreen:{
    height: 650,
    backgroundColor:'gray',
    alignItems:'center',
    justifyContent:'center',
    margin: 12,
  },
  rectangle: {
    width:'100%',
    height: 200,
    borderWidth: 3,
    borderColor: 'red',
    borderRightColor:'white',
    borderLeftColor:'white',
    marginTop: 5,
    display: "flex",
    justifyContent: "space-evenly",
    borderRadius: 10,
  },
  rectangle1: {
    width:'100%',
    height: 200,
    borderWidth: 3,
    borderColor: 'red',
    borderRightColor:'white',
    borderLeftColor:'white',
    marginTop: 5,
    display: "flex",
    justifyContent: "space-evenly",
    borderRadius: 10,
  },
  rectangle2: {
    width:'100%',
    height: 200,
    borderWidth: 3,
    borderColor: 'red',
    borderRightColor:'white',
    borderLeftColor:'white',
    marginTop: 5,
    display: "flex",
    justifyContent: "space-evenly",
    borderRadius: 10,
  },
  head:{
    color:'black',
    fontSize:15,
    fontWeight:'bold',
    marginLeft: 20,
  },
  smallbar:{
    flexDirection: 'row',
    marginLeft:15,
    alignItems:'center',
  },
  all:{
    color:'black',
    fontSize:13,
    fontWeight:'bold',
    margin: 10,
  },
  module1:{
    marginLeft:15,
    alignItems:'center',
    backgroundColor:'#FFF9C4',
    borderWidth: 3,
    borderColor: '#FFF9C4',
    borderRightColor:'#FFF9C4',
    borderLeftColor:'#9E9E9E',
    height:50,
  },
  module2:{
    marginLeft:15,
    alignItems:'center',
    backgroundColor:'#FAFAFA',
    borderWidth: 3,
    borderColor: '#FAFAFA',
    borderRightColor:'#FAFAFA',
    borderLeftColor:'#9E9E9E',
    height:50,
  },
  examm:{
    color:'black',
    fontSize:11,
    fontWeight:'bold',
  },
  program:{
    color:'black',
    fontSize:14,
    fontWeight:'bold',
  },
  date:{
    fontSize:9,
    fontWeight:'normal',
  },
  study1:{
    flexDirection: 'row',
    marginLeft:15,
    alignItems:'center',
    backgroundColor:'#FFF9C4',
    height:50,
    justifyContent: "space-evenly",
  },
  study2:{
    flexDirection: 'row',
    marginLeft:15,
    alignItems:'center',
    backgroundColor:'#FAFAFA',
    height:50,
    justifyContent: "space-evenly",
  },
  tap:{
    alignItems:'center',
    backgroundColor:'green',
    height:20,
    width:60,
    justifyContent: 'center',
    borderRadius: 5,
  },
  impractangle:{
    height:61,
    marginLeft:10,
    backgroundColor:'FFF9C4',
    alignItems:'center',
    flexDirection:'row',
  },
  rectangle02:{
    height:60,
    width:'100%',
    borderWidth: 0.5,
    borderLeftColor:'#FAFAFA',
    borderTopColor:'#FAFAFA',
    borderColor: 'gray',
    backgroundColor:'#FAFAFA',
    alignItems:'center',
   justifyContent: 'space-between',
   flexDirection: 'row',
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 25,
    lineHeight: 35,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
  storage:{
    backgroundColor:'white',
    height:53,
    width:'100%',
    marginTop:1,
    borderBottomStartRadius:4,
    borderBottomRightRadius:4,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  fucalty:{
    color: "white",
    fontSize: 20,
    lineHeight: 30,
    fontWeight: "bold",
  },
  lecturname:{
    color: "white",
    fontSize: 15,
    lineHeight: 20,
    fontWeight: "bold",
  },
  postpic:{
    width: 50,
    height: 50,
    borderRadius:80,
    marginRight:10,
    marginTop:5,
    alignItems:'flex-start'
   },
   lstone:{
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'space-between',
   },
   qeto:{
     flexDirection:'row',
     justifyContent:'space-between',
     marginRight:50,
     width: 130,
   },
   due:{
     color:'#546E7A',
     fontWeight:'bold',
     fontSize:12,
     marginLeft:10
   },
   excercise:{
     fontSize:12,
     fontWeight:'normal',
     marginLeft:10,
   },
});
