var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM ?? ";
        connection.query(queryString, [tableInput], function(err, result) {
          if (err) throw err;
          cb(result);
        });
      },

    insertOne: function(tableInput, colname, value, cb){
        var queryString = "select * from ??  where ?? = ?";
        connection.query(queryString, [tableInput, colname, value], function(err, result){
            cb(result)
        })
    },

    updateOne: function(tableInput, colname, valOfCol, colname2, value, cb){
        var queryString = "update ?? set ?? = ?? where ?? = ?";
        connection.query(queryString, [tableInput, colname, valOfCol, colname2, value], function(err, result){
            cb(result)
        })
    }

};

module.exports = orm;