import { Alert } from 'react-native';
import api from './Api'
import axios from 'axios';
async function CheckLogin(email:string, pass: string):Promise<boolean> {
    try {
        const data = {
            username:email, 
            password: pass
        }
        const retorno = await api.post("/login", data );
        return retorno.data.auth;
    } catch (error) {
        alert("falha na conexao");        
        return false;
    }
    
}
export async function getAllRegs() {
    try {
        const retorno = await api.get("/getAllContacts");
        console.log("Valores:" + JSON.stringify(retorno.data));
        return retorno.data;
    } catch(error){
        alert("Falha ao buscar contatos"+ error);
    }
}

export default CheckLogin;