import Business from "../Models/Business"
process.on('message', (message: any) => {
    console.log(message, "3")
    const resp = getBusiness(message.cond)
    console.log(resp, "5")
    if (typeof process.send === 'function') {
        console.log(resp, "hhek")
        process.send(resp)
    }
    else {
        console.log("else")
    }
})
export const getBusiness = async (cond: any) => {
    const d = await Business.find({ isDeleted: cond }).limit(100).lean()
    console.log(d, "checking")
    return { d }
}