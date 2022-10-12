import React, {FunctionComponent, useState} from 'react'

import { Box, Radio, RadioGroup, Stack } from '@chakra-ui/react'

interface selectorProps{
    handleChange: (nextValue: string) => void,
    language: string
  }

const LanguageSelector: FunctionComponent<selectorProps> = ({handleChange, language}) => {

    return (
        <Box p="8px">
             <h3>Select a Language</h3>
             <RadioGroup onChange={handleChange} value={language}>
                <Stack direction="row">
                    <Radio value="english">English</Radio>
                    <Radio value="dutch">Dutch</Radio>
                </Stack>
             </RadioGroup>
        </Box>
    )
}

export default LanguageSelector