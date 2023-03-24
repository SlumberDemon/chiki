import fastapi
from deta import Base

app = fastapi.FastAPI()
todos = Base("todos")


@app.get("/")
async def test():
    return {"test": "working"}
