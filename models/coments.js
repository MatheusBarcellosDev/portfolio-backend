module.exports = (sequelize, DataTypes) => {
  const Comentario = sequelize.define('Comentario', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      message: { type: DataTypes.STRING, allowNull: false },
      name: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false },
      status: { type: DataTypes.BOOLEAN, defaultValue: false },
  }, {
      tableName: 'Coments',
      timestamps: true,
  });

  return Comentario;
}