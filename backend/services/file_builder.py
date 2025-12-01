# Creates folder structure + README content : backend/services/file_builder.py

import os
from datetime import datetime

class FileBuilderService:

    @staticmethod
    def build_folder_structure(base_path: str, year: str, day: str):
        year_dir = os.path.join(base_path, year)
        day_dir = os.path.join(year_dir, f"Day {day.zfill(2)}")
        os.makedirs(day_dir, exist_ok=True)
        return day_dir

    @staticmethod
    def build_code_file(day_dir: str, part: str, extension: str, code: str):
        file_name = f"Part {part.zfill(2)}.{extension}"
        file_path = os.path.join(day_dir, file_name)

        with open(file_path, "w") as f:
            f.write(code)

        return file_path

    @staticmethod
    def build_readme(day_dir: str, puzzle_text: str, approach_part1: str | None, approach_part2: str | None):
        readme_path = os.path.join(day_dir, "README.md")

        md = "# Advent of Code Solution\n\n"
        md += "## Puzzle Summary\n"
        md += puzzle_text + "\n\n"

        if approach_part1:
            md += "### Part 1 Approach\n"
            md += approach_part1 + "\n\n"

        if approach_part2:
            md += "### Part 2 Approach\n"
            md += approach_part2 + "\n\n"

        with open(readme_path, "w") as f:
            f.write(md)

        return readme_path

    @staticmethod
    def build_year_readme(year: str, base_path: str, days: list):
        readme_path = os.path.join(base_path, year, "README.md")

        md = f"# Advent of Code {year}\n\n"
        md += "[Advent of Code Official](https://adventofcode.com)\n\n"
        md += "## Completed Days\n"

        for d in days:
            md += f"- [Day {str(d).zfill(2)}](./Day%20{str(d).zfill(2)})\n"

        with open(readme_path, "w") as f:
            f.write(md)

        return readme_path
