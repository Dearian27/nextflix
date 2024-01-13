import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/app/utils/prismadb";


export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name, password } = body;

    if(!email || !password || !name) {
      return NextResponse.error();
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
        emailVerified: new Date(),
      }
    })
    return NextResponse.json(user);

  } catch(err) {
    return NextResponse.error(); 
  }
}