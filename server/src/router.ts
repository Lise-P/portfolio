import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";
import posteActions from "./modules/poste/posteActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

router.get("/api/postes", posteActions.browse);
router.get("/api/postes/:id", posteActions.read);
router.post("/api/postes", posteActions.add);
router.delete("/api/postes/:id", posteActions.destroy);

/* ************************************************************************* */

export default router;
