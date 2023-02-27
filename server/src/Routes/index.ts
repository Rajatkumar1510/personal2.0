import express from "express";
// import { getBusiness } from "../Controllers/business";
// import { getUsers } from "../Controllers/users";
// import Business from "../Models/Business";
// import Users from "../Models/Users";
const { fork } = require("child_process")
const path = require('path');
const router = express.Router();
router.get("/createcategory", async (req, res) => {
    try {
        const cond: any = req.query.cond
        let data: any
        const pathss = path.resolve(__dirname, "../Controllers/")
        const childprocess = fork(`${pathss}/business.ts`)
        // console.log(childprocess, "childprocess")
        await childprocess.send({ 'cond': cond })
        await childprocess.on('message', (message: any) => {
            console.log(message, "18")
            res.send(message)
        })
        console.log(data, "check")

        // const childprocess2 = fork(`${pathss}/users.ts`)
        // childprocess2.send({ 'cond': cond })
        // childprocess2.on('message', (message: any) => data = { ...message })
        // let uData = await getBusiness(cond)
        // let bData = await getUsers(cond)

        // data = { uData, bData }
    } catch (error) {
        res.send(error)
    }
})

export default router;