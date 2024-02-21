import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

interface Params {
    params: { id: string }
}

export async function GET(request: Request, { params }: Params) {
    const task = await prisma.task.findFirst({
        where: {
            id: Number(params.id)
        }
    })
   