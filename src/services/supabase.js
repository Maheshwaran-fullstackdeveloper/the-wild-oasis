import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://bavazeehzdrjjjsadhbt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJhdmF6ZWVoemRyampqc2FkaGJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg5MzUzNTAsImV4cCI6MjA1NDUxMTM1MH0.yjHv7Omr-4p996ho8WsIaBoN7j2xP8zc8vWzkcB4hto";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
