import axios from  'axios';
import constant from '../../constant';

export default class Accompagnement {

    api = constant.apiURL + "accompagnement/";

    // retourne les accompagnements par catégorie d'accompagnements
    getAccompagnementByCat(id, name){
        return axios.get(this.api + "getByCat/" + id + "/" + name)
    }

}