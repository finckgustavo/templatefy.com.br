export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          download_limit: number
          is_admin: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          download_limit?: number
          is_admin?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          download_limit?: number
          is_admin?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      downloads: {
        Row: {
          id: string
          user_id: string
          template_id: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          template_id: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          template_id?: string
          created_at?: string
        }
      }
    }
  }
}