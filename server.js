
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log("Microservices rock!");
    const food = process.env.FAVORITE_FOOD;
    console.log(`...and my favorite food is ${food}`);
    await sleep(5000);
  }
}

main();
