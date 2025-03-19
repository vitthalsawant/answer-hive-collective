
import { supabase } from './client';

// Execute this function when the app initializes
export const setupRealtimeSubscriptions = async () => {
  try {
    // First, ensure the table is set up for realtime
    await supabase.rpc('supabase_functions.add_realtime_table', {
      table_name: 'questions'
    });
    console.log('Realtime enabled for questions table');
  } catch (error) {
    console.error('Error setting up realtime:', error);
  }
};
