import { createClient } from "@supabase/supabase-js"
import type { Database } from "@/types/supabase"

// Type-safe Supabase client
export const createSupabaseClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error("Missing Supabase environment variables")
    throw new Error("Missing Supabase environment variables")
  }

  console.log("Creating Supabase client with URL:", supabaseUrl.substring(0, 15) + "...")

  try {
    return createClient<Database>(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    })
  } catch (error) {
    console.error("Error creating Supabase client:", error)
    throw error
  }
}

// Server-side only Supabase client
export const supabase = createSupabaseClient()

