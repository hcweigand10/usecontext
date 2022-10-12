import React, { useContext, useState } from "react";
import { Box, Input } from "@chakra-ui/react";

import languageContext from "../contexts/languageContext";

const Field = () => {
    const [name, setName] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)

    const context = useContext(languageContext)

    return (
        <Box p="4px">
            <h3>{context === "english" ? "Name" : "Naam"}</h3>
            <Input
                value={name}
                onChange={handleChange}
                placeholder={context === "english" ? "Name" : "Naam"}
                size="sm"
            />
        </Box>
    );
};

export default Field;
