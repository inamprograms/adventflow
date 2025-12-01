# backend/agents/publish_solution_agent.py
# This uses LangGraph and orchestrates:
# Fetch puzzle text (using your existing agent)
# Build folder structure + README
# Push to repo

from langgraph.graph import StateGraph
from services.file_builder import FileBuilderService
from services.github_committer import GitHubCommitter
from agents.fetch_puzzle_agent import fetch_puzzle
import tempfile
import os

def publish_solution_agent(input: dict):
        
    """
    input = {
        "year": "2025",
        "day": "03",
        "part": "1",
        "code": "...",
        "extension": "py",
        "approach": "...",
        "user_id": "uuid",
        "github_repo": "username/repo",
        "github_token": "token"
    }
    """

    year = input["year"]
    day = input["day"]
    part = input["part"]
    extension = input["extension"]
    code = input["code"]
    approach = input["approach"]

    # Step 1 — Fetch puzzle text
    puzzle_text = fetch_puzzle(year, day)

    # Step 2 — Build files locally
    tmp = tempfile.mkdtemp()
    day_dir = FileBuilderService.build_folder_structure(tmp, year, day)

    code_file = FileBuilderService.build_code_file(day_dir, part, extension, code)

    readme_file = FileBuilderService.build_readme(
        day_dir,
        puzzle_text,
        approach if part == "1" else None,
        approach if part == "2" else None
    )

    # Step 3 — Commit to GitHub 
    committer = GitHubCommitter(input["github_token"], input["github_repo"])

    relative_dir = f"{year}/Day {day.zfill(2)}"

    committer.upload_file(code_file,
                          f"{relative_dir}/Part {part.zfill(2)}.{extension}",
                          f"Add solution for {year} Day {day} Part {part}")

    committer.upload_file(readme_file,
                          f"{relative_dir}/README.md",
                          f"Add README for {year} Day {day}")

    return {"status": "success"}
