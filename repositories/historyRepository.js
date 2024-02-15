const {history} = require("../models")

class historyRepository {
    static async createHistory({
name, nik, times
    }) {
       
    const createHistory = history.create({
        name: name, nik: nik, times: times
    })
    return createHistory;
    }
}

module.exports = historyRepository