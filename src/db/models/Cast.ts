import db from '../../connection'
import { v4 as uuidv4 } from 'uuid'
import { DataTypes, Model, Optional } from 'sequelize'

export interface CastAttributes {
  cast_id: string
  full_name: string
  gender_id: string
  avatar_url: string
  nationality: string
  birth_day : Date
  biography : string
  createdAt: Date
  updatedAt: Date
}

interface castCreationAttributes extends Optional<CastAttributes, 'cast_id'  |'createdAt'|'updatedAt'> {}

class Cast extends Model<CastAttributes, castCreationAttributes> implements CastAttributes {
  declare cast_id: string
  declare full_name: string
  declare gender_id: string
  declare avatar_url: string
  declare  nationality: string
  declare  readonly birth_day : Date
  declare biography : string
  declare readonly createdAt: Date
  declare readonly updatedAt: Date
}

Cast.init(
  {
    cast_id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING,
      defaultValue: () => uuidv4()
    },
    full_name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    gender_id: {
      allowNull: false,
      type: DataTypes.STRING
    },
    avatar_url: {
      allowNull: true,
      type: DataTypes.STRING
    },
    nationality: {
      allowNull: true,
      type: DataTypes.STRING
    },
    birth_day: {
        allowNull: true,
        type: DataTypes.DATE
      },
      biography: {
        allowNull: true,
        type: DataTypes.TEXT
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
    modelName: 'Cast',
    tableName: 'Casts'
  }
)

export default Cast
