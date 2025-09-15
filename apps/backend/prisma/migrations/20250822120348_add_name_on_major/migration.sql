/*
  Warnings:

  - Added the required column `major_name` to the `major` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_major" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "college_id" INTEGER NOT NULL,
    "major_name" TEXT NOT NULL,
    CONSTRAINT "major_college_id_fkey" FOREIGN KEY ("college_id") REFERENCES "college" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_major" ("college_id", "id") SELECT "college_id", "id" FROM "major";
DROP TABLE "major";
ALTER TABLE "new_major" RENAME TO "major";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
