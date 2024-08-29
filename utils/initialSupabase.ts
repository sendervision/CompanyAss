import { Database } from "@/database.types"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { createClient, SupabaseClient } from "@supabase/supabase-js"

type ReturnProps = {
  URL: string,
  KEY: string
}

const URL="https://undxpaxhgkzyufyvfwtc.supabase.co"
const KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVuZHhwYXhoZ2t6eXVmeXZmd3RjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ4NzA5OTUsImV4cCI6MjA0MDQ0Njk5NX0.zb30sW5CqneIjcDVpQCW8j62erp0kPT9Qkfs1wGkcTA"

const getSupabaseData = (): ReturnProps => {
  if (!URL || !KEY){
    throw new Error("Key and Url of Supabase is required")
  }
  return { KEY, URL}
}
const { URL: URL_, KEY: KEY_ } = getSupabaseData()
export const supabase = createClient<Database>(
  URL_, KEY_
)
