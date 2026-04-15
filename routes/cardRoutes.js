const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const Fuse = require('fuse.js');

const getTarotCards = (lang = 'en') => {
  const filePath = path.join(__dirname, `../data/${lang}.json`);
  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(fileContent);
  }
  return JSON.parse(fs.readFileSync(path.join(__dirname, '../data/en.json'), 'utf8'));
};

router.get('/', (req, res) => {
  const lang = req.query.lang || 'en';
  res.json(getTarotCards(lang));
});

router.get('/random', (req, res) => {
  const lang = req.query.lang || 'en';
  const tarotCards = getTarotCards(lang);
  const randomIndex = Math.floor(Math.random() * tarotCards.length);
  const randomCard = tarotCards[randomIndex];
  res.json(randomCard);
});

router.get('/search/:name', (req, res) => {
  const lang = req.query.lang || 'en';
  const tarotCards = getTarotCards(lang);
  const { name } = req.params;

  const fuse = new Fuse(tarotCards, {
    keys: ['name', 'description'],
    threshold: 0.2, // Lower is stricter. 0.3 is a good balance for tarot names.
    ignoreLocation: true, // Search anywhere in the string
  });

  const results = fuse.search(name);

  // Map back to the original card objects
  const finalCards = results.map((result) => result.item);
  res.json(finalCards);
});

module.exports = router;
