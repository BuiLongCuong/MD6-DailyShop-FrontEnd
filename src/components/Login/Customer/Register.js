import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from "@mui/material/Button";

export default function Register() {
    let myStyle = {
        width: '550px',
        // border: "1px solid black",
        // borderRadius: '20px',
        // backgroundColor: 'white',
        // boxShadow: "10px 10px 10px 0px rgba(0, 0, 0, 0.5)",
        paddingTop: '50px'
    }
    let title = {
        fontFamily: 'Helvetica',
        fontSize: '50px',
    }
    let body = {
        backgroundImage: 'url("https://i.pinimg.com/564x/de/01/39/de01390f37f551dbcd4d7aedaa4a59ce.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
        width: '100%',
        // height: '100%',
        minHeight: '100vh',
    }

    return (
        <div style={body}>
        <center>
        <div style={myStyle}>
        <React.Fragment>
            <Typography variant="h6" gutterBottom style={title}>
                REGISTER
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="username"
                        name="username"
                        label="Tên tài khoản"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="password"
                        name="password"
                        label="Mật khẩu"
                        fullWidth
                        autoComplete="family-name"
                        variant="standard"
                        type="password"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="name"
                        name="name"
                        label="Họ và tên"
                        fullWidth
                        autoComplete="shipping address-line1"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} >
                    <TextField
                        required
                        id="address"
                        name="address"
                        label="Địa chỉ"
                        fullWidth
                        autoComplete="shipping address-line2"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6} >
                    <TextField
                        required
                        id="phoneNumber"
                        name="phoneNumber"
                        label="Số điện thoại"
                        fullWidth
                        autoComplete="shipping address-level2"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="dateOfBirth"
                        name="dateOfBirth"
                        label="Ngày/tháng/năm sinh"
                        fullWidth
                        autoComplete="shipping postal-code"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="email"
                        name="email"
                        label="Email"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    sx={{ mt: 3, mb: 2, ml: 21, mr: 21 }}
                >
                    Register
                </Button>
            </Grid>
        </React.Fragment>
        </div>
        </center>
        </div>
    );
}