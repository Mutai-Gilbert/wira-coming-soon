type LogLevel = "debug" | "info" | "warn" | "error"

export const logger = {
  debug: (message: string, ...args: any[]) => {
    if (process.env.NODE_ENV !== "production") {
      console.debug(`[DEBUG] ${message}`, ...args)
    }
  },

  info: (message: string, ...args: any[]) => {
    console.info(`[INFO] ${new Date().toISOString()} ${message}`, ...args)
  },

  warn: (message: string, ...args: any[]) => {
    console.warn(`[WARN] ${new Date().toISOString()} ${message}`, ...args)
  },

  error: (message: string, error?: unknown, ...args: any[]) => {
    console.error(`[ERROR] ${new Date().toISOString()} ${message}`, error, ...args)

    // Log stack trace if available
    if (error instanceof Error && error.stack) {
      console.error(`[ERROR STACK] ${error.stack}`)
    }
  },
}

