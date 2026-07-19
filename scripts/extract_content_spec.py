import json
import re
import sys
from pathlib import Path

from docx import Document


def extract_json_objects(source: Path) -> list[dict]:
    paragraphs = [paragraph.text.strip() for paragraph in Document(source).paragraphs]
    questions: list[dict] = []

    for index, paragraph in enumerate(paragraphs):
        if not re.match(r"^Q\d{2}\s+[—-]", paragraph):
            continue

        pieces: list[str] = []
        depth = 0
        started = False
        for candidate in paragraphs[index + 1 :]:
            if not started and "{" not in candidate:
                continue
            started = True
            pieces.append(candidate)
            depth += candidate.count("{") - candidate.count("}")
            if depth == 0:
                break

        questions.append(json.loads("\n".join(pieces)))

    if len(questions) != 15:
        raise ValueError(f"Expected 15 questions, found {len(questions)}")
    return questions


def main() -> None:
    source = Path(sys.argv[1])
    destination = Path(sys.argv[2])
    questions = extract_json_objects(source)
    payload = json.dumps(questions, ensure_ascii=False, indent=2)
    destination.write_text(
        "// Generated from V1.0 - Content Spec Updated.docx.\n"
        "// Keep editorial content in this data layer; game behavior belongs elsewhere.\n"
        f"export const contentSpecQuestions = {payload} as const\n",
        encoding="utf-8",
    )
    print(f"Extracted {len(questions)} questions to {destination}")


if __name__ == "__main__":
    main()
