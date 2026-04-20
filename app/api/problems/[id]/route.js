import { db } from "@/lib/db";
import { getCurrentUser, currentUserRole } from "@/modules/auth/actions";
import { UserRole } from "@prisma/client";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  try {
    const userRole = await currentUserRole();
    const user = await getCurrentUser();

    // console.log("userRole:", userRole);
    // console.log("user:", user);

    if (userRole !== UserRole.ADMIN) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const body = await req.json();

    const updated = await db.problem.update({
      where: { id },
      data: {
        title: body.title,
        description: body.description,
        difficulty: body.difficulty,
        tags: body.tags,
        constraints: body.constraints,
        hints: body.hints,
        editorial: body.editorial,
        testCases: body.testCases,
        examples: body.examples,
        codeSnippets: body.codeSnippets,
        referenceSolutions: body.referenceSolutions,
      },
    });

    return NextResponse.json({ success: true, problem: updated });
  } catch (error) {
    console.error("Error updating problem:", error);
    return NextResponse.json(
      { error: "Failed to update problem" },
      { status: 500 },
    );
  }
}
