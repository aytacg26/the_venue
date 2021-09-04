import { Drawer, List, ListItem } from '@material-ui/core';

const SideDrawer = (props) => {
  const links = [
    { where: 'featured', value: 'To Top' },
    { where: 'venuenfo', value: 'Venue NFO' },
    { where: 'highlights', value: 'Highlights' },
    { where: 'pricing', value: 'Pricing' },
    { where: 'location', value: 'Location' },
  ];

  const renderItem = (item) => (
    <ListItem button onClick={() => console.log(item.where)} key={item.where}>
      {item.value}
    </ListItem>
  );

  return (
    <Drawer anchor='right' open={props.open} onClose={props.onClose}>
      <List component='nav'>{links.map((item) => renderItem(item))}</List>
    </Drawer>
  );
};

export default SideDrawer;
