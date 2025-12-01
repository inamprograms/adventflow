import requests
from bs4 import BeautifulSoup

def fetch_puzzle(year: str, day: str) -> str:
    url = f"https://adventofcode.com/{year}/day/{day}"

    res = requests.get(url)
    res.raise_for_status()

    soup = BeautifulSoup(res.text, "html.parser")
    article = soup.select_one("article.day-desc")

    if not article:
        return "No puzzle found."

    # Convert <article> HTML → clean Markdown-like text
    text = article.get_text("\n")
    return text.strip()
