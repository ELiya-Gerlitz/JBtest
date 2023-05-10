import express from "express"
import cors from "cors"
import appConfig from "./2-Utils/appConfig"
import meetingController from "./6-Controllers/meetingsController"
import catchAll from "./3-Middleware/catchAll"






const server= express()
server.use(cors())
server.use(express.json())

server.use("/api", meetingController)
// server.use("/api", authController)
// server.use("*", routeNotFound)
server.use(catchAll)


server.listen(appConfig.port, ()=> console.log(`I am listening to port ${appConfig.port}`))


console.log("i am app")