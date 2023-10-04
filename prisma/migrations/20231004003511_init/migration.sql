-- CreateTable
CREATE TABLE "pacientes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "senha" INTEGER NOT NULL,
    "usuario" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "secretarias" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "rg" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "consultas" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "data" DATETIME NOT NULL,
    "nomePaciente" TEXT NOT NULL,
    "nomeDentista" TEXT NOT NULL,
    "paciente_id" TEXT NOT NULL,
    "secretaria_id" TEXT NOT NULL,
    CONSTRAINT "consultas_secretaria_id_fkey" FOREIGN KEY ("secretaria_id") REFERENCES "secretarias" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "consultas_paciente_id_fkey" FOREIGN KEY ("paciente_id") REFERENCES "pacientes" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "agendas" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "data" DATETIME NOT NULL,
    "nomePaciente" TEXT NOT NULL,
    "consulta_id" TEXT NOT NULL,
    CONSTRAINT "agendas_consulta_id_fkey" FOREIGN KEY ("consulta_id") REFERENCES "consultas" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "secretarias_rg_key" ON "secretarias"("rg");
