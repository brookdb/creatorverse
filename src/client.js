import { createClient } from '@supabase/supabase-js';

const URL = 'https://hockcadnrfzqcsdzbdjk.supabase.co';
const API_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvY2tjYWRucmZ6cWNzZHpiZGprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIwMDg4MjIsImV4cCI6MjAzNzU4NDgyMn0.8LVKGy87mEveOdryKU_Y61YV-3305TANb_ou4RtMPNg';

const supabase = createClient(URL, API_KEY);
export default supabase;
