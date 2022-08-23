const express = require("express");
const router = express.Router();
const Name = require("../models/childNames.model");
const FiltersList = require("../models/filtersList.model");

const { Gender } = require("../utils/enums");

router.get("/", async (req, res) => {
  try {
    const {
      size,
      pageNumber,
      startingLetter,
      gender,
      nakshatra,
      rashi,
      religion,
      numerology
    } = req.query;
    //mandatory fields
    if (pageNumber && Number(size)) {
      let query = {};
    //optional fields
      if (startingLetter) {
        query = {
          startingLetter: startingLetter.toUpperCase(),
        };
      }
      if (gender) {
        query = { ...query, gender: gender };
      }
      if (nakshatra) {
        const nakshatraRegx = new RegExp(nakshatra, "i");
        query = { ...query, nakshatra: nakshatraRegx };
      }
      if (rashi) {
        const rashiRegx = new RegExp(rashi, "i");
        query = { ...query, rashi: rashiRegx };
      }
      if (religion) {
        const religionRegx = new RegExp(religion, "i");
        query = { ...query, religion: religionRegx };
      }
      if (numerology) {
        query = { ...query, numerology: numerology };
      }
      if(syllables){
        query = { ...query, syllables: syllables }
      }
      if(lengthofletters){
        query = { ...query, lengthofletters: lengthofletters }
      }
      console.log(query);
      const namesStartingWithStartingLetter = await Name.find(query)
        .limit(Number(size))
        .skip(Number(size * pageNumber));
      //what if record is not found
      res.send(namesStartingWithStartingLetter);
    } else {
      res.sendStatus(404).json({ message: "Query missing or incorrect" });
    }
  } catch (err) {
    console.log(err);
  }
});

//Add Filters List
//ERR_HTTP_HEADERS_SENT for any additional route
// router.get("/", async (req, res) => {
//   try {
//     const allNames = await Name.find({})
//     const len = allNames.length;
//     const rashiObj = {};
//     const genderObj = {};
//     const religionObj = {};
//     const nakshatraObj = {};
//     const originObj = {};
//     for (let i = 0; i < len; i++) {
//       if (!rashiObj[allNames[i].rashi]) {
//         rashiObj[allNames[i].rashi] = allNames[i].rashi;
//       }
//       if (!genderObj[allNames[i].gender]) {
//         genderObj[allNames[i].gender] = allNames[i].gender;
//       }
//       if (!religionObj[allNames[i].religion]) {
//         religionObj[allNames[i].religion] = allNames[i].religion;
//       }
//       if (!nakshatraObj[allNames[i].nakshatra]) {
//         nakshatraObj[allNames[i].nakshatra] = allNames[i].nakshatra;
//       }
//       if (!originObj[allNames[i].origin]) {
//         originObj[allNames[i].origin] = allNames[i].origin;
//       }
//       console.log(`${i}th entry is done`);
//     }
//     const rashi = Object.keys(rashiObj);
//     const gender = Object.keys(genderObj);
//     const religion = Object.keys(religionObj);
//     const nakshatra = Object.keys(nakshatraObj);
//     const origin = Object.keys(originObj);

//     const filterList = new FiltersList({
//       gender:gender,
//       rashi:rashi,
//       religion:religion,
//       nakshatra:nakshatra,
//       origin:origin
//     });
//     await filterList.save()
//     console.log("successfull",filterList);
//     res.sendStatus(200).json({ message: "successfull" });
//   } catch (err) {
//     console.log(err);
//   }
// });

//ADD ALL DATA
// router.post("/addAllData", async (req, res) => {
//   try {
//     res.send("Posted Names");
//     for (let i = 0; i < data.length; i++) {
//       const name = new Name({
//         childName: data[i].babyname,
//         gender: data[i].gender,
//         meaning: data[i].meaning,
//         numerology: data[i].numerology,
//         lengthofletters: data[i].lengthofletters,
//         startingLetter: data[i].startingwith,
//         syllables: data[i].syllables,
//         religion: data[i].religion,
//         origin: data[i].origin,
//         rashi: data[i].rashi,
//         similarNames: data[i].similarnames.trim().split(","),
//         nakshatra: data[i].nakshatra,
//         viewCount: data[i].viewcount,
//         status: data[i].status,
//       });

//       await name.save();
//       console.log(`${i}th name is pushed`);
//     }
//     console.log("successfull");
//   } catch (err) {
//     console.log("Post req error:", err);
//   }
// });

module.exports = router;
