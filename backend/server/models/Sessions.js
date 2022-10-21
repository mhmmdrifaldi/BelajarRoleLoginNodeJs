const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Sessions', {
    sid: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    expires: {
      type: DataTypes.DATE,
      allowNull: true
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Sessions',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "Sessions_pkey",
        unique: true,
        fields: [
          { name: "sid" },
        ]
      },
    ]
  });
};
