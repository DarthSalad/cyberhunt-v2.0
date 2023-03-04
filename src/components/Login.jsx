import React from 'react'
import {
TextInput,
PasswordInput,
Paper,
Title,
Container,
Button,
} from '@mantine/core';
import { notifications } from '@mantine/notifications';

const Login = () => {
  const [pass, setPass] = React.useState('');
  const [err, setError] = React.useState(false);
  const correctPass = process.env.REACT_APP_PASS1;

  const checkPass = (e) => {
    e.preventDefault();
    if (pass.endsWith(correctPass)) {
        window.location.href="/board"
    } else {
        setError(true);
        console.log('Incorrect Password');
    }
  }

  return (
    <div>
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({ 
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            color: 'blue', 
            fontWeight: 900,
        })}
      >
        Login to your account
      </Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="Email" placeholder="you@mantine.dev" required />
        <PasswordInput label="Password" placeholder="Your password" required mt="md" onChange={(e) => setPass(e.target.value)} />
        <Button fullWidth mt="xl" onClick={checkPass}>
          Login
        </Button>
        {
            err ? 
            notifications.show({
                id: 'error-notif',
                withCloseButton: true,
                autoClose: 5000,
                title: "Incorrect Password",
                message: 'Kya kar rha hai bhai? Spaces karle...',
                color: 'red',
                loading: false,
              }) : null
        }
      </Paper>
    </Container>
    </div>
  );
}

export default Login