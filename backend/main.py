from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from agents.fetch_puzzle_agent import build_fetch_graph
from agents.explain_puzzle_agent import build_explain_graph
from routers.publish_router import router as publish_router
from routers.social_router import router as social_router

app = FastAPI()

app.include_router(publish_router)
app.include_router(social_router)

# Allow CORS
# origins = [
#     "http://localhost:5173",  
#     "http://127.0.0.1:5173"
# ]

app.add_middleware(
    CORSMiddleware,
    # allow_origins=origins,
    allow_origins = ["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

fetch_graph = build_fetch_graph()
explain_graph = build_explain_graph()

@app.get("/")
def root():
    return {"status": "backend running"}

@app.get("/puzzle/fetch")
async def fetch_puzzle(year: str, day: str):
    result = fetch_graph.invoke({"year": year, "day": day})
    return {"puzzle": result["puzzle_text"]}

@app.post("/puzzle/explain")
async def explain_puzzle(data: dict):
    puzzle_text = data.get("puzzle")
    result = explain_graph.invoke({"puzzle_text": puzzle_text})
    return {"explanation": result["explanation"]}