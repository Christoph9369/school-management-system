"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { TfiYoutube } from "react-icons/tfi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillLinkedin } from "react-icons/ai";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Social } from "@/shared/interfaces";

import Link from "next/link";

const pages = ["Products", "Pricing", "Blog"];
const socials: Social[] = [
  {
    name: "linkedin",
    logo: AiFillLinkedin,
    link: "/",
  },
  {
    name: "twitter",
    logo: FaSquareXTwitter,
    link: "/",
  },
  {
    name: "youtube",
    logo: TfiYoutube,
    link: "/",
  },
];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ color: "var(--priHard)", bgcolor: "white" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          {/* Mobile Options */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* Icon's Logo */}
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          {/* End of Mobile Options */}

          <Box
            sx={{ ml: "33%", flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography>Name of School</Typography>
              <Typography>User Role - User full Name </Typography>
            </Box>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Box title="Socials" sx={styles.socials}>
              {socials.map((platform, index) => (
                <Box key={index} title="Platform" sx={styles.platform}>
                  <Link href={platform.link} target="_blank">
                    <platform.logo size={30} style={{ fill: "inherit" }} />
                  </Link>
                </Box>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;

/** @type {import("@mui/material").SxProps} */
const styles = {
  socials: {
    display: "flex",
    flexDirection: "row",
    gap: 2,
  },
  platform: {
    transition: "all 0.3s ease-in-out",
  },
};
