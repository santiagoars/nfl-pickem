import requests
import json

key = "1ce374cbe752426cbeb7a95f71cc2f25"
games = requests.get("https://api.sportsdata.io/v3/nfl/scores/json/Schedules/2020?key=" + key)
teams = requests.get("https://api.sportsdata.io/v3/nfl/scores/json/Teams/2020?key=" + key)

scores_dump = json.dumps(games.json())
teams_dump = json.dumps(teams.json())

with open("2020-NFL-teams.json", 'w') as f:
    f.write(teams_dump)
    f.close()


