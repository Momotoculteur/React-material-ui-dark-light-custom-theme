import Stack from '@material-ui/core/Stack';
import Button from '@material-ui/core/Button';
import { Switch, Typography } from '@material-ui/core';
import { Box } from '@material-ui/system';
import { useContext } from 'react';
import ThemeContext from '../Theme/ThemeContext';

function ContentApp() {

    const { isDark, toggleTheme } = useContext(ThemeContext);

    return (
        <Box>
            <Stack spacing={2} direction="row">
                <Button variant="text">Text</Button>
                <Button variant="contained" onClick={toggleTheme}>Change Theme button</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>

            <Typography>
                <Switch checked={isDark} onChange={toggleTheme} />
                Change Theme switch
            </Typography>
        </Box>
    )

}

export default ContentApp;