import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

interface Params {
    params: { id: string }
}

