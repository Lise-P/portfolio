import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Poste = {
  id: number;
  titre: string;
  duree: string;
  resume: string;
};

class PosteRepository {
  // The C of CRUD - Create operation

  async create(poste: Omit<Poste, "id">) {
    // Execute the SQL INSERT query to add a new poste to the "poste" table
    const [result] = await databaseClient.query<Result>(
      "insert into poste (titre, duree, resume) values (?, ?, ?)",
      [poste.titre, poste.duree, poste.resume],
    );

    // Return the ID of the newly inserted poste
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific poste by its ID
    const [rows] = await databaseClient.query<Rows>(
      "select * from poste where id = ?",
      [id],
    );

    // Return the first row of the result, which represents the poste
    return rows[0] as Poste;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all postes from the "poste" table
    const [rows] = await databaseClient.query<Rows>("select * from poste");

    // Return the array of postes
    return rows as Poste[];
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing poste

  // async update(poste: Poste) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an poste by its ID

  // async delete(id: number) {
  //   ...
  // }
}

export default new PosteRepository();
