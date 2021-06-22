import axios from 'axios'

export class MercadoLibre {

    async getCategory(id) {
        const response = await axios.get(`http://localhost:4000/categories/${id}`);
        return response.data
    }

    async getProducts(categoryId) {
        const response = await axios.get(`http://localhost:4000/products/${categoryId}`);
        return response.data
    }

}

export default MercadoLibre;