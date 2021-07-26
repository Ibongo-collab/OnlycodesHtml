import axios from  'axios';
import constant from '../../constant';

export default class ProductcategoryService {

    api = constant.apiURL + "productcategory/";


    // je récupère toutes les catégories de produits
    getAllCat(){
        return axios.get(this.api + "getAll");
    }

    // je récupère une catégorie
    getById(id){
        return axios.get(this.api + "get/" + id);
    }




}