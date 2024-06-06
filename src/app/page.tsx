import LoginOptions from "@/components/LogingOptions";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box
      component={"main"}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        px: "2em",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          width: "100%",
          height: "80vh",
          py: "2em",
          // border: "solid 2px #000",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // border: "solid 2px #000",
          }}
        >
          <Box>
            <Typography variant="h2">Fun Options Here</Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <LoginOptions />
        </Box>
      </Box>
    </Box>
  );
}
