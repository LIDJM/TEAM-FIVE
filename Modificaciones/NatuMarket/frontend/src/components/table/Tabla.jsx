import * as React from 'react';
import Table from '@mui/material/Table';
import {Container, Grid, Paper, TableContainer} from '@mui/material';

const TablaCustom = ({children}) => {
	return (
		<>
			<Container maxWidth='lg' sx={{mt: 4, mb: 4}}>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<Paper
							sx={{
								p: 2,
								display: 'flex',
								flexDirection: 'column',
							}}>
							<Table size='small'>{children}</Table>
						</Paper>
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export default TablaCustom;
