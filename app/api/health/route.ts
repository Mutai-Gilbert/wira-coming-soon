import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"
import { logger } from "@/lib/logger"

export async function GET() {
  try {
    // Call the Supabase function for health check
    const { data, error } = await supabase.rpc("get_service_status")

    if (error) {
      logger.error("Health check failed", error)
      return NextResponse.json(
        { status: "error", message: "Database connection failed", error: error.message },
        { status: 500 },
      )
    }

    return NextResponse.json(data)
  } catch (error) {
    logger.error("Health check exception", error)
    return NextResponse.json({ status: "error", message: "Health check failed" }, { status: 500 })
  }
}

