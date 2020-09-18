const express = require('express');
const router = express.Router();

const LauncherController = require('../controllers/launcher');
const MainFController = require('../controllers/gta/mainf');
const AudioController = require('../controllers/gta/audio');
const AnimController = require('../controllers/gta/anim');
const DataController = require('../controllers/gta/data');
const Gta3Controller = require('../controllers/gta/gta3');
const GtaIntController = require('../controllers/gta/gtaint');
const ModelsController = require('../controllers/gta/models');
const MtaController = require('../controllers/gta/mta');
const PlayerController = require('../controllers/gta/player');
const TextController = require('../controllers/gta/text');
const VcColController = require('../controllers/gta/vccol');
const VcDffController = require('../controllers/gta/vcdff');
const VcTxdContoller = require('../controllers/gta/vctxd');
const CurrentsController = require('../controllers/gta/currents');
const EnbController = require('../controllers/enb')

// Check connection

router.get('/connect', function (req, res, next) {
  res.status(200).json({'Message': 'OK'});
});

/*
    ** LAUNCHER ROUTES
*/

router.get('/launcher', LauncherController.all);
router.get('/launcher/current', LauncherController.current);
router.get('/launcher/:id', LauncherController.id);
router.post('/launcher', LauncherController.create);
router.put('/launcher/:id', LauncherController.put);
router.delete('/launcher/:id', LauncherController.delete);

/*
    ** GTA ROUTES
 */

// get all currents
router.get('/gta/current', CurrentsController.currents);
router.get('/gta/currents', CurrentsController.currents);

/*
    ** ENB ROUTES
 */

router.get('/enb', EnbController.all);
router.get('/enb/:id', EnbController.id);
router.post('/enb', EnbController.create);
router.put('/enb/:id', EnbController.put);
router.delete('/enb/:id', EnbController.delete);



/*
  ** MainF ROUTES
 */

router.get('/gta/mainf', MainFController.all);
router.get('/gta/mainf/current', MainFController.current);
router.get('/gta/mainf/:id', MainFController.id);
router.post('/gta/mainf', MainFController.create);
router.put('/gta/mainf/:id', MainFController.put);
router.delete('/gta/mainf/:id', MainFController.delete);

/*
  ** AUDIO ROUTES
 */

router.get('/gta/audio', AudioController.all);
router.get('/gta/audio/current', AudioController.current);
router.get('/gta/audio/:id', AudioController.id);
router.post('/gta/audio', AudioController.create);
router.put('/gta/audio/:id', AudioController.put);
router.delete('/gta/audio/:id', AudioController.delete);

/*
 ** ANIM ROUTES
*/

router.get('/gta/anim', AnimController.all);
router.get('/gta/anim/current', AnimController.current);
router.get('/gta/anim/:id', AnimController.id);
router.post('/gta/anim', AnimController.create);
router.put('/gta/anim/:id', AnimController.put);
router.delete('/gta/anim/:id', AnimController.delete);

/*
  ** DATA ROUTES
 */

router.get('/gta/data', DataController.all);
router.get('/gta/data/current', DataController.current);
router.get('/gta/data/:id', DataController.id);
router.post('/gta/data', DataController.create);
router.put('/gta/data/:id', DataController.put);
router.delete('/gta/data/:id', DataController.delete);

/*
  ** GTA3 ROUTES
 */

router.get('/gta/gta3', Gta3Controller.all);
router.get('/gta/gta3/current', Gta3Controller.current);
router.get('/gta/gta3/:id', Gta3Controller.id);
router.post('/gta/gta3', Gta3Controller.create);
router.put('/gta/gta3/:id', Gta3Controller.put);
router.delete('/gta/gta3/:id', Gta3Controller.delete);

/*
  ** GTA_INT ROUTES
 */

router.get('/gta/gtaint', GtaIntController.all);
router.get('/gta/gtaint/current', GtaIntController.current);
router.get('/gta/gtaint/:id', GtaIntController.id);
router.post('/gta/gtaint', GtaIntController.create);
router.put('/gta/gtaint/:id', GtaIntController.put);
router.delete('/gta/gtaint/:id', GtaIntController.delete);

/*
  ** Models ROUTES
 */

router.get('/gta/models', ModelsController.all);
router.get('/gta/models/current', ModelsController.current);
router.get('/gta/models/:id', ModelsController.id);
router.post('/gta/models', ModelsController.create);
router.put('/gta/models/:id', ModelsController.put);
router.delete('/gta/models/:id', ModelsController.delete);

/*
  ** MTA ROUTES
 */

router.get('/gta/mta', MtaController.all);
router.get('/gta/mta/current', MtaController.current);
router.get('/gta/mta/:id', MtaController.id);
router.post('/gta/mta', MtaController.create);
router.put('/gta/mta/:id', MtaController.put);
router.delete('/gta/mta/:id', MtaController.delete);

/*
  ** PLAYER ROUTES
 */

router.get('/gta/player', PlayerController.all);
router.get('/gta/player/current', PlayerController.current);
router.get('/gta/player/:id', PlayerController.id);
router.post('/gta/player', PlayerController.create);
router.put('/gta/player/:id', PlayerController.put);
router.delete('/gta/player/:id', PlayerController.delete);

/*
  ** TEXT ROUTES
 */

router.get('/gta/text', TextController.all);
router.get('/gta/text/current', TextController.current);
router.get('/gta/text/:id', TextController.id);
router.post('/gta/text', TextController.create);
router.put('/gta/text/:id', TextController.put);
router.delete('/gta/text/:id', TextController.delete);

/*
  ** VCCOL ROUTES
 */

router.get('/gta/vccol', VcColController.all);
router.get('/gta/vccol/current', VcColController.current);
router.get('/gta/vccol/:id', VcColController.id);
router.post('/gta/vccol', VcColController.create);
router.put('/gta/vccol/:id', VcColController.put);
router.delete('/gta/vccol/:id', VcColController.delete);

/*
  ** VCDFF ROUTES
 */

router.get('/gta/vcdff', VcDffController.all);
router.get('/gta/vcdff/current', VcDffController.current);
router.get('/gta/vcdff/:id', VcDffController.id);
router.post('/gta/vcdff', VcDffController.create);
router.put('/gta/vcdff/:id', VcDffController.put);
router.delete('/gta/vcdff/:id', VcDffController.delete);

/*
  ** VCTXD ROUTES
 */

router.get('/gta/vctxd', VcTxdContoller.all);
router.get('/gta/vctxd/current', VcTxdContoller.current);
router.get('/gta/vctxd/:id', VcTxdContoller.id);
router.post('/gta/vctxd', VcTxdContoller.create);
router.put('/gta/vctxd/:id', VcTxdContoller.put);
router.delete('/gta/vctxd/:id', VcTxdContoller.delete);

module.exports = router
