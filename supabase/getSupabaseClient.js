import { createClient } from "@supabase/supabase-js";

// #######################################################
// MODIFY THESE VARIABLES, TO YOUR SUPABASE INSTALLATION.
// #######################################################
const SUPABASE_URL = "https://afcvomwaonvvozhcjqqs.supabase.co";
const PUBLIC_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmY3ZvbXdhb252dm96aGNqcXFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM3ODE1NjAsImV4cCI6MjA0OTM1NzU2MH0.YDoncGzDS1Q5d97p8AVP5ucZ7vxxB6UiHp_i4cG1ORI";
// #######################################################

let supabaseClientSingletong = undefined;
export function getSupabaseClient() {
  if (supabaseClientSingletong == undefined) {
    supabaseClientSingletong = createClient(SUPABASE_URL, PUBLIC_ANON_KEY);
  }

  return supabaseClientSingletong;
}