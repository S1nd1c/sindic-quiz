import json

file = open("sols.txt", mode='r',encoding="utf-8")
lines = file.readlines()
print(len(lines))
qa = {
    "questions": []
}

for i in range(0, len(lines), 5):
    q = {}
    question = lines[i].split(" ")
    correct = question[0][-1]
    q["correct"] = correct
    q["question"] = " ".join(question[1:])
    q["answers"] = [
        lines[i+1],
        lines[i+2],
        lines[i+3],
        lines[i+4]
    ]
    qa["questions"].append(q)

with open('quiz.json', 'w', encoding="utf-8") as fp:
    json.dump(qa, fp, ensure_ascii=False)  



