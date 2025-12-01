from langgraph.prebuilt import create_react_agent
from langchain_groq import ChatGroq
from core.config import settings

def get_llm():
    """Return a ChatGroq LLM instance using your API key."""
    return ChatGroq(
        api_key=settings.GROQ_API_KEY,  # your Groq API key from env
        model="llama-3.1-8b-instant"    # model chosen
    )

def create_llm_agent(tools=[]):
    """
    Create a ReAct agent with the LLM and optional tools.
    Tools should be a list of callable functions the agent can use.
    """
    llm = get_llm()
    return create_react_agent(
        model=llm,          # pass the LLM instance directly
        tools=tools,
        prompt="You are a helpful assistant for explaining Advent of Code puzzles."
    )

