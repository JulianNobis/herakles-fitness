import { Router } from "express";
import * as TemplateService from "../services/template";

const router = Router();

router.get("/template", (req, res) => {
  	TemplateService.getTemplates().then((data) => {
		  res.status(200).send(data);
	  });
});

router.get("/fullbody", (req, res) => {
  	TemplateService.getByName("fullbody").then((data) => {
		  res.status(200).send(data);
	  });
});

router.get("/pull", (req, res) => {
  	TemplateService.getByName("pull").then((data) => {
		  res.status(200).send(data);
	  });
});

router.get("/push", (req, res) => {
  	TemplateService.getByName("push").then((data) => {
		  res.status(200).send(data);
	  });
});

router.get("/legs", (req, res) => {
  	TemplateService.getByName("legs").then((data) => {
		  res.status(200).send(data);
	  });
});

router.get("/upperbody", (req, res) => {
  	TemplateService.getByName("upperbody").then((data) => {
		  res.status(200).send(data);
	  });
});

router.get("/lowerbody", (req, res) => {
	TemplateService.getByName("lowerbody").then((data) => {
		res.status(200).send(data);
	});
});

router.get("/id/:id", (req, res) => {
  	TemplateService.getById(req.params.id).then((data) => {
		  res.status(200).send(data);
	  });
});

export default router;
