import * as express from 'express';

let app = express();

// random comment!
app.listen(3000, () => {
  console.log('Server is listening on localhost:3000');
});
