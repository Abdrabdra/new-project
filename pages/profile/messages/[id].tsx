import { Paper } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import ProfileLayout from '../../../components/layouts/ProfileLayout'

const OneMessage = () => {
  const router = useRouter();
  const { query } = router;

  return (
    <ProfileLayout>
      <Paper
        sx={{
          height: "100%",
          borderRadius: "20px",
          padding: "1rem 1.5rem",
        }}
        elevation={0}
      >
        Сообщение под номером:
        {query.id}
      </Paper>
    </ProfileLayout>
  )
}

export default OneMessage