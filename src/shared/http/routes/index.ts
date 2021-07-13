import { Router } from "express";
import gameRouter from "../../../modules/games/routes/games.routes";

const router = Router()

router.use("/game", gameRouter)

export default router