import { useState } from "react";
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Task from "./components/Task";




export default function Index() {

const[task,setTask] = useState<string>("");
const[taskItems,setTaskItems] = useState<string[]>([])
const handleAddTask = () => {
  Keyboard.dismiss() // hide keyboard
  if (task.trim()!==""){
setTaskItems([...taskItems, task])
setTask("")}
} 
// add task
const completeTask = (index:number) =>{
  let itemsCopy = [...taskItems];
  itemsCopy.splice(index, 1);
  setTaskItems(itemsCopy);
}
//remove task

  return (
    <View style={styles.container}>

      <View style={styles.tasksWrapper}>
      <Text style={styles.sectionTitle}>Today's tasks</Text>
      </View>

      <View style={styles.items}>
           {
            taskItems.map((item,index)=>{
             return (
              <TouchableOpacity key={index} onPress={()=>completeTask(index)}>
              <Task text={item} />
              </TouchableOpacity>
             )
            
            })
           }


        {/* <Task text={'Task 1'}/>
        <Task text={'Task 2'}/> */}
        

      </View>
   <KeyboardAvoidingView
   behavior={Platform.OS==="web" ? 'padding': "height"}
   style={styles.writeTaskWrapper}>
<TextInput style={styles.input} placeholder={"Write the task"} value={task} onChangeText={text => setTask(text)}/>

<TouchableOpacity onPress={()=> handleAddTask()}>
<View style={styles.addWrapper}>
<Text style={styles.addText}>+</Text>
</View>
</TouchableOpacity>

   </KeyboardAvoidingView>
      
     
    </View>
    
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#50475e',
    borderRadius: 20,
    borderWidth:2,
    borderColor: '#6C63FF'
  },
  items:{
    marginTop: 30,
  },
  tasksWrapper:{
    paddingTop: 80,
    paddingHorizontal: 20,
    
  },
  sectionTitle:{
    color: '#BABABA',
    fontSize: 30,
    fontWeight:'bold'
  },
  writeTaskWrapper:{
    position: 'absolute',
    bottom: 60,
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
   
  },
  placeholder:{},
  addWrapper:{
    width:60,
    height: 60,
    backgroundColor: "#BABABA",
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  borderColor: '#6C63FF',
    borderWidth: 1,


  },
  addText:{},
  input:{
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    backgroundColor: "#BABABA",
    borderRadius: 60,
    borderColor: '#6C63FF',
    borderWidth: 1,

  },


  
})