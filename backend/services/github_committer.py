# Pushes files to selected repo: backend/services/github_committer.py

import base64
import requests

class GitHubCommitter:

    def __init__(self, token: str, repo_full_name: str):
        self.token = token
        self.repo = repo_full_name
        self.api = f"https://api.github.com/repos/{self.repo}"

    def upload_file(self, file_path: str, repo_path: str, message: str):
    
        with open(file_path, "rb") as f:
            content = base64.b64encode(f.read()).decode()

        url = f"{self.api}/contents/{repo_path}"

        payload = {
            "message": message,
            "content": content,
        }

        r = requests.put(url, json=payload, headers={
            "Authorization": f"token {self.token}",
            "Accept": "application/vnd.github.v3+json"
        })

        if r.status_code not in [200, 201]:
            raise Exception(f"GitHub error: {r.text}")

        return r.json()
