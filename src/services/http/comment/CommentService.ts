import { ICommentService } from "./ICommentService";
import { BaseHttpService } from "../base/BaseHttpService";
import { Comment } from "@/typings/models/comment";

const URL_PATH = {
  COMMENT: "comment",
  SEARCH: "search",
};

const URL_QUERY = {
  TEXT: "text",
};

class CommentService extends BaseHttpService implements ICommentService {
  private readonly BASE_ROUTE = "/api/v1/comments";

  public async getCommentById(commentId: string): Promise<Comment> {
    try {
      const { data } = await this.axiosApi.get<Comment>(
        `${this.BASE_ROUTE}/${URL_PATH.COMMENT}/${commentId}`
      );
      return data;
    } catch (err: any) {
      throw err;
    }
  }

  public async getCommentsByText(text: string): Promise<Comment[] | null> {
    try {
      const { data } = await this.axiosApi.get<Comment[]>(
        `${this.BASE_ROUTE}/${URL_PATH.SEARCH}?${URL_QUERY.TEXT}=${text}`
      );
      return data;
    } catch (err: any) {
      throw err;
    }
  }

  public async createComment(comment: Comment): Promise<Comment> {
    try {
      console.log(comment);
      this.setToken();
      const { data } = await this.axiosApi.post<Comment>(
        `${this.BASE_ROUTE}`,
        comment
      );
      return data;
    } catch (err: any) {
      throw err;
    }
  }

  public async deleteComment(commentId: string): Promise<void> {
    try {
      this.setToken();
      await this.axiosApi.delete<void>(
        `${this.BASE_ROUTE}/${URL_PATH.COMMENT}/${commentId}`
      );
    } catch (err: any) {
      throw err;
    }
  }
}

export const commentService = new CommentService();
