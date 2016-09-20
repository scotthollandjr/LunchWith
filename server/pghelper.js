"use strict";

// require('dotenv').config();

let pg = require('pg'),
    // config = require('./config'),
    databaseURL = process.env.DATABASE_URL || "postgres://pricdnjbkgcqgv:-IsFp-pWkCWPppo45CSn2IA42z@ec2-23-23-76-90.compute-1.amazonaws.com:5432/d9urkbhh7o3gm8";

exports.query = function (sql, values, singleItem, dontLog) {

    if (!dontLog) {
        console.log(sql, values);
    }

    return new Promise((resolve, reject) => {

        pg.connect(databaseURL, function (err, conn, done) {
            if (err) return reject(err);
            try {
                conn.query(sql, values, function (err, result) {
                    done();
                    if (err) {
                        reject(err);
                    } else {
                        resolve(singleItem ? result.rows[0] : result.rows);
                    }
                });
            }
            catch (e) {
                done();
                reject(e);
            }
        });

    });

};
