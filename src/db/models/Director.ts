import db from '../../connection'
import { v4 as uuidv4 } from 'uuid'
import { DataTypes, Model, Optional } from 'sequelize'

export interface DirectorsAttributes {
  director_id: string
  fullname: string
  gender_id: string
  nationality: string
  birth_day: Date
  biography: string
  createdAt: Date
  updatedAt: Date
}

interface DirectorsCreationAttributes
  extends Optional<DirectorsAttributes, 'director_id' | 'createdAt' | 'updatedAt'> {}

class Director extends Model<DirectorsAttributes, DirectorsCreationAttributes> implements DirectorsAttributes {
  declare director_id: string
  declare fullname: string
  declare gender_id: string
  declare nationality: string
  declare birth_day: Date
  declare biography: string
  declare readonly createdAt: Date
  declare readonly updatedAt: Date
}

Director.init(
  {
    director_id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING,
      defaultValue: () => uuidv4()
    },
    fullname: {
      allowNull: true,
      type: DataTypes.STRING
    },
    gender_id: {
      allowNull: true,
      type: DataTypes.STRING
    },
    nationality: {
      allowNull: true,
      type: DataTypes.TEXT
    },
    birth_day: {
      allowNull: true,
      type: DataTypes.DATE
    },
    biography: {
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
    modelName: 'Director',
    tableName: 'Directors'
  }
)
export default Director
