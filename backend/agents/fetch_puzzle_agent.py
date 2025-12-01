from services.puzzle_scraper import fetch_puzzle
from langgraph.graph import StateGraph

class FetchState(dict):
    year: str
    day: str
    puzzle_text: str

def fetch_node(state: FetchState):
    year = state["year"]
    day = state["day"]
    text = fetch_puzzle(year, day)
    state["puzzle_text"] = text
    return state

def build_fetch_graph():
    graph = StateGraph(FetchState)
    graph.add_node("fetch", fetch_node)
    graph.set_entry_point("fetch")
    return graph.compile()
