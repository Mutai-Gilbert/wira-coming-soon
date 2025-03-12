"use server"

import { z } from "zod"
import { supabase } from "@/lib/supabase"
import { handleError } from "@/lib/error-handler"
import { logger } from "@/lib/logger"
import { revalidatePath } from "next/cache"

// Schema validation
const governmentSchema = z.object({
  governmentName: z.string().min(2, { message: "Government name must be at least 2 characters." }),
  level: z.string({ required_error: "Please select a government level." }),
  talentInterest: z.string().min(10, { message: "Please provide more details about your talent interests." }),
  contactEmail: z.string().email({ message: "Please enter a valid email address." }),
  contactPhone: z.string().min(5, { message: "Please enter a valid phone number." }),
})

export type GovernmentFormData = z.infer<typeof governmentSchema>

export async function submitGovernmentForm(formData: GovernmentFormData) {
  try {
    // Validate form data
    const validatedData = governmentSchema.parse(formData)

    logger.info("Submitting government form", { email: validatedData.contactEmail })

    // Temporary workaround - simulate successful submission
    if (process.env.NODE_ENV === "development") {
      logger.info("Development mode: Simulating successful submission")

      // Simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      return {
        success: true,
        data: {
          id: "simulated-id-" + Date.now(),
          government_name: validatedData.governmentName,
          level: validatedData.level,
          talent_interest: validatedData.talentInterest,
          contact_email: validatedData.contactEmail,
          contact_phone: validatedData.contactPhone,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
      }
    }

    // Try to insert data into Supabase
    try {
      const { data, error } = await supabase
        .from("government_entities")
        .insert({
          government_name: validatedData.governmentName,
          level: validatedData.level,
          talent_interest: validatedData.talentInterest,
          contact_email: validatedData.contactEmail,
          contact_phone: validatedData.contactPhone,
        })
        .select()

      if (error) {
        logger.error("Error inserting government data", error)
        throw error
      }

      logger.info("Government form submitted successfully", { id: data?.[0]?.id })

      // Revalidate the path to update any cached data
      revalidatePath("/")

      return { success: true, data: data?.[0] }
    } catch (supabaseError) {
      logger.error("Caught Supabase error", supabaseError)
      throw supabaseError
    }
  } catch (error) {
    const { message, statusCode } = handleError(error)

    return {
      success: false,
      error: message,
      statusCode,
    }
  }
}

