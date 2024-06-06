import { Box } from "@mui/material";

export default function ParentPage() {
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
          /* border: "solid 2px #000", */
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <h2>Parent Page Loading...</h2>
        </Box>
      </Box>
    </Box>
  );
}
