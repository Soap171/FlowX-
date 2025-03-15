import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bpzidglllurtwqddzjfy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJwemlkZ2xsbHVydHdxZGR6amZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIwNDA0OTAsImV4cCI6MjA1NzYxNjQ5MH0.vATMyAc948eHkQtXd5KKjBZED04M6qWtzxXSJLz3G60";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
