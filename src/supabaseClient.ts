import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cjymazhxxgpwysmhpyoq.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqeW1hemh4eGdwd3lzbWhweW9xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0ODI4MzksImV4cCI6MjA2NzA1ODgzOX0.cxb7car9jByzi3REnNILBqrCa8vqVxlN_1gJWHjdns0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey); 