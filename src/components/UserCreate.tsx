import React, {useState} from 'react'
import { Box } from '@chakra-ui/react'

import Field from './Field'
import Button from './ButtonComp'

const UserCreate = () => {

    return (
        <Box p="10px">
             <h3>userCreate</h3>
             <Field />
             <Button />
        </Box>
    )
}

export default UserCreate