from fastapi import APIRouter, HTTPException
from agents.generate_post_agent import generate_post_agent

router = APIRouter(prefix="/social", tags=["social"])

@router.post("/generate")
def generate_post(payload: dict):  
    if "year" not in payload or "day" not in payload:
        raise HTTPException(400, "Missing required fields")

    result = generate_post_agent(payload)
    return {"post": result}
