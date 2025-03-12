export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      talents: {
        Row: {
          id: string
          name: string
          email: string
          phone: string
          profession: string
          mailing_list: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          phone: string
          profession: string
          mailing_list?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          phone?: string
          profession?: string
          mailing_list?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      companies: {
        Row: {
          id: string
          company_name: string
          country: string
          state: string
          sector: string
          hiring_needs: string
          contact_email: string
          contact_phone: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          company_name: string
          country: string
          state: string
          sector: string
          hiring_needs: string
          contact_email: string
          contact_phone: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          company_name?: string
          country?: string
          state?: string
          sector?: string
          hiring_needs?: string
          contact_email?: string
          contact_phone?: string
          created_at?: string
          updated_at?: string
        }
      }
      government_entities: {
        Row: {
          id: string
          government_name: string
          level: string
          talent_interest: string
          contact_email: string
          contact_phone: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          government_name: string
          level: string
          talent_interest: string
          contact_email: string
          contact_phone: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          government_name?: string
          level?: string
          talent_interest?: string
          contact_email?: string
          contact_phone?: string
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_service_status: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
  }
}

