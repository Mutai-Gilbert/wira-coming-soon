import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"
import { logger } from "@/lib/logger"

export async function GET() {
  try {
    logger.info("Debug API: Testing Supabase connection")

    // Log environment variables (masked for security)
    logger.info("Environment variables", {
      NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL
        ? process.env.NEXT_PUBLIC_SUPABASE_URL.substring(0, 15) + "..."
        : "not set",
      NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
        ? "Key exists (starts with " + process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY.substring(0, 5) + "...)"
        : "not set",
    })

    // Simple query to test connection
    const { data, error } = await supabase.from("talents").select("id").limit(1)

    if (error) {
      logger.error("Debug API: Supabase connection test failed", error)
      return NextResponse.json(
        {
          status: "error",
          message: "Supabase connection failed",
          error: error.message,
          details: error,
        },
        { status: 500 },
      )
    }

    return NextResponse.json({
      status: "success",
      message: "Supabase connection successful",
      data: { recordsReturned: data.length },
    })
  } catch (error) {
    logger.error("Debug API: Unexpected error", error)
    return NextResponse.json(
      {
        status: "error",
        message: "Unexpected error testing Supabase connection",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    )
  }
}

