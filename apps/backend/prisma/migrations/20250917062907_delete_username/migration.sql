/*
  Warnings:

  - You are about to drop the column `username` on the `user` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_user" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'User',
    "major_id" INTEGER,
    "student_id" TEXT NOT NULL DEFAULT '0000000000',
    "semester" INTEGER,
    "last_login" DATETIME,
    "create_time" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "user_major_id_fkey" FOREIGN KEY ("major_id") REFERENCES "major" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_user" ("create_time", "id", "last_login", "major_id", "password", "role", "semester", "student_id") SELECT "create_time", "id", "last_login", "major_id", "password", "role", "semester", "student_id" FROM "user";
DROP TABLE "user";
ALTER TABLE "new_user" RENAME TO "user";
CREATE UNIQUE INDEX "user_student_id_key" ON "user"("student_id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
