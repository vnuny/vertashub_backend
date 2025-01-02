import { Router } from "express";
import { GetInstagramOauthHandler } from "./instagram/get";
import InstagramOauthCallback from "./instagram/callback";
const AuthRouter = Router();

//instagram
AuthRouter.get("/instagram", GetInstagramOauthHandler);
AuthRouter.get("/instagram/callback", InstagramOauthCallback);

export default AuthRouter;
