//12/30/22 - looked at the code a lot but didn't really know what it meant to only store 32 bytes in memory/storage so didn't know what I was trying to achieve; paused.

const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

async function main() {
  // TODO: how do we prove to the server we're on the nice list? 

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    // TODO: add request body parameters here!
  });

  console.log({ gift });
}

main();