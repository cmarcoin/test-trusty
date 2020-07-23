# Intro
In this exercice, we're going to ask you to develop a cron job. The goal of this cron is to generate for each company (see list below) a Slack Message, that will be sent to all employees once a week. For each company, this weekly Slack message will announce to all employees the new jobs that have opened in their company in the last week.

Here is the [Slack formatting message](https://api.slack.com/reference/surfaces/formatting) documentation.

# Exercice 2

## Job to be done 
- Generate 1 Slack message for each company.
- Customize the Slack message with the data retrieved from the Exercice 1 convenient. Be creative, your goal is to announce new jobs openings!

## Enter
Here is the list of companies: `["Swile","Backmarket","Ledger"]`

## Result 
The list of your messages will be stored in a JSON. Check `expected_output.json` to get an id