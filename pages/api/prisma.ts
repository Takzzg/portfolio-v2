import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

const handler = async (request: NextApiRequest, response: NextApiResponse) => {};

export default handler;
