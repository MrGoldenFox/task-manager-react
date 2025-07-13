import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://uzkjwjvxcyithriiynit.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV6a2p3anZ4Y3lpdGhyaWl5bml0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIzNjkyMDAsImV4cCI6MjA2Nzk0NTIwMH0.HuW7GoyZAzlCMvC_S_dwrkuWsdsW4INckRKGFQlDs60";

export const supabase = createClient(supabaseUrl, supabaseKey);