/*
  Warnings:

  - A unique constraint covering the columns `[cpf]` on the table `Welder` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[sinete]` on the table `Welder` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Welder" ADD COLUMN     "ativo" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Welder_cpf_key" ON "Welder"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Welder_sinete_key" ON "Welder"("sinete");
