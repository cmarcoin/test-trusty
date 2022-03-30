# Job API doc

Run `npm install` to install all depedencies

Then run `npm start`to launche the server (this will use nodemon instead of node)

Note : I would have used swagger for a larger app.
The only accessible endpoint is `/api/jobs/getOpenJobsInfos/{{companyName}}` (GET)

Response looks like this

```json
{
    "companyName": string,
                    example: Netflix
    "openJobs": array of objects

    ...

}
```

