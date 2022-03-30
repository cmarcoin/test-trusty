const axios = require("axios");

const COMPANY_NAMES = ["Swile", "Backmarket", "Ledger"];

let broadCastArray = [];

const buildMessages =  async function() {
    console.log(COMPANY_NAMES)
  for (companyName of COMPANY_NAMES) {
    let openJobs = [];

    // TODO : use .env for the domain
    const endPoint = `http://localhost:5000/api/jobs/getOpenJobsInfos/${companyName.toLowerCase()}`;
    console.log(endPoint)

    try {
        const response = await axios.get(endPoint);

        console.log('réponse',response)
    
        openJobs = response.data.map((job) => {
            //console.log(openJobs)
        });
    
        nbrOpenJobThisWeek = response.data.length;

        // build the slack message here and then put it in the message variable
        const message = {
            nbrOpenJobThisWeek,
            companyName,
          };
  
          broadCastArray.push(message);

    
      } catch (err) {
        //console.log(err)
      }

      

  };
  return broadCastArray
};


const start = async function() {
    const broadCastArray = await buildMessages()
    console.log(broadCastArray)
}

start()


