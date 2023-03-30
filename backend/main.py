import fastapi
from deta import Base

app = fastapi.FastAPI()
todos = Base("todos")


@app.get("/")
async def test():
    return {"test": "working"}


@app.get("/todos")
async def get_todos():
    res = todos.fetch()
    items = res.items
    while res.last:
        res = todos.fetch(last=res.last)
        items += res.items
    return items


@app.get("/todos/{key}")
async def get_todo(key: str):
    data = todos.get(key)
    return data


@app.post("/todos")
async def post_todo(text: str, complete: bool):
    data = todos.put({"text": text, "complete": complete})
    return data


@app.delete("/todos")
async def delete_todo(key: str):
    data = todos.delete(key)
    return data


@app.patch("/todos")
async def patch_todo(key: str, text: str = None, complete: bool = None):
    data = todos.update({"text": text, "complete": complete}, key)
    return data
