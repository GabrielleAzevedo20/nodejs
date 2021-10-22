import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserControllers";
import { CreateMessageController } from "./controllers/CreateMessageControllers";
import { GetLast3MessagesControllers } from "./controllers/GetLast3MessagesControllers";
import { ProfileUserControllers } from "./controllers/ProfileUserControllers";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticate";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle)
router.post("/messages", ensureAuthenticated, new CreateMessageController().handle)
router.get("/messages/last3", new GetLast3MessagesControllers().handle)
router.get("/profile", ensureAuthenticated, new ProfileUserControllers().handle)



export { router }