import React from 'react'
import Header from '../../memory'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import CurrencyRubleOutlinedIcon from '@mui/icons-material/CurrencyRubleOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import { Typography } from '@mui/material';

const itemItem = [
  {
      id: 1,
      icon: <WidgetsOutlinedIcon />,
      title: "Dashboard",
  },
  {
      id: 2,
      icon: <PeopleOutlinedIcon />,
      title: "Customer",
  },
  {
      id: 3,
      icon: <AccountBalanceWalletOutlinedIcon />,
      title: "Wallets",
  },
  {
      id: 4,
      icon: <ShoppingCartOutlinedIcon />,
      title: "Online Shop",
  },
  {
      id: 5,
      icon: <BorderColorOutlinedIcon />,
      title: "Orders",
  },
  {
      id: 6,
      icon: <DescriptionOutlinedIcon />,
      title: "Pricing",
  },
  {
      id: 7,
      icon: <AssignmentOutlinedIcon />,
      title: "Point of Sale",
  },
  {
    id: 8,
    icon: <SellOutlinedIcon />,
    title: "Product & Services",
  },
  {
    id: 9,
    icon: <AutoGraphOutlinedIcon  />,
    title: "Accounting",
  },
  {
    id: 10,
    icon: <AttachMoneyOutlinedIcon variant="outlined" />,
    title: "Business Loan",
  },
  {
    id: 11,
    icon: <CurrencyRubleOutlinedIcon />,
    title: "Payment Pages",
  },
  {
    id: 12,
    icon: <PhoneIphoneOutlinedIcon />,
    title: "Bills & Utilities",
  },
  {
    id: 13,
    icon: <BookmarkBorderOutlinedIcon />,
    title: "Expenses",
  },
]

const Divider = () => {
  return (
    <div style={dividerStyle}>
      <Header />
      <List>
      {itemItem.map((e) => (
        <ListItem key={e.id}>
          <ListItemIcon color='primary' fontSize="xs" style={{ fontSize: 6, color: "#011B60" }}>
            {e.icon}
          </ListItemIcon>
          <ListItemText>
            <Typography variant="body1" style={{ fontSize: 12, color: "#011B60" }}>
              {e.title}
            </Typography>
          </ListItemText>
        </ListItem>
  ))}
</List>
    </div>
  )
}

export default Divider



const dividerStyle = {
    backgroundColor: "#FFFFFF",
    width: "200px",
    // height: "100%",
    position: "absolute",
    left: "40px",
    borderRight: "1px solid #f4f5f9",
}