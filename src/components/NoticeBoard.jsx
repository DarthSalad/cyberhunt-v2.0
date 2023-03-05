import React from 'react'
import { Group, Avatar, Text, Accordion } from '@mantine/core';

const charactersList = [
  {
    id: 'bender',
    image: 'https://www.iconpacks.net/icons/1/free-loud-speaker-icon-1200-thumb.png',
    label: 'Notice 1',
    description: 'Tender Notice',
    content: "Tender notice for one iot enabled car and rfid reader writers",
  },

  {
    id: 'carol',
    image: 'https://cdn3.iconfinder.com/data/icons/social-media-chamfered-corner/154/telegram-512.png',
    label: 'Notice 2',
    description: 'Telegram Group',
    content: "All new freshers are requested to join the following telegram group: https://t.me/+pNfsVWH5wTBkMGU9",
  },

  {
    id: 'homer',
    image: 'https://cdn-icons-png.flaticon.com/512/3861/3861172.png',
    label: 'Notice 3',
    description: 'Stolen Cards',
    content: 'Attention all employees Some of pre-written rfid cards have been stolen, and someone probably hid them in our campus',
  },
  {
    id: 'fry',
    image: 'https://i.pinimg.com/564x/d5/1d/8b/d51d8b2ff28db324ed1be2766f793c43.jpg',
    label: 'Notice 4',
    description: 'Admin Server',
    content: 'The production SSH server  username is "cheemdu" password will be sent to you privately',
  }
];

function AccordionLabel({ label, image, description }) {
  return (
    <Group noWrap>
      <Avatar src={image} radius="xl" size="lg" />
      <div>
        <Text>{label}</Text>
        <Text size="sm" color="dimmed" weight={400}>
          {description}
        </Text>
      </div>
    </Group>
  );
}

function NoticeBoard() {
  const items = charactersList.map((item) => (
    <Accordion.Item value={item.id} key={item.label}>
      <Accordion.Control>
        <AccordionLabel {...item} />
      </Accordion.Control>
      <Accordion.Panel>
        <Text size="sm">{item.content}</Text>
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <div
      style={{
        maxWidth: "70vw",
        margin: "auto"
      }}
    >
      <Accordion chevronPosition="right" variant="contained">{items}</Accordion>
    </div>
  );
}

export default NoticeBoard