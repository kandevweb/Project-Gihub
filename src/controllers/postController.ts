import { Request, Response } from 'express'
import postService from '../services/postService'
import { sendResponseSuccess } from '../utils/response'
import { PostInput, PostUpdate } from '../types/post.type'

class postController {
  // Danh sách bài viết
  async fetchAllPost(req: Request, res: Response) {
    const data = await postService.fetchAllPosts()

    sendResponseSuccess(res, data)
  }

  // Thêm bài viết
  async addNewPost(req: Request, res: Response) {
    const post: PostInput = req.body

    const data = await postService.addNewPost(post)

    sendResponseSuccess(res, data)
  }

  // Cập nhật bài viết
  async updatePost(req: Request, res: Response) {
    const { post_id } = req.params
    const post: PostUpdate = req.body

    const data = await postService.updatePost(post_id, post)

    sendResponseSuccess(res, data)
  }

  // Xóa bài viết
  async deletePost(req: Request, res: Response) {
    const { post_id } = req.params

    const data = await postService.deletePost(post_id)

    sendResponseSuccess(res, data)
  }
}

export default new postController()
