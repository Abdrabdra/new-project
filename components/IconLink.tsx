import { Grid } from "@mui/material"
import { NextPage } from "next"
import { ReactElement } from "react"

interface Props {
    icon: ReactElement<any, any>,
    text: string
}

const IconLink: NextPage<Props> = ({ icon, text }) => {
    return (
        <Grid container spacing={0.5} sx={{cursor: 'pointer', color: '#333333', alignItems: 'center', mx: '1rem'}}>
            <Grid item xs>
                {icon}
            </Grid>
            <Grid item xs>
                {text}
            </Grid>
        </Grid>
    )
}

export default IconLink
