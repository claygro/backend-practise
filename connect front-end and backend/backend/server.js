import express from "express";
//if we use module js the goto package.js file of bakend then add type:"module" this fix the error
const app = express();
// app.get("/", (req, res) => {
//   res.send("server is ready");
// });

//get a list of 5 jokes
app.get("/api/jokes", (req, res) => {
  //making an api in standered form by writing /api/jokes
  const jokes = [
    {
      id: 1,
      title: "Math Whisper",
      content:
        "Why was the equal sign so humble? It knew it wasn’t less than or greater than.",
    },
    {
      id: 2,
      title: "Bug Hunter",
      content:
        "Why do programmers prefer dark mode? Because the light attracts bugs.",
    },
    {
      id: 3,
      title: "Broken Pencil",
      content:
        "I tried writing a joke about a broken pencil… but it had no point.",
    },
    {
      id: 4,
      title: "Parallel Trouble",
      content:
        "Why can’t parallel lines ever get along? Because they’ll never meet.",
    },
    {
      id: 5,
      title: "React-ion",
      content:
        "Why did the developer go broke? Because he used up all his cache.",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`serve at  http://localhost:${port}`);
});
