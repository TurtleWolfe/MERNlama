const router = require('express').Router();

router.get('/', (req, res) => {
  res.status(200).send('api users route');
});

module.exports = router;
// export default router;