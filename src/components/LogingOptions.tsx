"use client";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Roles } from "@/shared/interfaces";
import AdminIcon from "@/shared/svg/adminIcon";
import InstructorIcon from "@/shared/svg/teacherIcon";
import ParentIcon from "@/shared/svg/parentIcon";
import StudentIcon from "@/shared/svg/studentIcon";
import { Card } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  maxWidth: 400,
}));

const LoginOptions: React.FC = () => {
  const currentPath = usePathname();
  const roles: Roles[] = [
    {
      name: "Admin",
      icon: AdminIcon,
      href: "/admin",
    },
    {
      name: "Instructor",
      icon: InstructorIcon,
      href: "/instructor",
    },
    {
      name: "Parent",
      icon: ParentIcon,
      href: "/parent",
    },
    {
      name: "Student",
      icon: StudentIcon,
      href: "/student",
    },
  ];
  return (
    <Box sx={{ flexGrow: 1, overflow: "hidden", px: 3 }}>
      <Card sx={{ p: 4, bgcolor: "lightblue" }}>
        {roles.map((role: Roles, index: number) => (
          <Link href={role.href} key={index}>
            <Item
              sx={{
                my: 1,
                mx: "auto",
                p: "1em 2em",
              }}
            >
              <Stack spacing={2} direction="row" alignItems="center">
                <Avatar sx={{ p: 1 }}>
                  <role.icon />
                </Avatar>
                <Typography noWrap>{role.name}</Typography>
              </Stack>
            </Item>
          </Link>
        ))}
      </Card>
    </Box>
  );
};

export default LoginOptions;
