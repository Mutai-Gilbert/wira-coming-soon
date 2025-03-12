import { type NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"
import { logger } from "@/lib/logger"

// Simple API key authentication for demonstration
// In production, use a more robust auth solution
const API_KEY = process.env.API_STATS_KEY || "wira-stats-key-2024"

export async function GET(request: NextRequest) {
  try {
    // Check API key
    const authHeader = request.headers.get("authorization")
    const apiKey = authHeader?.split(" ")[1]

    if (!apiKey || apiKey !== API_KEY) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Get counts from each table
    const [talentsResult, companiesResult, governmentResult] = await Promise.all([
      supabase.from("talents").select("id", { count: "exact", head: true }),
      supabase.from("companies").select("id", { count: "exact", head: true }),
      supabase.from("government_entities").select("id", { count: "exact", head: true }),
    ])

    if (talentsResult.error || companiesResult.error || governmentResult.error) {
      const error = talentsResult.error || companiesResult.error || governmentResult.error
      logger.error("Error fetching stats", error)
      return NextResponse.json({ error: "Failed to fetch statistics" }, { status: 500 })
    }

    return NextResponse.json({
      talents: talentsResult.count || 0,
      companies: companiesResult.count || 0,
      government_entities: governmentResult.count || 0,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    logger.error("Stats API error", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

