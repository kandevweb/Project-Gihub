import db from '../../connection'
import { v4 as uuidv4 } from 'uuid'
import { DataTypes, Model, Optional } from 'sequelize'

export interface PostAttributes {
  post_id: string
  content: string
  user_id: string
  image_id: string
  createdAt: Date
  updatedAt: Date
}

interface PostCreationAttributes extends Optional<PostAttributes, 'post_id' | 'createdAt' | 'updatedAt'> {}

class Post extends Model<PostAttributes, PostCreationAttributes> implements PostAttributes {
  declare post_id: string
  declare content: string
  declare user_id: string
  declare image_id: string
  declare readonly createdAt: Date
  declare readonly updatedAt: Date
}

Post.init(
  {
    post_id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING,
      defaultValue: () => uuidv4()
    },
    content: {
      allowNull: true,
      type: DataTypes.STRING
    },
    user_id: {
      allowNull: true,
      type: DataTypes.STRING
    },
    image_id: {
      allowNull: true,
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: true,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: true,
      type: DataTypes.DATE
    }
  },
  {
    timestamps: true,
    sequelize: db,
    underscored: false,
    modelName: 'Post',
    tableName: 'Posts'
  }
)

export default Post
