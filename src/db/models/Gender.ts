import db from '../../connection'
import { v4 as uuidv4 } from 'uuid'
import { DataTypes, Model, Optional } from 'sequelize'

export interface GenderAttributes {
  gender_id: string
  gender_name: string
  createdAt: Date
  updatedAt: Date
}

interface GenderCreationAttributes extends Optional<GenderAttributes, 'gender_id' | 'createdAt' | 'updatedAt'> {}

class Gender extends Model<GenderAttributes, GenderCreationAttributes> implements GenderAttributes {
  declare gender_id: string
  declare gender_name: string
  declare readonly createdAt: Date
  declare readonly updatedAt: Date
}

Gender.init(
  {
    gender_id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING,
      defaultValue: () => uuidv4()
    },
    gender_name: {
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
    modelName: 'Gender',
    tableName: 'Genders'
  }
)

export default Gender
