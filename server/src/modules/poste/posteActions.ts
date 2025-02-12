import type { RequestHandler } from "express";

// Import access to data
import posteRepository from "./posteRepository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all postes
    const postes = await posteRepository.readAll();

    // Respond with the postes in JSON format
    res.json(postes);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific poste based on the provided ID
    const posteId = Number(req.params.id);
    const poste = await posteRepository.read(posteId);

    // If the poste is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the poste in JSON format
    if (poste == null) {
      res.sendStatus(404);
    } else {
      res.json(poste);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add: RequestHandler = async (req, res, next) => {
  try {
    // Extract the poste data from the request body
    const newPoste = {
      titre: req.body.titre,
      duree: req.body.duree,
      resume: req.body.resume,
    };

    // Create the poste
    const insertId = await posteRepository.create(newPoste);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted poste
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

export default { browse, read };
