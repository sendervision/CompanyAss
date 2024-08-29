import { supabase } from "@/utils/initialSupabase";

export async function SignUpUser(email: string, password: string){
  const response = await supabase.auth.signUp({
    email,
    password
  })
  console.log(response.data.user)
}

export async function SignIn(email: string, password: string) {
  const response = await supabase.auth.signInWithPassword({
    email,
    password
  })
  console.log(response.data.user)
}
