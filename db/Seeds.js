require("dotenv").config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);
console.log(1)
const Attacker = require('../Models/Attacker');
const Defender = require('../Models/Defender');
console.log(2)
Attacker.remove({}, (err) => console.log(err));
Defender.remove({}, (err) => console.log(err));
console.log(3)
//Attackers
const Ash = new Attacker({
    name: 'Ash',
    imgUrl: 'https://vignette.wikia.nocookie.net/rainbowsix/images/d/d7/Ash_Icon_-_Standard.png/revision/latest?cb=20151222045522'
});
console.log(4)
const Thermite = new Attacker({
    name: 'Thermite',
    imgUrl: 'https://vignette.wikia.nocookie.net/rainbowsix/images/e/e3/Thermite_Badge_2.png/revision/latest?cb=20151222045527'
});

const Sledge = new Attacker({
    name: 'Sledge',
    imgUrl: 'https://vignette.wikia.nocookie.net/rainbowsix/images/7/76/Sledge_Icon_-_Standard.png/revision/latest?cb=20151222045526'
});
const Thatcher = new Attacker({
    name: 'Thatcher',
    imgUrl: 'https://vignette.wikia.nocookie.net/rainbowsix/images/6/6d/Thatcher_Icon_-_Standard.png/revision/latest?cb=20151222045527'
});

const Twitch = new Attacker({
    name: 'Twitch',
    imgUrl: 'https://vignette.wikia.nocookie.net/rainbowsix/images/4/47/Twitch_Badge_New_2.png/revision/latest?cb=20151222045527'
});

const Montagne = new Attacker({
    name: 'Montagne',
    imgUrl: 'https://vignette.wikia.nocookie.net/rainbowsix/images/b/be/Montagne_Badge_2.png/revision/latest?cb=20151222045525'
});

const Glaz = new Attacker({
    name: 'Glaz',
    imgUrl: 'https://vignette.wikia.nocookie.net/rainbowsix/images/8/8d/Glaz_Badge_2.png/revision/latest?cb=20151222045524'
});

const Fuze = new Attacker({
    name: 'Fuze',
    imgUrl: 'https://vignette.wikia.nocookie.net/rainbowsix/images/3/3f/Fuze_Badge_2.png/revision/latest?cb=20151222045524'
});

const Blitz = new Attacker({
    name: 'Blitz',
    imgUrl: 'https://vignette.wikia.nocookie.net/rainbowsix/images/6/62/Blitz_Badge_2.png/revision/latest?cb=20151222045523'
});

const IQ = new Attacker({
    name: 'IQ',
    imgUrl: 'https://vignette.wikia.nocookie.net/rainbowsix/images/b/b7/IQ_Badge_2.png/revision/latest?cb=20151222045524'
});

const Buck = new Attacker({
    name: 'Buck',
    imgUrl: 'https://vignette.wikia.nocookie.net/rainbowsix/images/3/34/Buck_Badge_New.png/revision/latest?cb=20160203040454'
});

const Blackbeard = new Attacker({
    name: 'Blackbeard',
    imgUrl: 'https://vignette.wikia.nocookie.net/rainbowsix/images/d/dd/Blackbeard_badge.png/revision/latest?cb=20160509214645'
});

const Capitão = new Attacker({
    name: 'Capitão',
    imgUrl: 'https://vignette.wikia.nocookie.net/rainbowsix/images/4/4e/R6S-badge-capitao.png/revision/latest?cb=20160802150526'
});

const Hibana = new Attacker({
    name: 'Hibana',
    imgUrl: 'https://vignette.wikia.nocookie.net/rainbowsix/images/7/79/R6S-hibana.png/revision/latest?cb=20161118012747'
});

const Jackal = new Attacker({
    name: 'Jackal',
    imgUrl: 'https://vignette.wikia.nocookie.net/rainbowsix/images/d/d4/R6S-jackal.png/revision/latest?cb=20170206195745'
});

const Zofia = new Attacker({
    name: 'Zofia',
    imgUrl: 'https://vignette.wikia.nocookie.net/rainbowsix/images/f/fb/Zofia_icon.png/revision/latest?cb=20171115182418'
});

const Ying = new Attacker({
    name: 'Ying',
    imgUrl: 'https://vignette.wikia.nocookie.net/rainbowsix/images/d/d7/R6S-Ying.png/revision/latest?cb=20170828194010'
});

const Dokkaebi = new Attacker({
    name: 'Dokkaebi',
    imgUrl: 'https://vignette.wikia.nocookie.net/rainbowsix/images/0/0c/Dokkaebi_icon.png/revision/latest?cb=20171120222956'
});

const Lion = new Attacker({
    name: 'Lion',
    imgUrl: 'https://vignette.wikia.nocookie.net/rainbowsix/images/4/47/Lion.png/revision/latest?cb=20180220011251'
});

const Finka = new Attacker({
    name: 'Finka',
    imgUrl: 'https://vignette.wikia.nocookie.net/rainbowsix/images/d/de/Finka_icon.png/revision/latest?cb=20180220011308'
});

//Defenders
const Castle = new Defender({
    name: 'Castle',
    imgUrl: 'https://vignette.wikia.nocookie.net/rainbowsix/images/a/a9/Castle_Badge_2.png/revision/latest?cb=20151222045523'
});

const Pulse = new Defender({
    name: 'Pulse',
    imgUrl: 'https://vignette.wikia.nocookie.net/rainbowsix/images/4/40/Pulse_Badge_2.png/revision/latest?cb=20151222045526'
});

const Smoke = new Defender({
    name: 'Smoke',
    imgUrl: 'https://vignette.wikia.nocookie.net/rainbowsix/images/a/ae/Smoke_Icon_-_Standard.png/revision/latest?cb=20151222045526'
});

const Mute = new Defender({
    name: 'Mute',
    imgUrl: 'https://vignette.wikia.nocookie.net/rainbowsix/images/c/c2/Mute_Icon_-_Standard.png/revision/latest?cb=20151222045525'
});

const Doc = new Defender({
    name: 'Doc',
    imgUrl: 'https://vignette.wikia.nocookie.net/rainbowsix/images/8/8f/Doc_Badge_2.png/revision/latest?cb=20151222045524'
});

const Rook = new Defender({
    name: 'Rook',
    imgUrl: 'https://vignette.wikia.nocookie.net/rainbowsix/images/a/ab/Rook_Badge_New_2.png/revision/latest?cb=20151222045526'
});

const Tachanka = new Defender({
    name: 'Tachanka',
    imgUrl: 'https://vignette.wikia.nocookie.net/rainbowsix/images/4/47/Tachanka_Badge.png/revision/latest?cb=20151202171641'
});

const Kapkan = new Defender({
    name: 'Kapkan',
    imgUrl: 'https://vignette.wikia.nocookie.net/rainbowsix/images/8/81/Kapkan_Badge_2.png/revision/latest?cb=20151222045525'
});

const Jäger = new Defender({
    name: 'Jäger',
    imgUrl: 'https://vignette.wikia.nocookie.net/rainbowsix/images/9/95/Jager_Badge_2.png/revision/latest?cb=20151222045525'
});

const Bandit = new Defender({
    name: 'Bandit',
    imgUrl: 'https://vignette.wikia.nocookie.net/rainbowsix/images/9/95/Jager_Badge_2.png/revision/latest?cb=20151222045525'
});

const Frost = new Defender({
    name: 'Frost',
    imgUrl: 'https://vignette.wikia.nocookie.net/rainbowsix/images/c/c1/Frost_Badge_New.png/revision/latest?cb=20160203040937'
});

const Valkyrie = new Defender({
    name: 'Valkyrie',
    imgUrl: 'https://vignette.wikia.nocookie.net/rainbowsix/images/e/ef/Valkyrie_badge.png/revision/latest?cb=20160509214702'
});

const Caveira = new Defender({
    name: 'Caveira',
    imgUrl: 'https://vignette.wikia.nocookie.net/rainbowsix/images/e/ef/R6S-badge-caveira.png/revision/latest?cb=20160802150554'
});

const Echo = new Defender({
    name: 'Echo',
    imgUrl: 'https://vignette.wikia.nocookie.net/rainbowsix/images/b/b4/R6S-echo.png/revision/latest?cb=20161118012816'
});

const Mira = new Defender({
    name: 'Mira',
    imgUrl: 'https://vignette.wikia.nocookie.net/rainbowsix/images/8/8f/R6S-mira.png/revision/latest?cb=20170206200012'
});

const Lesion = new Defender({
    name: 'Lesion',
    imgUrl: 'https://vignette.wikia.nocookie.net/rainbowsix/images/d/d2/R6S-Lesion.png/revision/latest?cb=20170828194022'
});

const Ela = new Defender({
    name: 'Ela',
    imgUrl: 'https://vignette.wikia.nocookie.net/rainbowsix/images/3/3f/Ela_icon.png/revision/latest?cb=20170913223125'
});

const Vigil = new Defender({
    name: 'Vigil',
    imgUrl: 'https://vignette.wikia.nocookie.net/rainbowsix/images/1/1d/Vigil_icon.png/revision/latest?cb=20171120223005'
});
console.log(5)
Ash.save(function(err) {
    if (err) console.log(err);

    console.log('Ash created!');
});
console.log(6)
Thermite.save(function(err) {
    if (err) console.log(err);

    console.log('Thermite created!');
});

Sledge.save(function(err) {
    if (err) console.log(err);

    console.log('Sledge created!');
});

Thatcher.save(function(err) {
    if (err) console.log(err);

    console.log('Thatcher created!');
});

Twitch.save(function(err) {
    if (err) console.log(err);

    console.log('Twitch created!');
});

Montagne.save(function(err) {
    if (err) console.log(err);

    console.log('Montagne created!');
});

Glaz.save(function(err) {
    if (err) console.log(err);

    console.log('Glaz created!');
});

Fuze.save(function(err) {
    if (err) console.log(err);

    console.log('Fuze created!');
});

Blitz.save(function(err) {
    if (err) console.log(err);

    console.log('blitz created!');
});

IQ.save(function(err) {
    if (err) console.log(err);

    console.log('IQ created!');
});

Buck.save(function(err) {
    if (err) console.log(err);

    console.log('Buck created!');
});

Blackbeard.save(function(err) {
    if (err) console.log(err);

    console.log('Blackbeard created!');
});

Capitão.save(function(err) {
    if (err) console.log(err);

    console.log('Capitão created!');
});

Hibana.save(function(err) {
    if (err) console.log(err);

    console.log('Hibana created!');
});

Jackal.save(function(err) {
    if (err) console.log(err);

    console.log('Jackal created!');
});

Zofia.save(function(err) {
    if (err) console.log(err);

    console.log('Zofia created!');
});

Ying.save(function(err) {
    if (err) console.log(err);

    console.log('Ying created!');
});

Dokkaebi.save(function(err) {
    if (err) console.log(err);

    console.log('Dokkaebi created!');
});

Lion.save(function(err) {
    if (err) console.log(err);

    console.log('Lion created!');
});

Finka.save(function(err) {
    if (err) console.log(err);

    console.log('Finka created!');
});

Castle.save(function(err) {
    if (err) console.log(err);

    console.log('Castle created!');
});

Pulse.save(function(err) {
    if (err) console.log(err);

    console.log('Pulse created!');
});

Smoke.save(function(err) {
    if (err) console.log(err);

    console.log('Smoke created!');
});

Mute.save(function(err) {
    if (err) console.log(err);

    console.log('Mute created!');
});

Doc.save(function(err) {
    if (err) console.log(err);

    console.log('Rook created!');
});

Tachanka.save(function(err) {
    if (err) console.log(err);

    console.log('Tachanka created!');
});

Kapkan.save(function(err) {
    if (err) console.log(err);

    console.log('Kapkan created!');
});

Jäger.save(function(err) {
    if (err) console.log(err);

    console.log('Jäger created!');
});

Bandit.save(function(err) {
    if (err) console.log(err);

    console.log('Bandit created!');
});

Frost.save(function(err) {
    if (err) console.log(err);

    console.log('Frost created!');
});

Valkyrie.save(function(err) {
    if (err) console.log(err);

    console.log('Valkyrie created!');
});

Caveira.save(function(err) {
    if (err) console.log(err);

    console.log('Caveira created!');
});

Echo.save(function(err) {
    if (err) console.log(err);

    console.log('Echo created!');
});
 
Mira.save(function(err) {
    if (err) console.log(err);

    console.log('Mira created!');
});

Lesion.save(function(err) {
    if (err) console.log(err);

    console.log('Lesion created!');
});

Ela.save(function(err) {
    if (err) console.log(err);

    console.log('Ela created!');
});

Vigil.save(function(err) {
    if (err) console.log(err);

    console.log('Vigil created!');
});
console.log(7)
mongoose.connection.close();
console.log(8)
const n = new Error;
console.log(n.stack)