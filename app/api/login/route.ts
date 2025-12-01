import { NextResponse } from "next/server";
import { PrismaClient } from "@/app/generated/prisma/client";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    const { email, password, name } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Missing email or password" },
        { status: 400 }
      );
    }

    const exists = await PrismaClient.user.findUnique({
      where: { email },
    });

    if (exists) {
      return NextResponse.json(
        { error: "Email already in use" },
        { status: 400 }
      );
    }

    const hashed = await bcrypt.hash(password, 10);

    const newUser = await PrismaClient.user.create({
      data: {
        email,
        password: hashed,
        name: name || null,
      },
    });

    return NextResponse.json(
      { message: "User created", userId: newUser.id },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
