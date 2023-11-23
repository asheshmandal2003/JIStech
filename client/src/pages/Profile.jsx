import { Avatar, Box, Typography } from "@mui/joy";
import { Card, Stack, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Profile = ({ user, setUser }) => {
  const navigate = useNavigate();
  const logOut = () => {
    setUser(null);
    navigate("/");
  };
  return (
    <>
      {user !== null && (
        <Card sx={{ width: 450, p: 5 }}>
          <Stack
            spacing={5}
            width="100%"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar variant="outlined" sx={{ height: 80, width: 80 }} />
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography>Name</Typography>
              <Typography>{user.firstName + " " + user.lastName}</Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography>Location</Typography>
              <Typography>{user.location}</Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography>Phone No</Typography>
              <Typography>{user.phoneNo}</Typography>
            </Box>
            <Box width="100%" display="flex" gap={2}>
              <Button color="success" variant="contained" fullWidth>
                Edit
              </Button>
              <Button
                color="error"
                variant="contained"
                onClick={logOut}
                fullWidth
              >
                Log out
              </Button>
            </Box>
          </Stack>
        </Card>
      )}
    </>
  );
};

export default Profile;
