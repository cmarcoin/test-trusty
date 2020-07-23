# Intro

In this level, we going to ask you to develop an endpoint that retrieve informations about any company’s open jobs on a platform call :  [Lever]("https://www.lever.co/").

# Level 1

## Job to be done 
- When call API endpoint `/getOpenJobsInfos/{{companyName}}` retrieve informations about jobs open in Lever platform for this `companyName`.
- Write a small documentation about your API

## Enter 
You will use the job board open source data from this endpoint : 
`https://api.lever.co/v0/postings/{{companyName}}?mode=json`

## Exit 
Our Api endpoint need return the data as expected in the JSON `expected_output.json`