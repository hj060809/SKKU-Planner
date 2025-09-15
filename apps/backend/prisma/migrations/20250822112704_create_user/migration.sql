-- CreateTable
CREATE TABLE "college" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "campus" TEXT NOT NULL,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "major" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "college_id" INTEGER NOT NULL,
    CONSTRAINT "major_college_id_fkey" FOREIGN KEY ("college_id") REFERENCES "college" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "user" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'User',
    "major_id" INTEGER,
    "student_id" TEXT NOT NULL DEFAULT '0000000000',
    "semester" INTEGER,
    "last_login" DATETIME,
    "create_time" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "user_major_id_fkey" FOREIGN KEY ("major_id") REFERENCES "major" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");
