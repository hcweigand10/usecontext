import React, { useState } from "react";

import { Box, Input } from "@chakra-ui/react";

const Field = () => {
    const [name, setName] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)

    return (
        <Box p="4px">
            <h3>Field</h3>
            <Input
                value={name}
                onChange={handleChange}
                placeholder="Name"
                size="sm"
            />
        </Box>
    );
};

export default Field;
