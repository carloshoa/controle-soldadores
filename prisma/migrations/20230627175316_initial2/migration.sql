/*
  Warnings:

  - You are about to drop the column `procesos` on the `Welder` table. All the data in the column will be lost.
  - Added the required column `processos` to the `Welder` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Welder" DROP COLUMN "procesos",
ADD COLUMN     "processos" TEXT NOT NULL;
