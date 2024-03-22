
const { Logger } = require('../config')

class CrudRepository {

    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {

            const response = this.model.create(data);
            return response;

        } catch (error) {

            Logger.error("Something went wrong in CRUD REPO : create");
            throw error;
        }
    }

    async destroy(data) {
        try {

            const response = this.model.destroy({
                where: {
                    id: data
                }
            });

            return response;

        } catch (error) {

            Logger.error("Something went wrong in CRUD REPO : destroy");
            throw error;
        }
    }

    async get(data) {
        try {

            const response = this.model.findByPK(data);

            return response;

        } catch (error) {

            Logger.error("Something went wrong in CRUD REPO : get");
            throw error;
        }
    }

    async getAll(data) {
        try {

            const response = this.model.findAll({
                where: {
                    id: { [Op.gte]: 10 }
                }
            });

            return response;

        } catch (error) {

            Logger.error("Something went wrong in CRUD REPO : getAll");
            throw error;
        }
    }


    async update(key, data) {
        try {

            const response = this.model.update(data, {
                where: {
                    id: key
                }
            });

            return response;

        } catch (error) {

            Logger.error("Something went wrong in CRUD REPO : update");
            throw error;
        }
    }
}

module.exports = CrudRepository;