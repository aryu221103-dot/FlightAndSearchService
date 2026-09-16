class CrudService {
    constructor(repository) {
        this.repository = repository;
    }

    async create(data) {
        try {
            const result = await this.repository.create(data);
            return result;
        } catch (error) {
            console.log("Something went wrong at crud service");
            throw error;
        }
    }

    async delet(id) {
        try {
            const result = await this.repository.delet(id);
            return result;
        } catch (error) {
            console.log("Something went wrong at crud service");
            throw error;
        }
    }

    async get(id) {
        try {
            const result = await this.repository.get(id);
            return result;
        } catch (error) {
            console.log("Something went wrong at crud service");
            throw error;
        }
    }

    async getAll() {
        try {
            const result = await this.repository.getAll();
            return result;
        } catch (error) {
            console.log("Something went wrong at crud service");
            throw error;
        }
    }

    async update(id, data) {
        try {
            const result = await this.repository.update(id, data);
            return result;
        } catch (error) {
            console.log("Something went wrong at crud service");
            throw error;
        }
    }
}

module.exports = CrudService;