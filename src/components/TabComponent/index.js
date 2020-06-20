import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import FilteredList from '../FilteredList';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
  },
}));

export default function TabComponent() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab disabled label="Overview" {...a11yProps(0)} />
          <Tab label="Repositories" {...a11yProps(1)} />
          <Tab disabled label="Projects" {...a11yProps(2)} />
          <Tab disabled label="Stars" {...a11yProps(3)} />
          <Tab disabled label="Followers" {...a11yProps(4)} />
          <Tab disabled label="Following" {...a11yProps(5)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel  value={value} index={0} dir={theme.direction}>
          Overview
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
            <FilteredList />
          {/* Repositories <div style={{width:'1rem',height:'1rem', backgroundColor:'grey', borderRadius:'50%'}}>12</div> */}
        </TabPanel>
        <TabPanel  value={value} index={2} dir={theme.direction}>
          Projects
        </TabPanel>
        <TabPanel  value={value} index={3} dir={theme.direction}>
          Stars
        </TabPanel>
        <TabPanel  value={value} index={4} dir={theme.direction}>
          Followers
        </TabPanel>
        <TabPanel  value={value} index={5} dir={theme.direction}>
          Following
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}