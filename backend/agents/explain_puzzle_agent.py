from langgraph.graph import StateGraph
from core.llm import create_llm_agent

# Define the state structure
class ExplainState(dict):
    puzzle_text: str
    explanation: str

# Node function
def explain_node(state: ExplainState):
    agent = create_llm_agent(tools=[])  # empty tools for now
    text = state.get("puzzle_text", "")

    # Invoke agent with proper structured message
    result = agent.invoke({
        "messages": [
            {
                "role": "user",
                "content": f"Explain this Advent of Code puzzle in simple terms:\n\n{text}"
            }
        ]
    })
    # Extract output
    messages = result.get("messages", [])
    if len(messages) > 1:
        explanation =  messages[1].content
    else:
        explanation = "No explanation generated."
    state["explanation"] = explanation
    return state

# Build graph
def build_explain_graph():
    graph = StateGraph(ExplainState)
    graph.add_node("explain", explain_node)
    graph.set_entry_point("explain")
    return graph.compile()

