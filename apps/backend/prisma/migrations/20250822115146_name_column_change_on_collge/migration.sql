/*
  Warnings:

  - You are about to drop the column `name` on the `college` table. All the data in the column will be lost.
  - Added the required column `college_name` to the `college` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_college" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "campus" TEXT NOT NULL,
    "college_name" TEXT NOT NULL
);
INSERT INTO "new_college" ("campus", "id") SELECT "campus", "id" FROM "college";
DROP TABLE "college";
ALTER TABLE "new_college" RENAME TO "college";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
