import React, { useEffect, useState } from "react";
import { FlatList, View, StyleSheet, Image } from "react-native";
import {Text } from 'react-native';
import { getAllRegs } from "./Services";
import { Divider, ListItem } from "react-native-elements";
import { NavigationContainer, NavigationProp } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const list = [
    {
      id: 1,
      name: 'Amy Farha',
      avatar_url: '#',
      subtitle: 'Vice President',
      fone: 9999-8888
    },
    {
      id: 2,
      name: 'Chris Jackson',
      avatar_url: '#',
      subtitle: 'Vice Chairman',
      fone: 9999-8888
    }];
interface Contato{
    id: number,
    name: string,
    fone: string
}


export default function Details({ navigation }: { navigation: NavigationProp<any> } ){

    const [ rows, setRows ] = useState<Contato[]>([]);

    async function findRegs(){
         const linhas:any = await getAllRegs();
        setRows(linhas);
    }

    useEffect( ()=>{
        findRegs();
    }, [] );
    type ItemProps = {itensProps: any};

    const PersonalizeItem = ({itensProps}: ItemProps) => (
        <>
        <View style={styles.item}>
''        <Text style={styles.title}>{itensProps.name}</Text>
          <Image source={{ uri: itensProps.src}} />
        </View>
        </>
      );

    function edit(cttId:number){
        // enviar o params da rota com o id do contato.
        navigation.navigate('Add', { ContactId: cttId }) ;
    }

    return (
        
        <View style={styles.container}>
            <View style={styles.sectionHeader}>
                <Text  style={styles.text} >Details</Text>
            </View>
            <Divider />
            {
                rows.map((l, i) => (
                    <Text style={styles.item} key={i}
                    onPress={() => edit(l.id)}
                    >{ l.name } </Text>
                ))
            }
            <Divider />

            <FlatList
                data={list}
                renderItem={ ({item}) => 
                    <View style={styles.contact}>
                        <Text  onPress={() => edit(item.id)} >
                            { item.name }
                        </Text>
                        <Image style={{width : '50%', height : 30}} source={{ uri: 'https://i.pinimg.com/564x/7c/9b/d9/7c9bd9c71422e7e9e53efb83ff4097fc.jpg'}} />
                    </View>
                }
            />
            <Divider />
       </View> 
    );
}

const styles = StyleSheet.create({
    contact:{
        flex: 1
    },
   
      title: {
        fontSize: 32,
      },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 22,
    },
    sectionHeader: {
        width: '100%',
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 25,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
        alignItems: 'center',
        
      },
    text: {
        color: '#000',
        fontSize: 24
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
      },
});