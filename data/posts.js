import { users } from "./users.js";

export const posts = [
  {
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    user: users[0],
    caption: "Nice view!",
    hasLiked: true,
    likes: 12,
    comments: [
      {
        user: users[1],
        text: "Nice post mate!",
      },
      {
        user: users[2],
        text: "I like your post",
      },
    ],
  },
  {
    image: "https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    user: users[1],
    caption: "Nice view!",
    hasLiked: false,
    likes: 12,
    comments: [
      {
        user: users[0],
        text: "Nice post mate!",
      },
      {
        user: users[2],
        text: "I like your post",
      },
    ],
  },
  {
    image: "https://images.unsplash.com/1/type-away.jpg?q=80&fm=jpg",
    user: users[1],
    caption: "codding is fun, right?",
    hasLiked: false,
    likes: 12,
    comments: [
      {
        user: users[0],
        text: "Yeah I like that",
      },
      {
        user: users[2],
        text: "of course, I do",
      },
    ],
  },
  
];
