"use client";

import { useEffect, useState } from "react";
import { Container, TextField, Button, Typography, Box, Grid, Paper, Slider, Select, MenuItem, FormControl, InputLabel } from "@mui/material";

export default function Home() {
    const [bannerText, setBannerText] = useState<string>("I love building awesome web apps!");
    const [backgroundColor, setBackgroundColor] = useState<string>("#1565c0");
    const [image, setImage] = useState<string | null>(null);
    const [fontSize, setFontSize] = useState<number>(36);
    const [textAlign, setTextAlign] = useState<string>("center");
    const [fontStyle, setFontStyle] = useState<string>("normal");
    const [borderRadius, setBorderRadius] = useState<number>(16);
    const [opacity, setOpacity] = useState<number>(0.3);
    const [bannerWidth, setBannerWidth] = useState<number>(600);
    const [bannerHeight, setBannerHeight] = useState<number>(300);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);


    useEffect(() => {
        setImage("");
    }, []);

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBannerText(event.target.value);
    };

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
        }
    };

    if (!isMounted) return null;

    return (
        <Box
            sx={{
                minHeight: "100vh",
                background: "linear-gradient(to right, #141e30, #243b55)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 2,
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={7}>
                        <Paper
                            elevation={6}
                            sx={{
                                width: bannerWidth,
                                height: bannerHeight,
                                backgroundColor,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: textAlign,
                                color: "white",
                                borderRadius,
                                position: "relative",
                                overflow: "hidden",
                                boxShadow: 6,
                                padding: "0 20px",
                                maxWidth: "100%",
                            }}
                        >
                            {image && (
                                <img
                                    src={image}
                                    alt="Banner"
                                    style={{
                                        position: "absolute",
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        opacity,
                                    }}
                                />
                            )}
                            <Typography
                                variant="h3"
                                fontWeight="bold"
                                sx={{
                                    zIndex: 1,
                                    textShadow: "2px 2px 10px rgba(0,0,0,0.4)",
                                    fontSize,
                                    fontStyle,
                                }}
                            >
                                {bannerText}
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={5}>
                        <Paper
                            elevation={6}
                            sx={{
                                padding: 4,
                                borderRadius: 3,
                                boxShadow: 6,
                                background: "rgba(255, 255, 255, 0.9)",
                            }}
                        >
                            <Typography variant="h5" fontWeight="bold" sx={{ mb: 2, color: "#333" }}>
                                Customize the Banner
                            </Typography>

                            <TextField
                                label="Change Banner Text"
                                variant="outlined"
                                fullWidth
                                onChange={handleTextChange}
                                sx={{ mb: 2 }}
                            />

                            <FormControl fullWidth sx={{ mb: 2 }}>
                                <Typography variant="body1" sx={{ mb: 1 }}>
                                    Background Color:
                                </Typography>
                                <input
                                    type="color"
                                    value={backgroundColor}
                                    onChange={(e) => setBackgroundColor(e.target.value)}
                                    style={{ width: "100%", height: "40px", borderRadius: "5px", border: "none", cursor: "pointer" }}
                                />
                            </FormControl>

                            <FormControl fullWidth sx={{ mb: 2 }}>
                                <InputLabel>Font Size</InputLabel>
                                <Select value={fontSize} onChange={(e) => setFontSize(Number(e.target.value))}>
                                    <MenuItem value={24}>Small</MenuItem>
                                    <MenuItem value={36}>Medium</MenuItem>
                                    <MenuItem value={48}>Large</MenuItem>
                                </Select>
                            </FormControl>

                            <FormControl fullWidth sx={{ mb: 2 }}>
                                <InputLabel>Text Alignment</InputLabel>
                                <Select value={textAlign} onChange={(e) => setTextAlign(e.target.value)}>
                                    <MenuItem value="left">Left</MenuItem>
                                    <MenuItem value="center">Center</MenuItem>
                                    <MenuItem value="right">Right</MenuItem>
                                </Select>
                            </FormControl>

                            <FormControl fullWidth sx={{ mb: 2 }}>
                                <InputLabel>Font Style</InputLabel>
                                <Select value={fontStyle} onChange={(e) => setFontStyle(e.target.value)}>
                                    <MenuItem value="normal">Normal</MenuItem>
                                    <MenuItem value="italic">Italic</MenuItem>
                                    <MenuItem value="bold">Bold</MenuItem>
                                </Select>
                            </FormControl>

                            <Typography variant="body1" sx={{ mb: 1 }}>
                                Banner Width:
                            </Typography>
                            <Slider
                                value={bannerWidth}
                                onChange={(e, newValue) => setBannerWidth(newValue as number)}
                                step={20}
                                min={200}
                                max={1000}
                                sx={{ mb: 2 }}
                            />

                            <Typography variant="body1" sx={{ mb: 1 }}>
                                Banner Height:
                            </Typography>
                            <Slider
                                value={bannerHeight}
                                onChange={(e, newValue) => setBannerHeight(newValue as number)}
                                step={20}
                                min={100}
                                max={500}
                                sx={{ mb: 2 }}
                            />

                            <Typography variant="body1" sx={{ mb: 1 }}>
                                Border Radius:
                            </Typography>
                            <Slider
                                value={borderRadius}
                                onChange={(e, newValue) => setBorderRadius(newValue as number)}
                                step={4}
                                min={0}
                                max={40}
                                sx={{ mb: 2 }}
                            />

                            <Typography variant="body1" sx={{ mb: 1 }}>
                                Image Opacity:
                            </Typography>
                            <Slider
                                value={opacity}
                                onChange={(e, newValue) => setOpacity(newValue as number)}
                                step={0.1}
                                min={0}
                                max={1}
                                sx={{ mb: 2 }}
                            />

                            <Button variant="contained" component="label" fullWidth sx={{ mt: 2, backgroundColor: "#1565c0" }}>
                                Upload Image
                                <input type="file" accept="image/*" hidden onChange={handleImageUpload} />
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
