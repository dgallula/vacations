import followersDal from "../dal/followers-dal.js"

const getAll = async () => {
    return await followersDal.getAll()
}

export default {
    getAll
}