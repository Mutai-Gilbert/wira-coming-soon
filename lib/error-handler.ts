export class ApiError extends Error {
  statusCode: number

  constructor(statusCode: number, message: string) {
    super(message)
    this.statusCode = statusCode
    this.name = "ApiError"
  }
}

export function handleError(error: unknown): { message: string; statusCode: number } {
  console.error("Error occurred:", error)

  if (error instanceof ApiError) {
    return {
      message: error.message,
      statusCode: error.statusCode,
    }
  }

  // Handle Supabase errors
  if (typeof error === "object" && error !== null && "code" in error && "message" in error) {
    const supabaseError = error as { code: string; message: string; details?: string }

    // Handle specific Supabase errors
    if (supabaseError.code === "23505") {
      // Unique violation
      return {
        message: "This email is already registered.",
        statusCode: 409,
      }
    }

    // Handle connection errors
    if (supabaseError.code === "ENOTFOUND" || supabaseError.code === "ETIMEDOUT") {
      return {
        message: "Unable to connect to the database. Please try again later.",
        statusCode: 503,
      }
    }

    return {
      message: `Database error: ${supabaseError.message}${supabaseError.details ? ` (${supabaseError.details})` : ""}`,
      statusCode: 400,
    }
  }

  // Handle fetch errors
  if (error instanceof TypeError && error.message.includes("fetch")) {
    return {
      message: "Network error connecting to the database. Please check your internet connection and try again.",
      statusCode: 503,
    }
  }

  // Default error
  return {
    message: error instanceof Error ? error.message : "An unexpected error occurred",
    statusCode: 500,
  }
}

