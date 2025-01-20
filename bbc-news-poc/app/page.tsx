'use client';

import Grid from '@mui/material/Grid2';
import articles, { NewsArticle } from './data'; 
import NewsCard from './components/news-card';


export default function Home() {
  return (
    <Grid container spacing={3} my={2}>
      {articles.map((article: NewsArticle) => (
        <Grid size={4} key={article.id}>
          <NewsCard article={article}/>
        </Grid>
      ))}
    </Grid>
  );
}
