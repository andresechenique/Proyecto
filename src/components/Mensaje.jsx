import React from 'react'
import { Alert, AlertIcon, AlertTitle, AlertDescription, Stack } from '@chakra-ui/react'

const Mensaje = ({ children, tipo }) => {
  return (
    <Stack mb={''}>
      <Alert status={tipo} colorScheme={"blue"} p={8}>
        <AlertIcon/>
        <AlertTitle fontSize={'xl'}>{tipo}</AlertTitle>
        <AlertDescription fontSize={'xl'}>{children}</AlertDescription>
      </Alert>
    </Stack>
  )
}

export default Mensaje
