import axios from  'axios';
import constant from '../../constant';

export default class ClientService{

    api = constant.apiURL + "client/";

    // Ajouter un client
    addClient(client){
        return axios.post(this.api + 'save', client)
    }

    // Récupérer un client
    getClient(id){
        return axios.get(this.api + 'get/' + id)
    }


}