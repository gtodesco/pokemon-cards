import http from "../libs/axios-config";

class PokemonService {

    async getAll() {
        try {
            const response = await http.get('/cards?orderBy=name');

            return response.data;
        } catch (error) {
            console.log('ERROR:', error);
        }
    }

    async getById(id) {
        try {
            const response = await http.get(`/cards/${id}`);

            return response.data;
        } catch (error) {
            console.log('ERROR:', error);
        }
    }

    async getByName(name) {
        try {
            const response = await http.get(`/cards/?orderBy=name&q=name:*${name}*`);

            return response.data;
        } catch (error) {
            console.log('ERROR:', error);
        }
    }

}

export default new PokemonService();