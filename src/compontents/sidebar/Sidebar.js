import {useState} from "react";
import {
  CssBaseline,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem, MenuList, Stack
} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Box from "@mui/material/Box";
import MenuIcon from '@mui/icons-material/Menu';
import {NavLink} from "react-router-dom";
import {flexCenter, theme} from "../../themes/theme";
import logo from "../../images/data-warehouse.png"
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import {ThemeProvider} from "@mui/material/styles";
import AutoModeIcon from '@mui/icons-material/AutoMode';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import AirIcon from '@mui/icons-material/Air';
import Conflict from "../../pages/others/ballconflict/Conflict";

const Sidebar = ({children}) => {
  const menuItems = [
    {path: "/profile", name: "Profile", icon: <HomeIcon sx={{fontSize: "35px"}}/>},
    {path: "/dashboard", name: "Dashboard", icon: <DashboardIcon sx={{fontSize: "32px"}}/>},
    {path: "/metadata", name: "Datadata", icon: <ContentPasteSearchIcon sx={{fontSize: "35px"}}/>},
    {path: "/data-dependency", name: "Data Dependency", icon: < AccountTreeIcon sx={{fontSize: "35px"}}/>},
    {path: "/flow", name: "Flow", icon: <AirIcon sx={{fontSize: "35px"}}/>},
    {path: "/gravity", name: "Gravity", icon: <AutoModeIcon sx={{fontSize: "35px"}}/>},
    {path: "/svg", name: "SVG", icon: <OpenInFullIcon sx={{fontSize: "35px"}}/>},
    {path: "/conflict", name: "Conflict", icon: <HomeIcon sx={{fontSize: "35px"}}/>}

  ]

  const [isOpen, setIsOpen] = useState(true)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{display: "flex"}}> {/*外层sidebar容器*/}
        <Box sx={{bgcolor: "primary.dark", height: window.innerHeight}}>  {/*sidebar本体*/}
          <Stack direction="row" spacing={7} pt={1} mb={3}>

            {isOpen &&
              <Box sx={{...flexCenter, justifyContent: "center", ml: 13}}>
                <img src={logo} alt="Logo" style={{height: 40, width: 45}}/>
              </Box>}
            <Button onClick={toggle} sx={{...flexCenter, justifyContent: "center", ml: 0, color: "black"}}>
              <MenuIcon sx={{fontSize: "35px"}}/>
            </Button>
          </Stack>


          <MenuList>
            {menuItems.map((item, index) => (
              <MenuItem component={NavLink} to={item.path}>
                <Box sx={{...flexCenter, justifyContent: "center"}}>
                  <Box sx={{...flexCenter, justifyContent: "center", mr: 2}}>{item.icon}</Box>
                  {isOpen &&
                    <Box sx={{...flexCenter, justifyContent: "center", fontSize: 20}}>{item.name}</Box>}
                </Box>
              </MenuItem>
            ))}
          </MenuList>


        </Box>
        <Box width={"100%"}>{children}</Box>
      </Box>
    </ThemeProvider>
  );
}

export default Sidebar



















