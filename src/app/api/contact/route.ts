import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validators";
import type { ContactRequest } from "@/lib/types";

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactRequest;
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid request", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    // TODO: Send notification email via provider (e.g., SendGrid)
    return NextResponse.json(
      { message: "Message received", data: parsed.data },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to process contact message" },
      { status: 500 }
    );
  }
}
