import { useRoute } from "@react-navigation/native";
import { View, Text } from "react-native";

type RouteParams = {
    ContactId: number;
}
export default function Add(){

    const route = useRoute();
    const { ContactId } = route.params as RouteParams;

    return (
        <View >
        <Text >Cadastro de Contato</Text>
        <Text >ID: { ContactId}</Text> {/* ira exibir o id passado pela rota */}
    </View>
    );
}