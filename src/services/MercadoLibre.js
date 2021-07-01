import axios from 'axios'

export class MercadoLibre {

    async getCategory(id) {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/categories/${id}`);
        return response.data
    }

    async getProducts(categoryId) {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/products/${categoryId}`);
        return response.data
    }

    async createPreference(preference) {
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/buy`, preference);
        return response.data
    }

}

export default MercadoLibre;