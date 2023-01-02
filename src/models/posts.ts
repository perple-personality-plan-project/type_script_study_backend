import { Model, DataTypes } from 'sequelize';
import { sequelize } from './index'

class Post extends Model {
    public id!: number;
    public title!: string;
    public content!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Post.init(
    {
        id: {
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
        modelName: 'Post',
        timestamps : true,
    }
);
