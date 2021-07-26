<template>
  <div class="Product">
    <Header />



    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";
import constant from "../../constant";
/*import ProductService from "../service/ProductService"
  import categoryService from "../service/categoryService"
  import accompagnementService from "../service/AccompagnementService"*/
// import Script from '../../module/script'

export default {
  name: "Product",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      id: null,
      products: [],
      supplement: [],
      boisson: [],
      sauces: [],
      category: null,
      productService: null,
      categoryService: null,
      accompagnementService: null,
      // script: null
    };
  },
  methods: {
    getCategory(){
      // Méthode qui récupère une catégorie x
      axios.get(constant.apiURL + 'productcategory/get/' + this.id)
      .then((response) => {
        console.log(response);
        this.category = response.data;
      }).catch((error) => {
        console.log(error);
      });
    },
    getProducts() {
      // Méthode qui récupère tous les produits de la catégorie x
      axios
        .get(constant.apiURL + 'product/getAll/category/' + this.id)
        .then((response) => {
          console.log(response);
          this.products = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    /* showproduct() {
        this.productService.getProductByCategory(this.id).then(product => {
          this.products = product.data
        });
      },
      getcategory() {
        this.categoryService.getById(this.id).then(category => {
          this.category = category.data
        });
      },
      getSupplement() {
        this.accompagnementService.getAccompagnementByCat(this.id, "Supplément").then(sup => {
          this.supplement = sup.data
        });
      },
      getBoisson() {
        this.accompagnementService.getAccompagnementByCat(this.id, "Boisson").then(sup => {
          this.supplement = sup.data
        });
      },
      getSauce() {
        this.accompagnementService.getAccompagnementByCat(this.id, "Sauce").then(sup => {
          this.supplement = sup.data
        });
      }*/
  },
  created() {
    // this.script = new Script();
  },
  beforeMount() {
    // this.id = parseInt(this.script.decrypt(localStorage.getItem('idprod')));
    this.id = localStorage.getItem("idcat");
  },
  mounted() {
    this.getProducts();
    this.getCategory();
    /*this.showproduct();
      this.getcategory();
      // pour les suppléments
      this.getSupplement();
      // pour les boissons
      this.getBoisson();
      // pour les sauces
      this.getSauce();*/
  },
};
</script>

<style lang="css" scoped>
a {
  text-decoration: none;
}

.nav__btn {
  background-color: var(--first-color);
  color: white;
  padding: 1rem 2rem;
  border-radius: 3rem;
}

.nav__btn:hover {
  color: white;
  background-color: var(--first-color-alt);
}

.link-home:hover {
  color: #ea8a1e;
}

.price {
  color: #ea8a1e;
}

.description {
  font-size: 15px;
}

.nom {
  font-size: 15px;
}

.category {
  font-size: 16px;
}

.content-category {
  margin-bottom: 100px;
}

.label {
  font-size: 24px;
}

.label-nom {
  font-size: 14px;
}

.text-banner-category {
  color: black;
}

.imageprod {
  border-radius: 1rem 1rem 0% 0%;
}

.product_category {
  width: 100%;
  height: auto;
  padding: 15px;
  margin-bottom: 10px;
  cursor: pointer;
  border: 1px solid rgb(190, 189, 189);
}

.product_category:hover {
  transition: 0.5s;
  border: 1px solid rgb(146, 146, 146);
}

#container_product {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: auto;
  height: auto;
  border-radius: 0.5rem;
  padding: 2px;
}

#container_product1 {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: auto;
  height: auto;
  border-radius: 0.5rem;
  padding: 2px;
  margin-top: 50px;
}

.content-panier {
  width: 335px;
  height: auto;
  margin-bottom: 40px;
  border-radius: 0.5rem;
  padding-bottom: 20px;
  padding-top: 10px;
  margin-right: 8px;
}

.banner-category {
  width: 665px;
  height: 100%;
  margin-bottom: 20px;
  padding: 2%;
}

.content-image {
  width: 320px;
  height: auto;
  margin-bottom: 40px;
  border-radius: 0.5rem;
  padding: 20px;
  margin-right: 25px;
  cursor: pointer;
}

.content-noimage {
  width: 320px;
  height: auto;
  margin-bottom: 40px;
  border-radius: 0.5rem;
  padding: 20px;
  margin-right: 25px;
  cursor: pointer;
}

/* Media querie */

@media (max-width: 1200px) {
  .content-noimage {
    width: 280px;
    height: auto;
    margin-right: 20px;
  }

  .content-image {
    width: 280px;
    height: auto;
    margin-right: 20px;
  }

  .banner-category {
    width: 580px;
  }
}

@media (max-width: 990px) {
  .content-image,
  .content-noimage {
    width: 100%;
    margin-right: 0;
  }
}

@media (min-width: 769px) {
  .tablette,
  #container_product1 {
    display: none;
  }
}

@media (max-width: 769px) {
  .row {
    display: none;
  }

  .grande-section {
    margin-top: 10%;
  }

  .banner-category {
    width: 100%;
  }

  .content-noimage {
    width: 336px;
    height: auto;
    margin-right: 9px;
  }

  .content-image {
    width: 336px;
    height: auto;
    margin-right: 9px;
  }
}

@media (max-width: 500px) {
  .grande-section {
    margin-top: 25%;
  }
}
</style>
