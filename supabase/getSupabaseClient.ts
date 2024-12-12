// getSupabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://afcvomwaonvvozhcjqqs.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmY3ZvbXdhb252dm96aGNqcXFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM3ODE1NjAsImV4cCI6MjA0OTM1NzU2MH0.YDoncGzDS1Q5d97p8AVP5ucZ7vxxB6UiHp_i4cG1ORI';
const supabase = createClient(supabaseUrl, supabaseKey);

export const getSupabaseClient = () => supabase;
