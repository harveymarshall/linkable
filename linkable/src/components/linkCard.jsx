import * as React from 'react';
import {
    Card,
    CardContent,
    Typography,
    Box
} from '@mui/material'


export default function LinkCard() {
    const linkNames = [
        'YouTube',
        'Instagram',
        'X',
        'TikTok'
    ]
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 10}}>
            {linkNames.map((name, index) => (
                <Card sx={{ width: 345, mb: 2 }} key={index}>
                    <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Typography>
                            {name}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </Box>
    )
}
