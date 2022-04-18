import vacationsDal from "../dal/vacations-dal.js"

const getAll = async () => {
    return await vacationsDal.getAll()
}

export default {
    getAll
}