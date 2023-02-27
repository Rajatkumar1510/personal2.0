import Users from "../Models/Users"

process.on('message', (message: any) => {
    const resp = getUsers(message.cond)
    if (typeof process.send === 'function') {
        process.send(resp)
    }
})
export const getUsers = async (cond: any) => {
    const d = await Users.find({ isDeleted: cond }).limit(100).lean()
    try {
        return { d }
    } catch (error) {
        return error
    }
}