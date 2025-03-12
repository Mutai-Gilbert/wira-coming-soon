"use server"

import { z } from "zod"
import { supabase } from "@/lib/supabase"
import { handleError } from "@/lib/error-handler"
import { logger } from "@/lib/logger"
import { revalidatePath } from "next/cache"

// Schema validation
const companySchema = z.object({
  companyName: z.string().min(2, { message: "Company name must be at least 2 characters." }),
  country: z.string().min(1, { message: "Please select a country." }),
  state: z.string().min(1, { message: "Please enter a state/province." }),
  sector: z.string().min(1, { message: "Please select a sector." }),
  hiringNeeds: z.string().min(10, { message: "Please provide more details about your hiring needs." }),
  contactEmail: z.string().email({ message: "Please enter a valid email address." }),
  contactPhone: z.string().min(5, { message: "Please enter a valid phone number." }),
})

export type CompanyFormData = z.infer<typeof companySchema>

export async function submitCompanyForm(formData: CompanyFormData) {
  try {
    // Validate form data
    const validatedData = companySchema.parse(formData)

    logger.info("Submitting company form", { email: validatedData.contactEmail })

    // Temporary workaround - simulate successful submission
    if (process.env.NODE_ENV === "development") {
      logger.info("Development mode: Simulating successful submission")

      // Simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      return {
        success: true,
        data: {
          id: "simulated-id-" + Date.now(),
          company_name: validatedData.companyName,
          country: validatedData.country,
          state: validatedData.state,
          sector: validatedData.sector,
          hiring_needs: validatedData.hiringNeeds,
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
        .from("companies")
        .insert({
          company_name: validatedData.companyName,
          country: validatedData.country,
          state: validatedData.state,
          sector: validatedData.sector,
          hiring_needs: validatedData.hiringNeeds,
          contact_email: validatedData.contactEmail,
          contact_phone: validatedData.contactPhone,
        })
        .select()

      if (error) {
        logger.error("Error inserting company data", error)
        throw error
      }

      logger.info("Company form submitted successfully", { id: data?.[0]?.id })

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

