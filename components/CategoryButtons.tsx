import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import React,{useRef,useState} from 'react'
import Colors from '@/constants/Colors'
import { ScrollView } from 'react-native-gesture-handler'
import destinationCategories from '@/data/categories'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
type Props={
  onCategoryChanged:(category:string)=>void;
}
const CategoryButtons = ({onCategoryChanged}:Props) => {
  const scrollRef=useRef<ScrollView>(null);
  const itemRef = useRef<TouchableOpacity [] | null[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const handleSelectCategory = (index: number) => {
    const selected = itemRef.current [index];

    setActiveIndex(index);
    
    selected?.measure((x) => {
    
    scrollRef.current?.scrollTo({x:x, y:0, animated: true});
    });
    onCategoryChanged(destinationCategories[index].title);
  };
  return (
    <GestureHandlerRootView>
    <View>
      <Text style={styles.title}>Categories</Text>
      <ScrollView ref={scrollRef}
      horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{
        gap:20,
        paddingVertical:10,
        marginBottom:10,
      }}>
        {destinationCategories.map((item,index)=>(
          <TouchableOpacity key={index}

          ref={(el) => itemRef.current [index] = el}
          
           onPress={()=>handleSelectCategory(index)} style={activeIndex === index? styles.categorybtnactive:styles.catbtn}>
            <MaterialCommunityIcons name={item.iconName as any} size={20} style={activeIndex === index? styles.categorybtnactivetxt:styles.categorybtninit}/>
          <Text style={activeIndex === index? styles.categorybtnactivetxt:styles.categorybtntxt}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
    </GestureHandlerRootView>
  )
}

export default CategoryButtons
const styles=StyleSheet.create({
    title:{
      fontSize:22,
      fontWeight:'700',
      color:Colors.black,
    },
    catbtn:{
      flexDirection:'row',
      alignItems:'center',
      backgroundColor:Colors.white,
      paddingHorizontal:16,
      paddingVertical:10,
      borderRadius:10,
      shadowColor:'#333333',
      shadowOffset:{width:1,height:2},
      shadowOpacity:0.1,
      shadowRadius:3,
    },
    categorybtntxt:{
      marginLeft: 5,
      
      color: Colors.black,

    },
    categorybtnactive:{
      flexDirection:'row',
      alignItems:'center',
      backgroundColor:Colors.black,
      paddingHorizontal:16,
      paddingVertical:10,
      borderRadius:10,
      shadowColor:'#333333',
      shadowOffset:{width:1,height:2},
      shadowOpacity:0.1,
      shadowRadius:3,
    },
    categorybtnactivetxt:{
      marginLeft: 5,
      
      color: Colors.white,
    },
    categorybtninit:{
      marginLeft: 5,
      
      color: Colors.black,
    }
})

