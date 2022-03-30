const axios = require("axios");

const getOpenJobsInfos = async (req, res, next) => {
  const companyName = req.params.companyName;
  const endpointLever = `https://api.lever.co/v0/postings/${companyName}?mode=json`;
  let nbrOpenJob = 0;
  let openJobs = [];

  try {
    const response = await axios.get(endpointLever);

    openJobs = response.data.map((job) => {
      const formattedJob = {
        lever_id: job.id,
        name: job.text,
        department: job.categories?.department,
        jobUrl: job.hostedUrl,
        contract: job.categories?.commitment,
        team: job.categories?.commitment,
        location: job.categories?.location,
        publishedAt: new Date(job.createdAt),
      };

      return formattedJob;
    });

    nbrOpenJob = response.data.length;

  } catch (err) {
    return next(err);
  }

  res.json({ companyName, endpointLever, nbrOpenJob, openJobs});
};

exports.getOpenJobsInfos = getOpenJobsInfos;
