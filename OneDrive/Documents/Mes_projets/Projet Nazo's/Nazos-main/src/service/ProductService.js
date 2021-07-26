import axios from  'axios';
import constant from '../../constant';

export default class ProductService{

    api = constant.apiURL + "product/";

    //je récupère tous les produits par catégorie
    getProductByCategory(id){
        return axios.get(this.api + "getAll/category/" + id)
    }
}