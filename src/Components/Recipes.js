import * as React from 'react';
// import useStyles from './Style'
import {Container, CssBaseline, Grid, Typography} from "@mui/material";
import RecipeCard from "./RecipeCard";

const cards = [
  { id: 1, tittle: "Soto", content: "Sample text, bebas diisi apa saja yang baik-baik sesuka hati anda" },
  { id: 2, tittle: "Bakso", content: "Sample text, bebas diisi apa saja yang baik-baik sesuka hati anda" },
  { id: 3, tittle: "Sate", content: "Sample text, bebas diisi apa saja yang baik-baik sesuka hati anda" },
  { id: 4, tittle: "Rendang", content: "Sample text, bebas diisi apa saja yang baik-baik sesuka hati anda" },
  { id: 5, tittle: "Sop Ayam", content: "Sample text, bebas diisi apa saja yang baik-baik sesuka hati anda" },
  { id: 6, tittle: "Sayur Bayam", content: "Sample text, bebas diisi apa saja yang baik-baik sesuka hati anda" },
];

export default function Recipes() {
  // const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div
            // className={classes.heroContent}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Recipes
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Aneka macam ide resep masakan dan makanan yang simpel
              tersaji disini untuk memberi panduan dan mempermudah dalam menentukan hidangan lezat untuk
              keluarga anda
            </Typography>
            <div
                // className={classes.heroButtons}
          >
            </div>
          </Container>
        </div>
        <Container
            // className={classes.cardGrid}
            maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <RecipeCard key={card.id} card={card} />
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
