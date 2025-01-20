import articles from "@/app/data"; 
import { Box, Container, Typography } from "@mui/material";

const NewsContent = async ({ params }: { params:Promise< { id: string }> }) => {
  const id = (await params).id; 
  const article = articles.find((article) => String(article.id) === id);

  if (!article) {
    return (
      <Container>
        <Typography variant="h5">Article Not Found</Typography>
      </Container>
    );
  }

  return (
    <Box display={"flex"} flexDirection="column">
      <Typography variant="h2">{article.title}</Typography>
      <Typography variant="h5">{article.description}</Typography>
      <Box my={2}>
       <img src={article.banner} width={"100%"} height={"100%"}/>
      </Box>
      {
        article.content.map(({type,content}, index)=>{
          let data;
          if(type=="text"){
            data = (
              <Typography variant="h5">{content}</Typography>
            )
          }else{
            data = (
              <Box display={'flex'} justifyContent={'center'}>
                <img src={content} width={"70%"} height={"70%"}/>
              </Box>
            )
          }
          return (
            <Box my={2} key={index}>
              {data}
            </Box>
          );
        })
      }

    </Box>
  );
};

export default NewsContent;
