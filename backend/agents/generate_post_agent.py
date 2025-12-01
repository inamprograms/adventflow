from core.llm import get_llm

def generate_post_agent(input: dict):
    llm = get_llm()

    year = input["year"]
    day = input["day"]
    part = input["part"]
    approach = input.get("approach", "")
    language = input.get("language", "")
    code = input.get("code", "")

    prompt = f"""
    You are generating social media posts for Advent of Code.

    Create a polished LinkedIn-style post about solving Advent of Code {year} Day {day} Part {part}.

    Include:
    - What the challenge was about (keep generic)
    - My personal approach: {approach}
    - The language used: {language}
    - Encourage others to try the challenge
    - Add relevant hashtags (AdventOfCode, programming, {language})

    The tone should be:
    - Friendly
    - Motivational
    - Short (max 150 words)

    Do NOT include code. Only the post text.
    """

    response = llm.invoke(prompt)
    return response.content
