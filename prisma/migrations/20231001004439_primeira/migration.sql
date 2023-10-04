-- CreateTable
CREATE TABLE "Chamado" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "descChamado" TEXT NOT NULL,
    "dataAberturaChamado" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "idUsuario" INTEGER NOT NULL,
    "idCategoria" INTEGER NOT NULL,
    "idAndamento" INTEGER NOT NULL,
    CONSTRAINT "Chamado_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Chamado_idCategoria_fkey" FOREIGN KEY ("idCategoria") REFERENCES "Categoria" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Chamado_idAndamento_fkey" FOREIGN KEY ("idAndamento") REFERENCES "Andamento" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomeUsuario" TEXT NOT NULL,
    "emailUsuario" TEXT NOT NULL,
    "telefoneUsuario" TEXT NOT NULL,
    "idTipoUsuario" INTEGER NOT NULL,
    CONSTRAINT "Usuario_idTipoUsuario_fkey" FOREIGN KEY ("idTipoUsuario") REFERENCES "TipoUsuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Andamento" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "descAndamento" TEXT
);

-- CreateTable
CREATE TABLE "TipoUsuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tipoUsuario" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Suporte" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomeSuporte" TEXT,
    "cargoSuporte" TEXT
);

-- CreateTable
CREATE TABLE "Categoria" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "descCategoria" TEXT
);

-- CreateTable
CREATE TABLE "TratativaChamado" (
    "tratInicio" DATETIME,
    "tratFim" DATETIME,
    "idChamado" INTEGER NOT NULL,
    "idSuporte" INTEGER NOT NULL,

    PRIMARY KEY ("idChamado", "idSuporte"),
    CONSTRAINT "TratativaChamado_idChamado_fkey" FOREIGN KEY ("idChamado") REFERENCES "Chamado" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "TratativaChamado_idSuporte_fkey" FOREIGN KEY ("idSuporte") REFERENCES "Suporte" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_emailUsuario_key" ON "Usuario"("emailUsuario");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_telefoneUsuario_key" ON "Usuario"("telefoneUsuario");

-- CreateIndex
CREATE UNIQUE INDEX "TipoUsuario_tipoUsuario_key" ON "TipoUsuario"("tipoUsuario");
