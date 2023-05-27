// // This is your Prisma schema file,
// // learn more about it in the docs: https://pris.ly/d/prisma-schema

// generator client {
//   provider = "prisma-client-js"
// }

// datasource db {
//   provider          = "postgresql"
//   url               = env("POSTGRES_PRISMA_URL") // uses connection pooling
//   directUrl         = env("POSTGRES_URL_NON_POOLING") // uses a direct connection
//   shadowDatabaseUrl = env("POSTGRES_URL_NON_POOLING") // used for migrations
// }

// enum Role {
//   USER
//   ADMIN
// }

// model Account {
//   id                String  @id @default(cuid())
//   userId            String
//   type              String
//   provider          String
//   providerAccountId String
//   refresh_token     String? @db.Text
//   access_token      String? @db.Text
//   expires_at        Int?
//   token_type        String?
//   scope             String?
//   id_token          String? @db.Text
//   session_state     String?

//   user           User             @relation(fields: [userId], references: [id], onDelete: Cascade)
//   role           Role             @default(USER)
//   CharacterSheet CharacterSheet[]

//   @@unique([provider, providerAccountId])
// }

// model Session {
//   id           String   @id @default(cuid())
//   sessionToken String   @unique
//   userId       String
//   expires      DateTime
//   user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)
// }

// model User {
//   id            String    @id @default(cuid())
//   name          String?
//   email         String?   @unique
//   emailVerified DateTime?
//   image         String?
//   accounts      Account[]
//   sessions      Session[]
// }

// model VerificationToken {
//   identifier String
//   token      String   @unique
//   expires    DateTime

//   @@unique([identifier, token])
// }

// model CharacterSheet {
//   id            String  @id @default(cuid())
//   characterName String
//   characterData String?
//   public        Boolean @default(false)
//   author        Account @relation(fields: [authorId], references: [id])
//   authorId      String
// }
