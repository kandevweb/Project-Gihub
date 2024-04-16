import db from '../../connection'
import { v4 as uuidv4 } from 'uuid'
import { DataTypes, Model, Optional } from 'sequelize'

export interface ProductAttributes {
  product_id: string
  product_name: string
  price: number
  user_id: string
  createdAt: Date
  updatedAt: Date
}

interface ProductCreationAttributes extends Optional<ProductAttributes, 'product_id' | 'createdAt' | 'updatedAt'> {}

class Product extends Model<ProductAttributes, ProductCreationAttributes> implements ProductAttributes {
  declare product_id: string
  declare product_name: string
  declare price: number
  declare user_id: string
  declare readonly createdAt: Date
  declare readonly updatedAt: Date
}

Product.init(
  {
    product_id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING,
      defaultValue: () => uuidv4()
    },
    product_name: {
      allowNull: true,
      type: DataTypes.STRING
    },
    price: {
      allowNull: true,
      type: DataTypes.INTEGER
    },
    user_id: {
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
    modelName: 'Product',
    tableName: 'Products'
  }
)

export default Product
