import { NextResponse } from "next/server";
import { PrismaClient } from "@/app/generated/prisma/client";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();  // ✅ FIXED

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Missing fields" },
        { status: 400 }
      );
    }

    // ✅ FIXED — use prisma.user (instance)
    const existing = await prisma.user.findUnique({
      where: { email },
    });

    if (existing) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const hashed = await bcrypt.hash(password, 10);

    // ✅ FIXED — use prisma.user (instance)
    const user = await prisma.user.create({
      data: {
        email,
        password: hashed,
      },
    });

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" }
    );

    return NextResponse.json({ token }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
