import React from 'react'
import { supabase } from '../../utils/supabase'


const Posts = async () => {
    const { data } = await supabase.from('countries').select()
  return (
    <pre>{JSON.stringify(data, null, 6)}</pre>
  )
}

export default Posts