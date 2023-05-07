const VF = Vex.Flow;
const div = document.getElementById("musicNotation");
const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

renderer.resize(800, 500);
const context = renderer.getContext();

const stave1 = new VF.Stave(10, 50, 400);
stave1.addClef("treble");
stave1.setContext(context).draw();

const stave2 = new VF.Stave(10, 150, 400);
stave2.addClef("treble");
stave2.setContext(context).draw();

const chords1 = [
  new VF.StaveNote({ keys: ["c/4", "e/4", "g/4"], duration: "q" }),
  new VF.StaveNote({ keys: ["c/4", "f/4", "a/4"], duration: "q" }),
  new VF.StaveNote({ keys: ["b/3", "d/4", "g/4"], duration: "q" }),
  new VF.StaveNote({ keys: ["c/4", "e/4", "g/4"], duration: "q" }),
];


const voice1 = new VF.Voice({ num_beats: 4, beat_value: 4 });
voice1.addTickables(chords1);

const formatter = new VF.Formatter()
  .joinVoices([voice1])
  .format([voice1], 350);

voice1.draw(context, stave1);

const correctAnswers = ["AM", "DM", "E", "AM"];
const inputIds = ["q1", "q2", "q3", "q4"];
const submitBtn = document.getElementById("submitBtn");
const feedback = document.getElementById("feedback");

submitBtn.addEventListener("click", () => {
  let answers = inputIds.map((id) =>
    document.getElementById(id).value.trim().toUpperCase()
  );
  console.log("Correct Answers:", correctAnswers);
  console.log("User Answers:", answers);
  if (JSON.stringify(answers) === JSON.stringify(correctAnswers)) {
    feedback.innerHTML = "CORRECT";
    feedback.style.color = "green";
    feedback.style.display = "block";
    setTimeout(() => {
      window.location.href = "quest4.html";
    }, 2000);
  } else {
    feedback.innerHTML = "TRY AGAIN";
    feedback.style.color = "red";
    feedback.style.display = "block";
    setTimeout(() => {
      feedback.style.display = "none";
      inputIds.forEach((id) => (document.getElementById(id).value = ""));
    }, 2000);
  }
});
