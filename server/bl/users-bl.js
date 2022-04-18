 import usersDal from "../dal/users-dal.js"

const getAll = async () => {
    return await usersDal.getAll()
}

export default {
    getAll
}