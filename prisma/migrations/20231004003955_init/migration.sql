/*
  Warnings:

  - You are about to drop the `agendas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `paciente_id` on the `consultas` table. All the data in the column will be lost.
  - You are about to drop the column `secretaria_id` on the `consultas` table. All the data in the column will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "agendas";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "agenda" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "data" DATETIME NOT NULL,
    "nomePaciente" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_consultas" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "data" DATETIME NOT NULL,
    "nomePaciente" TEXT NOT NULL,
    "nomeDentista" TEXT NOT NULL
);
INSERT INTO "new_consultas" ("data", "id", "nomeDentista", "nomePaciente") SELECT "data", "id", "nomeDentista", "nomePaciente" FROM "consultas";
DROP TABLE "consultas";
ALTER TABLE "new_consultas" RENAME TO "consultas";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
