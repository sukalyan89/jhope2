import express from 'express';

const router = express.Router();

type JhopeResponse = string[];

router.get<{}, JhopeResponse>('/', (req, res) => {
  res.json(['Modna r cha er dokane , Boudi chop vaje Brishti r dine']);
});

export default router;
