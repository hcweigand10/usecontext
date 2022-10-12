import React, {useState, useContext, useEffect} from 'react'
import languageContext from '../contexts/languageContext'

import { Box, Button } from '@chakra-ui/react'

const ButtonComp = () => {

    const context = useContext(languageContext)


    return (
        <Box p="4px">
             <Button colorScheme="pink" size="sm">{context === "english" ? "Submit" : "Voorleggen"}</Button>
        </Box>
    )
}

export default ButtonComp