import React from 'react';
import { Avatar, Text, Button, Paper } from '@mantine/core';

const Home = () => {
  const list = [
    {
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80v=4',
        name: 'Jenasheesh Debu 💓',
        email: 'example@gmail.com',
        job: 'Chief Executive Officer'
    },
    {
        avatar: 'https://avatars.githubusercontent.com/u/10098988?v=4',
        name: 'Motil Verma',
        email: 'example2@gmail.com',
        job: 'Chief Technical Officer'
    },
    {
        avatar: 'https://pbs.twimg.com/media/D8dDZukXUAAXLdY.jpg',
        name: 'Sonali Rana',
        email: 'example3@gmail.com',
        job: 'HR Manager'
    },
    {
        avatar: 'https://www.colorado.edu/even/sites/default/files/styles/medium/public/article-thumbnail/keaniwillebrand.jpg?itok=GQWS_8JN',
        name: 'Arunima Singh',
        email: 'example4@gmail.com',
        job: 'Management Director'
    },
    
  ]
  return (
    <div>
    <div>
      <Text
        variant="gradient"
        gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
        sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
        ta="center"
        fz="xl"
        fw={700}
      >
          Our Team
      </Text>
      </div>
      <div
        style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            marginTop: "20px"
        }}
      >
        {list.map((item) => (
            <Paper
                radius="md"
                withBorder
                p="lg"
                sx={(theme) => ({
                    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
                })}
                style={{
                    maxWidth: "300px",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Avatar src={item.avatar} size={120} radius={120} mx="auto" />
                <Text ta="center" fz="lg" weight={500} mt="md">
                    {item.name}
                </Text>
                <Text ta="center" c="dimmed" fz="sm">
                    {item.email} • {item.job}
                </Text>

                <Button 
                    variant="default" 
                    fullWidth mt="md" 
                    style={{
                        marginTop: 'auto',
                        marginBottom: '0px'
                    }}
                >
                    Send message
                </Button>
            </Paper>
        ))}
        </div>
    </div>
  );
};

export default Home