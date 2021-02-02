import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  content: {
    alignContent: 'center',
    justifyContent: 'space-between'
  },
  imageContainer: {
    alignContent: 'center',
    flexDirection: 'row',
    padding: 20,
    width: '100%',
    height: 150,
    marginTop: '20%',
    paddingLeft: 45
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    color: '#f194ff',
    paddingTop: 40
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 10
  },
  icon: {
    fontSize: 40,
    color: '#ff590a',
    paddingRight: 10
  },
  button: {
    backgroundColor: '#6FAF98'
  },
container: {    
    display: 'flex',    
    flexDirection: 'row',    
    flexWrap: 'wrap',    
    justifyContent: 'center',    
    marginTop: 30, 
},  
card: {    
    display: 'flex',    
    alignItems: 'center',    
    borderBottomWidth: 1,    
    borderBottomColor: 'black',    
    marginHorizontal: 20,    
    marginVertical: 10,  
},  
searchCont: {    
    position: 'absolute',    
    marginBottom: 70,    
    left: '20%',    
    zIndex: 1,    
    marginTop: 10,  
},  
searchfeild: {    
height: 40,    
borderWidth: 1,    
borderColor: '#000',    
textAlign: 'center',    
width: 250,    
borderRadius: 50,  
},
screenButton:{
    marginRight:40,
    marginLeft:40,
   marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#f194ff',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 10,
    color: '#FFFFFF'
  },
  textStyle: {
    marginVertical: 50,
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30
}, 
imageView: {
    width: '75%',
    height: 200 ,
    margin: 0,
    borderRadius : 7
}
});
