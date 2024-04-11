import db from '../../connection'
import { v4 as uuidv4 } from 'uuid'
import { DataTypes, Model, Optional } from 'sequelize'

export interface ProfileAttributes {
  profile_id: string
  biography: string
  profile_picture: string
  cover_photo: string
  date_of_birth: Date
  job: string
  alias: string
  gender_id: string
  user_id: string
  createdAt: Date
  updatedAt: Date
}

interface ProfileCreationAttributes
  extends Optional<ProfileAttributes, 'user_id' | 'profile_id' | 'createdAt' | 'updatedAt'> {}

class Profile extends Model<ProfileAttributes, ProfileCreationAttributes> implements ProfileAttributes {
  declare profile_id: string
  declare biography: string
  declare profile_picture: string
  declare cover_photo: string
  declare date_of_birth: Date
  declare job: string
  declare alias: string
  declare gender_id: string
  declare user_id: string
  declare readonly createdAt: Date
  declare readonly updatedAt: Date
}

Profile.init(
  {
    profile_id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING,
      defaultValue: () => uuidv4()
    },
    biography: {
      allowNull: true,
      type: DataTypes.STRING
    },
    profile_picture: {
      allowNull: true,
      type: DataTypes.STRING
    },
    cover_photo: {
      allowNull: true,
      type: DataTypes.STRING
    },
    date_of_birth: {
      allowNull: true,
      type: DataTypes.DATE
    },
    job: {
      allowNull: true,
      type: DataTypes.STRING
    },
    alias: {
      allowNull: true,
      type: DataTypes.STRING
    },
    gender_id: {
      allowNull: false,
      type: DataTypes.STRING
    },
    user_id: {
      allowNull: false,
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
    modelName: 'Profile',
    tableName: 'Profiles'
  }
)

export default Profile
