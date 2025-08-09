/* Full quiz with your 15 exact questions.
   Each option: A->Gryffindor, B->Slytherin, C->Ravenclaw, D->Hufflepuff
*/

const QUESTIONS = [
  { q: "You find out your closest friend has been spreading lies about you.",
    opts: [
      { label: "A", text: "Confront them directly and demand an explanation.", house: "Gryffindor" },
      { label: "B", text: "Outsmart them with a subtle move that exposes the truth.", house: "Slytherin" },
      { label: "C", text: "Observe quietly and use the information to your advantage later.", house: "Ravenclaw" },
      { label: "D", text: "Forgive them but distance yourself to protect your peace.", house: "Hufflepuff" }
    ]
  },
  { q: "You’re given a difficult group project and your team isn’t working well.",
    opts: [
      { label: "A", text: "Take charge and lead them to success.", house: "Gryffindor" },
      { label: "B", text: "Strategically assign tasks that benefit you most.", house: "Slytherin" },
      { label: "C", text: "Create a clever plan and share it with the group.", house: "Ravenclaw" },
      { label: "D", text: "Encourage everyone and keep the team spirit high.", house: "Hufflepuff" }
    ]
  },
  { q: "How do you flirt in college?",
    opts: [
      { label: "A", text: "You roast them until they cry(in cute way).", house: "Gryffindor" },
      { label: "B", text: "You casually flex your talents between conversations.", house: "Slytherin" },
      { label: "C", text: "You stalk about their favourites and then talk about those infront of them.", house: "Ravenclaw" },
      { label: "D", text: "You find reasons to make them laugh.", house: "Hufflepuff" }
    ]
  },
  { q: "You’re accused of something you didn’t do.",
    opts: [
      { label: "A", text: "Defend yourself boldly in front of everyone.", house: "Gryffindor" },
      { label: "B", text: "Investigate quietly to find the real culprit.", house: "Slytherin" },
      { label: "C", text: "Present logical proof to clear your name.", house: "Ravenclaw" },
      { label: "D", text: "Stay calm and let your honesty speak for itself.", house: "Hufflepuff" }
    ]
  },
  { q: "You found that your crush had another relationship.",
    opts: [
      { label: "A", text: "You pretend like you never knows about it and propose them.", house: "Gryffindor" },
      { label: "B", text: "Your ego hurts and you never look back again.", house: "Slytherin" },
      { label: "C", text: "You believe in fate and hope that something better is coming.", house: "Ravenclaw" },
      { label: "D", text: "You still keep that love in your heart by never interrupting their relationship.", house: "Hufflepuff" }
    ]
  },
  { q: "You've been single for too long. Your delusion kicks as...",
    opts: [
      { label: "A", text: "He looked at my insta story. We're basically engaged.", house: "Gryffindor" },
      { label: "B", text: "I bet if i disappear, they'll come running.", house: "Slytherin" },
      { label: "C", text: "Maybe love is a social construct. Time to try something new.", house: "Ravenclaw" },
      { label: "D", text: "I'll just focus on healing. Refreshes his profile again.", house: "Hufflepuff" }
    ]
  },
  { q: "Your crush suddenly stops talking to you.",
    opts: [
      { label: "A", text: "Ask them what’s wrong, face-to-face.", house: "Gryffindor" },
      { label: "B", text: "Move on quickly — they lost their chance.", house: "Slytherin" },
      { label: "C", text: "Figure out the reason from clues and shared friends.", house: "Ravenclaw" },
      { label: "D", text: "Wait patiently for them to come back.", house: "Hufflepuff" }
    ]
  },
  { q: "You see someone being bullied.",
    opts: [
      { label: "A", text: "Step in and protect the person.", house: "Gryffindor" },
      { label: "B", text: "Use the moment to make the bully fear you.", house: "Slytherin" },
      { label: "C", text: "Find a smart way to stop it without direct conflict.", house: "Ravenclaw" },
      { label: "D", text: "Comfort the victim and help them feel better.", house: "Hufflepuff" }
    ]
  },
  { q: "You’re late for an important class.",
    opts: [
      { label: "A", text: "Run in without caring what others think.", house: "Gryffindor" },
      { label: "B", text: "Come up with a believable excuse.", house: "Slytherin" },
      { label: "C", text: "Apologize and explain the reason logically.", house: "Ravenclaw" },
      { label: "D", text: "Slip in quietly and avoid attention.", house: "Hufflepuff" }
    ]
  },
  { q: "What if you get overhyped for a talent you never wanted?.",
    opts: [
      { label: "A", text: "Guess i'll master it just to prove a point. And then cry about it in the shower", house: "Gryffindor" },
      { label: "B", text: "Monitize it. Milk the fame. Escape to other country.", house: "Slytherin" },
      { label: "C", text: "Spiral into existential crisis wondering who i even am. Then adoring myself.", house: "Ravenclaw" },
      { label: "D", text: "I'll keep doing it because i don't want to disappoint anyone, even though i am dying inside.", house: "Hufflepuff" }
    ]
  },
  { q: " You get a chance to meet Narendra Modi-a prime minister, the worst among the worst, what you say to him?.",
    opts: [
      { label: "A", text: "You say jai javan, jai kisan, jai hind so loud to make the point.", house: "Gryffindor" },
      { label: "B", text: "You call him the uneducated chai wala and proudly recieves the jail life.", house: "Slytherin" },
      { label: "C", text: "You question him how many fakevotes is he planning for the next time.", house: "Ravenclaw" },
      { label: "D", text: "You try to stay polite, but your eyes are screaming to protest.", house: "Hufflepuff" }
    ]
  },
  { q: "You catch your roommate sneaking out at night.",
    opts: [
      { label: "A", text: "Ask them directly where they’re going.", house: "Gryffindor" },
      { label: "B", text: "Follow them quietly to see what they’re up to.", house: "Slytherin" },
      { label: "C", text: "Guess their purpose based on past behavior.", house: "Ravenclaw" },
      { label: "D", text: "Ignore it — everyone needs their space.", house: "Hufflepuff" }
    ]
  },
  { q: "What do you feel when someone replies 'Mm' for your text message?.",
    opts: [
      { label: "A", text: "Openly asking them what do they mean.", house: "Gryffindor" },
      { label: "B", text: "Blocked, not thinking for a second.", house: "Slytherin" },
      { label: "C", text: "Oh...they must be so busy to chat now.", house: "Ravenclaw" },
      { label: "D", text: "Oh no...did i say something wrong?.", house: "Hufflepuff" }
    ]
  },
  { q: "Your enemy suddenly got murdered. What you feel?",
    opts: [
      { label: "A", text: "A moment of silence...then low key feels like a war hero.", house: "Gryffindor" },
      { label: "B", text: "Extreme satisfaction, raining happiness.", house: "Slytherin" },
      { label: "C", text: "Satisfically speaking,it was bound to happen. But why now?", house: "Ravenclaw" },
      { label: "D", text: "Extreme regret for hating them.", house: "Hufflepuff" }
    ]
  },
  { q: "You discover a potion that can grant any wish.",
    opts: [
      { label: "A", text: "Use it to help someone in danger.", house: "Gryffindor" },
      { label: "B", text: "Use it to achieve your own greatest ambition.", house: "Slytherin" },
      { label: "C", text: "Study it to understand its long-term effects.", house: "Ravenclaw" },
      { label: "D", text: "Share it with someone who needs it more than you.", house: "Hufflepuff" }
    ]
  }
];

// DOM refs
const qIndexSpan = document.getElementById('q-index');
const questionText = document.getElementById('question-text');
const optionsDiv = document.getElementById('options');
const thinking = document.getElementById('thinking');
const thinkingText = document.getElementById('thinking-text');

const resultModal = document.getElementById('result-modal');
const resultTitle = document.getElementById('result-title');
const resultDesc = document.getElementById('result-desc');
const resultCrest = document.getElementById('result-crest');

let current = 0;
let counts = { Gryffindor: 0, Slytherin: 0, Ravenclaw: 0, Hufflepuff: 0 };

function start() {
  current = 0;
  counts = { Gryffindor: 0, Slytherin: 0, Ravenclaw: 0, Hufflepuff: 0 };
  renderQuestion();
  resultModal.classList.add('hidden');
}

function renderQuestion(){
  const data = QUESTIONS[current];
  qIndexSpan.innerText = `${current+1}`;
  questionText.innerText = data.q;
  optionsDiv.innerHTML = '';
  data.opts.forEach((opt) => {
    const btn = document.createElement('button');
    btn.className = 'option';
    btn.setAttribute('type','button');
    btn.innerHTML = `<span class="label">${opt.label}</span><div class="opt-text">${opt.text}</div>`;
    btn.onclick = () => handleChoice(opt.house);
    optionsDiv.appendChild(btn);
  });
}

/* Thinking animation */
function handleChoice(house) {
  counts[house] = (counts[house] || 0) + 1;
  thinking.classList.remove('hidden');
  thinkingText.innerText = randomThinkingLine();
  // brief pause for drama
  setTimeout(() => {
    thinking.classList.add('hidden');
    current++;
    if (current < QUESTIONS.length) renderQuestion();
    else showResult();
  }, 700);
}

function randomThinkingLine(){
  const lines = ["Hmm... interesting...", "Tricky, tricky...", "Oh — I like that one...", "Mmm… curious choice..."];
  return lines[Math.floor(Math.random()*lines.length)];
}

/* Determine winner; tie -> random among tied */
function showResult(){
  const entries = Object.entries(counts);
  const max = Math.max(...entries.map(e=>e[1]));
  const tied = entries.filter(e=>e[1]===max).map(e=>e[0]);
  const chosen = tied[Math.floor(Math.random()*tied.length)];

  const desc = {
    Gryffindor: "Brave, daring, and bold — you act from your heart.",
    Slytherin: "Ambitious, strategic, and resourceful — you make your own way.",
    Ravenclaw: "Curious, wise, and reflective — knowledge lights your path.",
    Hufflepuff: "Loyal, kind, and steadfast — you value friendship and fairness."
  };

  // render stylized SVG crest (simple shield) for each house
  const shields = {
    Gryffindor: `<svg width="120" height="140" viewBox="0 0 120 140" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g1" x1="0" x2="1"><stop offset="0" stop-color="#ffb27b"/><stop offset="1" stop-color="#d44b2a"/></linearGradient></defs><rect rx="12" width="120" height="140" fill="url(#g1)"/><text x="50%" y="58%" font-size="54" text-anchor="middle" fill="#220000" font-family="Cinzel, serif" font-weight="700">G</text></svg>`,
    Slytherin: `<svg width="120" height="140" viewBox="0 0 120 140" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g2" x1="0" x2="1"><stop offset="0" stop-color="#b6e3a8"/><stop offset="1" stop-color="#347a3a"/></linearGradient></defs><rect rx="12" width="120" height="140" fill="url(#g2)"/><text x="50%" y="58%" font-size="54" text-anchor="middle" fill="#07220a" font-family="Cinzel, serif" font-weight="700">S</text></svg>`,
    Ravenclaw: `<svg width="120" height="140" viewBox="0 0 120 140" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g3" x1="0" x2="1"><stop offset="0" stop-color="#cde3ff"/><stop offset="1" stop-color="#2b5f8f"/></linearGradient></defs><rect rx="12" width="120" height="140" fill="url(#g3)"/><text x="50%" y="58%" font-size="54" text-anchor="middle" fill="#071a2a" font-family="Cinzel, serif" font-weight="700">R</text></svg>`,
    Hufflepuff:`<svg width="120" height="140" viewBox="0 0 120 140" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g4" x1="0" x2="1"><stop offset="0" stop-color="#fff2c7"/><stop offset="1" stop-color="#c59b2f"/></linearGradient></defs><rect rx="12" width="120" height="140" fill="url(#g4)"/><text x="50%" y="58%" font-size="54" text-anchor="middle" fill="#2b2107" font-family="Cinzel, serif" font-weight="700">H</text></svg>`
  };

  resultCrest.innerHTML = shields[chosen];
  resultTitle.textContent = `✨ The Sorting Hat says: ${chosen}! ✨`;
  resultDesc.textContent = desc[chosen];
  resultModal.classList.remove('hidden');
}

/* copy result text to clipboard */
function copyResult(){
  const text = `${resultTitle.textContent} — ${resultDesc.textContent}`;
  navigator.clipboard?.writeText(text).then(()=>alert("Result copied!"), ()=>alert("Unable to copy."));
}

function restartQuiz(){
  resultModal.classList.add('hidden');
  start();
}

window.addEventListener('load', start);
