// Importa a função de criação do client Supabase via CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Cria o client com a URL e a chave fornecidas
export const supabase = createClient(
  'https://xegaywuvfmjedhlrfxns.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhlZ2F5d3V2Zm1qZWRobHJmeG5zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1MzU1NDIsImV4cCI6MjA2MjExMTU0Mn0.dqEKwmd9savln1bZi9WoC3DSwlqVgdl3mIjpeyueGOM'
)