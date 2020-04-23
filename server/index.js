require('dotenv/config');
const express = require('express');

const db = require('./database');
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const sessionMiddleware = require('./session-middleware');

const app = express();

app.use(staticMiddleware);
app.use(sessionMiddleware);

app.use(express.json());

app.get('/api/health-check', (req, res, next) => {
  db.query('select \'successfully connected\' as "message"')
    .then(result => res.json(result.rows[0]))
    .catch(err => next(err));
});

app.get('/api/users', (req, res, next) => {
  const sql = `
    SELECT *
    FROM "users";
  `;
  db.query(sql)
    .then(result => res.json(result.rows[0]))
    .catch(err => next(err));
});

app.get('/api/discovered', (req, res, next) => {
  const sql = `
    SELECT "pokeid", "id"
    FROM "discoveredpoke"
  `;
  db.query(sql)
    .then(result => res.json(result.rows))
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

// app.post("/api/discovered", (req, res, next) => {
//   const { pokeid } = req.body;
//   const value = [pokeid];

//   const sql = `
//     INSERT INTO "discoveredpoke" ("pokeid")
//     VALUES ($1)
//   `;

//   db.query(sql, value)
// .then((result) => {
//   const data = result.rows[0];
//   res.status(201).json(data);
//     })
// .catch((err) => {
//   console.error(err);
//   res.status(500).json({
//     error: "An unexpected error occurred from POST discovered.",
//   });
// });
// });

app.post('/api/discovered', (req, res, next) => {
  // const { pokeid } = req.body;
  // const value = [pokeid];

  const sql = `
    SELECT *
    FROM "discoveredpoke"
  `;

  db.query(sql)
    .then(result => {
      const data = result.rows.map(e => e);
      return data;
    })

    .then(pokeiddd => {
      for (var i = 0; i < pokeiddd.length; i++) {
        if (pokeiddd[i].pokeid === Number(req.body.pokeid)) {
          return res.status(201).json({
            message: 'pokeId Exist'
          });
        } else {
          const sql = `
        INSERT INTO "discoveredpoke" ("pokeid")
        VALUES ($1)
        returning *
        `;
          return db.query(sql, [Number(req.body.pokeid)]).then(result => {
            const data = result.rows[0];
            res.status(201).json(data);
          });
        }
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred from POST discovered.'
      });
    });
});

app.delete('/api/discovered/:pokeid', (req, res, next) => {
  const pokeid = parseInt(req.params.pokeid);

  const sql = `
  DELETE FROM "discoveredpoke"
  WHERE "pokeid" = $1
  `;

  db.query(sql, [pokeid])
    .then(result =>
      res.status(202).json({
        message: 'Checklist item deleted successfully'
      })
    )
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred from DELETE.'
      });
    });
});

app.use('/api', (req, res, next) => {
  next(new ClientError(`cannot ${req.method} ${req.originalUrl}`, 404));
});

app.use((err, req, res, next) => {
  if (err instanceof ClientError) {
    res.status(err.status).json({ error: err.message });
  } else {
    console.error(err);
    res.status(500).json({
      error: 'an unexpected error occurred'
    });
  }
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});
