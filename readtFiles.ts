
import { promises, readdirSync } from 'fs';


import admin from 'firebase-admin';
import serviceAccount from './tradeesportivo-f4f302d32882.json';



admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

var url = '/home/apreczewski/Downloads/dbbetfair/2015'

var months = readdirSync(url)


const sendDataToFirestore = async () => {


  // const docRef = db.collection('year')
  //   .doc('2015')
  //   .collection('month')
  //   .doc('01-january')
  //   .collection('day')
  //   .doc('29')
  //   .collection('event')
  //   .doc('27432489')
  //   .collection('market')
  //   .doc('1.118504664');


  // await docRef.set([
  //   { "op": "mcm", "clk": "640671775", "pt": 1430338612896, "mc": [{ "id": "1.118504669", "marketDefinition": { "bspMarket": false, "turnInPlayEnabled": true, "persistenceEnabled": true, "marketBaseRate": 5.0, "eventId": "27432489", "eventTypeId": "1", "numberOfWinners": 1, "bettingType": "ODDS", "marketType": "OVER_UNDER_15", "marketTime": "2015-04-29T19:00:00.000Z", "suspendTime": "2015-04-29T19:00:00.000Z", "bspReconciled": false, "complete": true, "inPlay": true, "crossMatching": true, "runnersVoidable": false, "numberOfActiveRunners": 2, "betDelay": 6, "status": "SUSPENDED", "runners": [{ "status": "ACTIVE", "sortPriority": 1, "id": 1221385, "name": "Under 1.5 Goals" }, { "status": "ACTIVE", "sortPriority": 2, "id": 1221386, "name": "Over 1.5 Goals" }], "regulators": ["MR_INT"], "countryCode": "GT", "discountAllowed": true, "timezone": "Europe/London", "openDate": "2015-04-29T19:00:00.000Z", "version": 973148077, "name": "Over/Under 1.5 Goals", "eventName": "Malacateco v Suchitepequez" } }] },
  //   { "op": "mcm", "clk": "640850617", "pt": 1430340431268, "mc": [{ "id": "1.118504665", "rc": [{ "ltp": 11.0, "id": 11 }, { "ltp": 1.41, "id": 10 }] }, { "id": "1.118504670", "rc": [{ "ltp": 3.55, "id": 1222345 }, { "ltp": 1.39, "id": 1222344 }] }, { "id": "1.118504667", "rc": [{ "ltp": 1.01, "id": 1222347 }] }] }
  // ]
  // );

  const links = []

  const arrayLinks = months.map((month) => {
    const days = readdirSync(url + '/' + month)

    return days.map((day) => {
      const events = readdirSync(url + '/' + month + '/' + day)

      return events.map((event) => {
        const markets = readdirSync(url + '/' + month + '/' + day + '/' + event)


        return markets.map((market) => {
          // const maketData = fs.readFileSync(url + '/' + month + '/' + day + '/' + event + '/' + market);
          // const data = Bunzip.decode(maketData);
          // const newData = data.toString('utf-8').split(/(?:\r\n|\r|\n)/g)
          links.push(url + '/' + month + '/' + day + '/' + event + '/' + market)

          // console.log(url + '/' + month + '/' + day + '/' + event + '/' + market, newData.length);
          // console.log('\n', market.split(".bz2", 1), newData.length)
          // console.log(event)

          // const testOne = async () => {
          //   const docRef = db.collection('year')
          //     .doc('2015')
          //     .collection('month')
          //     .doc(month)
          //     .collection('day')
          //     .doc('29')
          //     .collection('event')
          //     .doc('27432489')
          //     .collection('market')
          //     .doc('1.118504708')
          //     .collection('array')
          //     .doc('1');

          //   // console.log(item)
          //   await docRef.set({ "op": "mcm", "clk": "640658268", "pt": 1430338511494, "mc": [{ "id": "1.118504708", "marketDefinition": { "bspMarket": false, "turnInPlayEnabled": true, "persistenceEnabled": true, "marketBaseRate": 5.0, "eventId": "27432489", "eventTypeId": "1", "numberOfWinners": 1, "bettingType": "ODDS", "marketType": "DRAW_NO_BET", "marketTime": "2015-04-29T19:00:00.000Z", "suspendTime": "2015-04-29T19:00:00.000Z", "bspReconciled": false, "complete": true, "inPlay": true, "crossMatching": true, "runnersVoidable": false, "numberOfActiveRunners": 2, "betDelay": 6, "status": "OPEN", "runners": [{ "status": "ACTIVE", "sortPriority": 1, "id": 9238022, "name": "Malacateco" }, { "status": "ACTIVE", "sortPriority": 2, "id": 9216457, "name": "Suchitepequez" }], "regulators": ["MR_INT"], "countryCode": "GT", "discountAllowed": true, "timezone": "Europe/London", "openDate": "2015-04-29T19:00:00.000Z", "version": 973090403, "name": "Draw No Bet", "eventName": "Malacateco v Suchitepequez" }, "rc": [{ "ltp": 1.42, "id": 9238022 }] }] });
          // }



        })

      })

    })
  })

  console.log(arrayLinks)

}

sendDataToFirestore();

const testOne = async () => {
  const docRef = db.collection('year')
    .doc('2015')
    .collection('month')
    .doc(month)
    .collection('day')
    .doc('29')
    .collection('event')
    .doc('27432489')
    .collection('market')
    .doc('1.118504708')
    .collection('array')
    .doc('1');

  // console.log(item)
  await docRef.set({ "op": "mcm", "clk": "640658268", "pt": 1430338511494, "mc": [{ "id": "1.118504708", "marketDefinition": { "bspMarket": false, "turnInPlayEnabled": true, "persistenceEnabled": true, "marketBaseRate": 5.0, "eventId": "27432489", "eventTypeId": "1", "numberOfWinners": 1, "bettingType": "ODDS", "marketType": "DRAW_NO_BET", "marketTime": "2015-04-29T19:00:00.000Z", "suspendTime": "2015-04-29T19:00:00.000Z", "bspReconciled": false, "complete": true, "inPlay": true, "crossMatching": true, "runnersVoidable": false, "numberOfActiveRunners": 2, "betDelay": 6, "status": "OPEN", "runners": [{ "status": "ACTIVE", "sortPriority": 1, "id": 9238022, "name": "Malacateco" }, { "status": "ACTIVE", "sortPriority": 2, "id": 9216457, "name": "Suchitepequez" }], "regulators": ["MR_INT"], "countryCode": "GT", "discountAllowed": true, "timezone": "Europe/London", "openDate": "2015-04-29T19:00:00.000Z", "version": 973090403, "name": "Draw No Bet", "eventName": "Malacateco v Suchitepequez" }, "rc": [{ "ltp": 1.42, "id": 9238022 }] }] });
}


// await newData.map(async (item, index) => {

//   if (index === 0) {

//     const docRef = db.collection('year')
//       .doc('2015')
//       .collection('month')
//       .doc(month)
//       .collection('day')
//       .doc(day)
//       .collection('event')
//       .doc(event)
//       .collection('market')
//       .doc(market.split(".bz2", 1)[0])
//       .collection('array')
//       .doc(index);

//     console.log(event, item)
//     await new Promise(docRef.set(item));

//   }
// })

// testOne()

// var url = '/home/apreczewski/Downloads/dbbetfair/2015'

// var months = fs.readdirSync(url)

// months.forEach(month => {
//   const days = fs.readdirSync(url + '/' + month)
//   days.forEach(day => {
//     const codes = fs.readdirSync(url + '/' + month + '/' + day)

//     if (month === '04-April' && day === '29') {

//       console.log(month, ' > ', day, ' > ', codes.length)

//       codes.forEach(code => {
//         const events = fs.readdirSync(url + '/' + month + '/' + day + '/' + code)

//         console.log(code)
//         // events.forEach(event => {
//         //   const compressedData = fs.readFileSync(url + '/' + month + '/' + day + '/' + code + '/' + event);
//         //   const data = Bunzip.decode(compressedData);


//         //   // console.log(event)
//         //   // console.log(data.toString().split(/(?:\r\n|\r|\n)/g), '\n')
//         // });
//       });
//     }
//   });
// });


// var templates = require('./test.json');

// console.log(test)
// console.log(templates)

  // var zlib = require('zlib');
  // var gzip = zlib.createGzip();
  // var fs = require('fs');
  // var inp = fs.createReadStream('input.txt');
  // var out = fs.createWriteStream('input.txt.gz');
  // inp.pipe(gzip).pipe(out);


