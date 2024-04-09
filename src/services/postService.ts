import { StatusCodes } from 'http-status-codes'
import models from '../db/models'
import { PostInput, PostUpdate } from '../types/post.type'
import { CustomErrorHandler } from '../utils/ErrorHandling'

class postService {
  // Danh sách bài viết
  async fetchAllPosts() {
    const posts = await models.Post.findAll()

    return {
      message: 'Danh sách bài viết',
      data: {
        posts
      }
    }
  }

  // Thêm bài viết
  async addNewPost(post: PostInput) {
    const newPost = await models.Post.create(post)

    return {
      message: 'Thêm bài viết thành công',
      data: {
        post: newPost
      }
    }
  }

  // Cập nhật bài viết
  async updatePost(post_id: string, data: PostUpdate) {
    const post = await models.Post.findByPk(post_id)

    if (!post) {
      throw new CustomErrorHandler(StatusCodes.NOT_FOUND, 'Bài viết không tồn tại!')
    }

    await post.update(data)

    return {
      message: 'Cập nhật bài viết thành công',
      data: {
        post: post
      }
    }
  }

  // Xóa bài viết
  async deletePost(post_id: string) {
    const post = await models.Post.findByPk(post_id)

    if (!post) {
      throw new CustomErrorHandler(StatusCodes.NOT_FOUND, 'Bài viết không tồn tại!')
    }

    await post.destroy()

    return {
      message: 'Xóa bài viết thành công',
      data: {
        post
      }
    }
  }
}

export default new postService()
