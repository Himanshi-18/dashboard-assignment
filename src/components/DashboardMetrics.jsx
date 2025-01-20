
import { Grid, Typography, Box } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import LanguageIcon from '@mui/icons-material/Language';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const data = [
  { icon: <PeopleIcon />, value: '1000', label: 'CUSTOMERS' },
  { icon: <LanguageIcon />, value: '$1252', label: 'REVENUE' },
  { icon: <TrendingUpIcon />, value: '600', label: 'GROWTH' },
  { icon: <AutorenewIcon />, value: '3550', label: 'RETURNS' },
  { icon: <CloudDownloadIcon />, value: '3550', label: 'DOWNLOADS' },
  { icon: <ShoppingCartIcon />, value: '100%', label: 'ORDER' },
];

const DashboardMetrics = () => {
  return (
    <Box sx={{ maxWidth: 900, backgroundColor: '#fff', borderRadius: 2, boxShadow: 3, padding: 3 }}>
      <Grid container spacing={3}>
        {data.map((item, index) => (
          <Grid item xs={6} sm={4} key={index}>
            <Box sx={{ textAlign: 'center' }}>
              <Box sx={{ color: 'purple', fontSize: 40 }}>{item.icon}</Box>
              <Typography variant="h5" fontWeight="bold">{item.value}</Typography>
              <Typography variant="body2" color="textSecondary">{item.label}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DashboardMetrics;
