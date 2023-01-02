import { Model, DataTypes } from 'sequelize';
import sequelize from './index'

interface PostsAttributes {
    postId:number;
    title: string;
    content: string;
}

export class Posts extends Model<PostsAttributes> {
  public readonly postId!: number;
  public title!: string;
  public content!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Posts.init(
    {
    postId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Posts',
      timestamps : true,
    }
);
