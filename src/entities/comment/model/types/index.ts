import { User } from 'entities/user/model';

export interface CommentType {
  id      : string
  user    : User
  message : string
}
