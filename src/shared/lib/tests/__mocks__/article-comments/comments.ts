import { CommentType } from 'entities/comment';

export const COMMENT_ONE: CommentType = {
  id      : '1',
  message : 'Message nuh cho',
  user    : {
    id       : '2',
    username : 'Slava',
    avatar   : ''
  }
};


export const COMMENT_TWO: CommentType = {
  id      : '2',
  message : 'Galyas messsage nuh cho too...',
  user    : {
    id       : '3',
    username : 'Galya',
    avatar   : ''
  }
};


export const COMMENTS: CommentType[] = [
  COMMENT_ONE,
  COMMENT_TWO
];
