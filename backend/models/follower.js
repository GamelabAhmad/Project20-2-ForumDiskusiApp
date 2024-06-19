// models/follower.js
const db = require('../library/database');

const Follower = {
  create: async (followerData, callback) => {
    const { id_followed, id_follower } = followerData;
    const sql = 'INSERT INTO tbl_followers (id_followed, id_follower) VALUES (?, ?)';
    try {
      const [result] = await db.query(sql, [id_followed, id_follower]);
      callback(null, result);
    } catch (err) {
      callback(err);
    }
  },

  update: async (id, followerData, callback) => {
    const { id_followed, id_follower } = followerData;
    const sql = 'UPDATE tbl_followers SET id_followed = ?, id_follower = ? WHERE id_na = ?';
    try {
      const [result] = await db.query(sql, [id_followed, id_follower, id]);
      callback(null, result);
    } catch (err) {
      callback(err);
    }
  },

  delete: async (id, callback) => {
    const sql = 'DELETE FROM tbl_followers WHERE id_na = ?';
    try {
      const [result] = await db.query(sql, [id]);
      callback(null, result);
    } catch (err) {
      callback(err);
    }
  },

  findById: async (id) => {
    const sql = 'SELECT * FROM tbl_followers WHERE id_na = ?';
    try {
      const [result] = await db.query(sql, [id]);
      return result[0];
    } catch (err) {
      throw err;
    }
  },

  findAll: async (callback) => {
    const sql = 'SELECT * FROM tbl_followers';
    try {
      const [result] = await db.query(sql);
      callback(null, result);
    } catch (err) {
      callback(err);
    }
  },
};

module.exports = Follower;
