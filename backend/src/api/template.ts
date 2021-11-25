import { Router } from "express";
import * as TemplateService from "../services/template";

const router = Router();

router.get("/template", (req, res) => {
  	res.status(200).send(TemplateService.getTemplates());
});

router.get("/fullbody", (req, res) => {
  	res.status(200).send(TemplateService.getByName("fullbody"));
});

router.get("/pull", (req, res) => {
  	res.status(200).send(TemplateService.getByName("pull"));
});

router.get("/push", (req, res) => {
  	res.status(200).send(TemplateService.getByName("push"));
});

router.get("/legs", (req, res) => {
  	res.status(200).send(TemplateService.getByName("legs"));
});

router.get("/upperbody", (req, res) => {
  	res.status(200).send(TemplateService.getByName("upperbody"));
});

router.get("/lowerbody", (req, res) => {
	res.status(200).send(TemplateService.getByName("lowerbody"));
});

router.get("/:id", (req, res) => {
  	if (isNaN(+req.params.id)){
    	res.send(`Error. Could not find anything for ${req.params.id}`);
  	}
  	res.status(200).send(TemplateService.getById(+req.params.id));
});

export default router;
