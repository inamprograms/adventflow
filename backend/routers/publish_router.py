# API endpoint to call from frontend when user hits Publish: backend/routers/publish_router.py

from fastapi import APIRouter, HTTPException
from services.repo_service import RepoService
from agents.publish_solution_agent import publish_solution_agent

router = APIRouter(prefix="/publish", tags=["publish"])

@router.post("/")
def publish_solution(payload: dict):
    user_id = payload.get("user_id")
    if not user_id:
        raise HTTPException(400, "Missing user_id")

    repo_info = RepoService.get_user_repo(user_id)

    if not repo_info or not repo_info.get("selected_repo"):
        raise HTTPException(400, "User has no repo selected")

    full_repo_path = f"{repo_info['github_username']}/{repo_info['selected_repo']}"
    payload["github_repo"] = full_repo_path
    payload["github_token"] = repo_info["github_token"]

    result = publish_solution_agent(payload)
    return result
