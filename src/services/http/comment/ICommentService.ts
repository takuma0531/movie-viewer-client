import { Comment } from "@/typings/models/comment";

export interface ICommentService {
  getCommentById(commentId: string): Promise<Comment>;
  getCommentsByText(text: string): Promise<Comment[] | null>;
  createComment(comment: Comment): Promise<Comment>;
  deleteComment(commentId: string): Promise<void>;
}
