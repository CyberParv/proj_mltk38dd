import { NextResponse } from "next/server";
import { reservationSchema } from "@/lib/validators";
import type { ReservationRequest } from "@/lib/types";

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ReservationRequest;
    const parsed = reservationSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid request", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    // TODO: Send confirmation email via provider (e.g., SendGrid)
    return NextResponse.json(
      { message: "Reservation received", data: parsed.data },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to process reservation" },
      { status: 500 }
    );
  }
}
