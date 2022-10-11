import React, {useState} from 'react'

import { Box, Radio, RadioGroup, Stack } from '@chakra-ui/react'

const LanguageSelector = () => {
    const [language, setLanguage] = useState("english")

    return (
        <Box p="8px">
             <h3>Select a Language</h3>
             <RadioGroup onChange={setLanguage} value={language}>
                <Stack >
                    <Radio value="english">English</Radio>
                    <Radio value="dutch">Dutch</Radio>
                </Stack>
             </RadioGroup>
        </Box>
    )
}

export default LanguageSelector