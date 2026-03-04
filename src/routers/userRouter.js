import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Exemplo de GET na rota /user');
});

router.post('/', (req, res) => {
  res.send('Exemplo de POST na rota /user');
});

router.put('/', (req, res) => {
  res.send('Exemplo de PUT na rota /user');
});

router.patch('/', (req, res) => {
  res.send('Exemplo de PATCH na rota /user');
});

router.delete('/', (req, res) => {
  res.send('Exemplo de DELETE na rota /user');
});

export default router;