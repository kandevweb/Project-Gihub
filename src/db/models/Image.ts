import db from '../../connection'
import { v4 as uuidv4 } from 'uuid'
import { DataTypes, Model, Optional } from 'sequelize'

export interface ImageAttributes {
  image_id: string
  url: string
  createdAt: Date
  updatedAt: Date
}

interface ImageCreationAttributes extends Optional<ImageAttributes, 'image_id' | 'createdAt' | 'updatedAt'> {}

class Image extends Model<ImageAttributes, ImageCreationAttributes> implements ImageAttributes {
  declare image_id: string
  declare url: string
  declare readonly createdAt: Date
  declare readonly updatedAt: Date
}

Image.init(
  {
    image_id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING,
      defaultValue: () => uuidv4()
    },
    url: {
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
    modelName: 'Image',
    tableName: 'Images'
  }
)

export default Image
