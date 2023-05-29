// manage user

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	console.log("req", req);

	// const body = await req.json();
	// console.log("body", body);

	// const user = await prisma.user.findUnique({ where: { id: body.params.user_id } });
	// console.log("user", user);

	return NextResponse.json({});
}
