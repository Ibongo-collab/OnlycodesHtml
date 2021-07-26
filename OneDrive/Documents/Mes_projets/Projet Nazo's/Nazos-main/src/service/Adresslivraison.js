import axios from  'axios';
import constant from '../../constant';

export default class Adresslivraison{

    api = constant.apiURL + "adresslivraison/";

    // Récupérer une adresse de livraison
    getAdresslivraison(id){
        return axios.get(this.api + 'get/' + id)
    }

    // Récupérer l'adresse de livraison d'un client
    getAdresslivraisonbyClientId(id){
        return axios.get(this.api + 'getadressclient/' + id)
    }
}