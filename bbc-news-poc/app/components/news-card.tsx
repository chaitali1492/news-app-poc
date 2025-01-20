// 'use client';
import { Card, CardMedia, CardContent, Typography} from '@mui/material';
import { NewsArticle } from '../data';
import Link from 'next/link';

interface NewsCardProp {
    article:NewsArticle;
}

const NewsCard:React.FC<NewsCardProp> = ({article})=>{
    return (
        <Link href={`/news/${article.id}`}>
        <Card>
            <CardMedia
                component="img"
                height="350"
                image={article.banner}
                alt={article.title}
            />
            <CardContent>
                <Typography variant="h6" gutterBottom>
                {article.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                {article.subtitle}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {article.description}
                </Typography>
            </CardContent>
        </Card>
        </Link>
    )
}

export default NewsCard