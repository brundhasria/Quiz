let customQuiz = [];
let customQuizTitle = "Custom Quiz";
const quizzes = {
  gk: [
  { question: "Capital of India?", options: ["Mumbai","Delhi","Chennai","Kolkata"], answer: "Delhi" },
  { question: "Largest ocean?", options: ["Atlantic","Indian","Pacific","Arctic"], answer: "Pacific" },
  { question: "National bird of India?", options: ["Parrot","Peacock","Eagle","Crow"], answer: "Peacock" },
  { question: "Currency of Japan?", options: ["Yuan","Won","Yen","Dollar"], answer: "Yen" },
  { question: "Fastest land animal?", options: ["Lion","Tiger","Cheetah","Horse"], answer: "Cheetah" },
  { question: "Who discovered gravity?", options: ["Newton","Einstein","Galileo","Tesla"], answer: "Newton" },
  { question: "Largest continent?", options: ["Africa","Asia","Europe","Australia"], answer: "Asia" },
  { question: "Gas we breathe?", options: ["Oxygen","Nitrogen","CO2","Helium"], answer: "Oxygen" },
  { question: "Water freezes at?", options: ["0°C","10°C","-5°C","5°C"], answer: "0°C" },
  { question: "Sun is a?", options: ["Planet","Star","Asteroid","Comet"], answer: "Star" }
],

  movies: [
  { question: "Which is a Marvel movie?", options: ["Inception","Avengers","Titanic","Joker"], answer: "Avengers" },
  { question: "Famous wizard?", options: ["Harry Potter","Batman","Thor","Hulk"], answer: "Harry Potter" },
  { question: "Director of Titanic?", options: ["James Cameron","Nolan","Spielberg","Scorsese"], answer: "James Cameron" },
  { question: "Which is a horror movie?", options: ["Conjuring","Avatar","Frozen","Cars"], answer: "Conjuring" },
  { question: "Superhero with shield?", options: ["Iron Man","Thor","Captain America","Hulk"], answer: "Captain America" },
  { question: "Animated lion movie?", options: ["Frozen","Lion King","Moana","Coco"], answer: "Lion King" },
  { question: "DC superhero?", options: ["Spiderman","Batman","Iron Man","Thor"], answer: "Batman" },
  { question: "Movie about dreams?", options: ["Inception","Avatar","Joker","Matrix"], answer: "Inception" },
  { question: "Indian blockbuster?", options: ["RRR","Avatar","Titanic","Matrix"], answer: "RRR" },
  { question: "Space movie?", options: ["Interstellar","Joker","Frozen","Cars"], answer: "Interstellar" }
],

  sports: [
  { question: "Players in cricket team?", options: ["9","10","11","12"], answer: "11" },
  { question: "Cricket world cup format?", options: ["ODI","T20","Test","All"], answer: "All" },
  { question: "Football legend?", options: ["Messi","Dhoni","Kohli","Bolt"], answer: "Messi" },
  { question: "Olympics gap?", options: ["2","3","4","5"], answer: "4" },
  { question: "Cricket bat made of?", options: ["Steel","Wood","Plastic","Iron"], answer: "Wood" },
  { question: "Virat Kohli plays?", options: ["Football","Cricket","Tennis","Hockey"], answer: "Cricket" },
  { question: "Fastest man?", options: ["Bolt","Ronaldo","Messi","Jordan"], answer: "Bolt" },
  { question: "Tennis legend?", options: ["Federer","Dhoni","Messi","Kohli"], answer: "Federer" },
  { question: "IPL is?", options: ["Football","Cricket","Basketball","Tennis"], answer: "Cricket" },
  { question: "Dhoni role?", options: ["Bowler","Keeper","Coach","Umpire"], answer: "Keeper" }
],
ipl: [
  { question: "Which team is famous as CSK?", options: ["Chennai Super Kings","Delhi Capitals","MI","RCB"], answer: "Chennai Super Kings" },
  { question: "Who is known as Captain Cool?", options: ["Kohli","Dhoni","Rohit","Gill"], answer: "Dhoni" },
  { question: "RCB home ground?", options: ["Wankhede","Chepauk","Chinnaswamy","Eden Gardens"], answer: "Chinnaswamy" },
  { question: "IPL format?", options: ["Test","ODI","T20","All"], answer: "T20" },
  { question: "MI full form?", options: ["Mumbai Indians","Madras Indians","Metro Indians","Mega Indians"], answer: "Mumbai Indians" },
  { question: "Purple cap is for?", options: ["Best batsman","Best bowler","Best fielder","Best captain"], answer: "Best bowler" },
  { question: "Orange cap is for?", options: ["Most runs","Most wickets","Best fielding","Best team"], answer: "Most runs" },
  { question: "CSK color?", options: ["Red","Blue","Yellow","Green"], answer: "Yellow" },
  { question: "RCB famous player?", options: ["Dhoni","Kohli","Rohit","Rahul"], answer: "Kohli" },
  { question: "IPL started in?", options: ["2005","2008","2010","2012"], answer: "2008" }
],
politics: [
  { question: "Prime Minister of India?", options: ["Modi","Rahul Gandhi","Kejriwal","Shah"], answer: "Modi" },
  { question: "Indian parliament has?", options: ["1 house","2 houses","3 houses","4 houses"], answer: "2 houses" },
  { question: "Voting age in India?", options: ["16","18","21","25"], answer: "18" },
  { question: "President of India role?", options: ["Head of state","Head of govt","Judge","CM"], answer: "Head of state" },
  { question: "Lok Sabha is?", options: ["Upper house","Lower house","Court","Cabinet"], answer: "Lower house" },
  { question: "Rajya Sabha is?", options: ["Lower house","Upper house","Court","Cabinet"], answer: "Upper house" },
  { question: "Election Commission does?", options: ["Make laws","Conduct elections","Judge cases","Tax"], answer: "Conduct elections" },
  { question: "CM stands for?", options: ["Chief Minister","Central Manager","City Mayor","Chief Member"], answer: "Chief Minister" },
  { question: "Democracy means?", options: ["Rule by king","Rule by people","Rule by army","Rule by law"], answer: "Rule by people" },
  { question: "India is a?", options: ["Monarchy","Republic","Dictatorship","Empire"], answer: "Republic" }
],
native: [
  { question: "Popular Indian food?", options: ["Pizza","Burger","Biryani","Pasta"], answer: "Biryani" },
  { question: "Festival of lights?", options: ["Holi","Diwali","Eid","Christmas"], answer: "Diwali" },
  { question: "Tamil language belongs to?", options: ["North","South","West","East"], answer: "South" },
  { question: "Indian transport?", options: ["Train","Camel","Auto","All"], answer: "All" },
  { question: "Traditional wear?", options: ["Jeans","Suit","Saree","Jacket"], answer: "Saree" },
  { question: "Famous drink?", options: ["Tea","Coffee","Juice","Milk"], answer: "Tea" },
  { question: "Kollywood is?", options: ["Tamil cinema","Hindi cinema","Telugu cinema","Malayalam cinema"], answer: "Tamil cinema" },
  { question: "Temple city?", options: ["Delhi","Madurai","Mumbai","Goa"], answer: "Madurai" },
  { question: "Indian currency?", options: ["Dollar","Rupee","Yen","Euro"], answer: "Rupee" },
  { question: "Street food?", options: ["Pizza","Pani puri","Burger","Pasta"], answer: "Pani puri" }
],
series: [
  { question: "Stranger Things genre?", options: ["Horror","Sci-fi","Comedy","Romance"], answer: "Sci-fi" },
  { question: "Money Heist country?", options: ["Spain","USA","India","UK"], answer: "Spain" },
  { question: "Famous teacher in Money Heist?", options: ["Professor","Berlin","Rio","Denver"], answer: "Professor" },
  { question: "Friends show is?", options: ["Drama","Comedy","Horror","Sci-fi"], answer: "Comedy" },
  { question: "Breaking Bad theme?", options: ["Crime","Romance","Comedy","Fantasy"], answer: "Crime" },
  { question: "Squid Game country?", options: ["Japan","China","Korea","India"], answer: "Korea" },
  { question: "Famous coffee shop in Friends?", options: ["Central Perk","Cafe 99","Star Coffee","Bean Hub"], answer: "Central Perk" },
  { question: "OTT platform?", options: ["Netflix","TV","Radio","Newspaper"], answer: "Netflix" },
  { question: "Mirzapur genre?", options: ["Crime","Comedy","Romance","Sci-fi"], answer: "Crime" },
  { question: "Dark series type?", options: ["Time travel","Comedy","Sports","Romance"], answer: "Time travel" }
],
friendship: [
  { question: "Your best friend is upset but says 'I'm fine'. What do you do?", options: ["Ask again 🤝","Give space 😌","Ignore 😶","Change topic 😂"], answer: "Ask again 🤝" },

  { question: "You both planned to go out, but they cancel last minute", options: ["Get angry 😤","Say it's okay 😌","Tease them 😂","Make new plan 🤝"], answer: "Tease them 😂" },

  { question: "Your friend is getting roasted in a group", options: ["Join roasting 😂","Defend them 🛡️","Stay silent 😶","Laugh only 😭"], answer: "Defend them 🛡️" },

  { question: "They forget your birthday", options: ["Get hurt 😢","Ignore 😎","Remind jokingly 😂","Act normal 😶"], answer: "Remind jokingly 😂" },

  { question: "Your friend shares a big secret", options: ["Keep it safe 🤫","Tell close friend 😏","Use in joke 😂","Forget 😶"], answer: "Keep it safe 🤫" },

  { question: "You both fight badly", options: ["Say sorry 🤝","Ignore 😤","Wait for them 😏","Block 😶"], answer: "Say sorry 🤝" },

  { question: "Friend is in trouble late night", options: ["Go help 🚶","Call them 📞","Text only 💬","Sleep 😴"], answer: "Go help 🚶" },

  { question: "You achieve something big", options: ["Tell them first ❤️","Post online 📱","Keep quiet 😶","Wait 😌"], answer: "Tell them first ❤️" },

  { question: "Your friend is feeling left out", options: ["Include them 🤝","Ignore 😶","Notice but silent 😐","Laugh 😂"], answer: "Include them 🤝" },

  { question: "They start ignoring you suddenly", options: ["Ask directly 🤔","Ignore back 😎","Overthink 😭","Wait 😶"], answer: "Ask directly 🤔" }
],
love: [
  { question: "Crush texts you 'hey'… your reaction?", options: ["Reply instantly 😍","Wait and act cool 😎","Overthink for 10 mins 😭","Screenshot and send to bestie 😂"], answer: "Overthink for 10 mins 😭" },

  { question: "Perfect date idea?", options: ["Movie 🍿","Long drive 🚗","Late night chat 🌙","All of these ❤️"], answer: "All of these ❤️" },

  { question: "Who texts first usually?", options: ["Me 🫣","Them 😏","Depends on mood 😶","No one 💀"], answer: "Depends on mood 😶" },

  { question: "Your love language?", options: ["Words 💬","Time ⏰","Gifts 🎁","Food 🍕"], answer: "Time ⏰" },

  { question: "When they don't reply for hours?", options: ["Chill 😌","Overthink 😭","Get angry 😤","Double text 😏"], answer: "Overthink 😭" },

  { question: "Late night talks be like?", options: ["Deep convos 💫","Random nonsense 😂","Flirting 😏","All ❤️"], answer: "All ❤️" },

  { question: "Jealous level?", options: ["High 😤","Medium 😶","Low 😌","Secretly jealous 👀"], answer: "Secretly jealous 👀" },

  { question: "Seeing them online but no reply?", options: ["Ignore 😎","Get sad 😢","Overthink 😭","Stalk more 👀"], answer: "Overthink 😭" },

  { question: "Relationship vibe?", options: ["Chill 😌","Romantic ❤️","Funny 😂","All mixed 🔥"], answer: "All mixed 🔥" },

  { question: "If they say 'I miss you'?", options: ["Say it back ❤️","Act cool 😎","Smile like idiot 😄","Screenshot 😂"], answer: "Smile like idiot 😄" }
],
anime: [
  { question: "Naruto village?", options: ["Leaf","Sand","Mist","Cloud"], answer: "Leaf" },
  { question: "Luffy goal?", options: ["King","Pirate King","Hero","Rich"], answer: "Pirate King" },
  { question: "Dragon Ball hero?", options: ["Goku","Naruto","Ichigo","Luffy"], answer: "Goku" },
  { question: "Attack on Titan theme?", options: ["War","Romance","Comedy","Sports"], answer: "War" },
  { question: "Anime origin?", options: ["Japan","China","USA","Korea"], answer: "Japan" },
  { question: "Death Note main character?", options: ["Light","L","Near","Misa"], answer: "Light" },
  { question: "Demon Slayer hero?", options: ["Tanjiro","Naruto","Goku","Luffy"], answer: "Tanjiro" },
  { question: "One Piece genre?", options: ["Adventure","Horror","Drama","Sci-fi"], answer: "Adventure" },
  { question: "Anime fans called?", options: ["Otaku","Fans","Viewers","Gamers"], answer: "Otaku" },
  { question: "Tokyo Ghoul type?", options: ["Dark","Comedy","Romance","Sports"], answer: "Dark" }
],
meme: [
  { question: "POV: You open fridge again after 2 mins", options: ["New food appears","Still nothing","Just checking","Habit 😭"], answer: "Habit 😭" },
  { question: "When someone says 'we need to talk'", options: ["Calm","Overthinking 100%","Ignore","Act busy"], answer: "Overthinking 100%" },
  { question: "That one friend who says 'I'm on the way'", options: ["Already left","Still at home","Sleeping","Just woke up"], answer: "Still at home" },
  { question: "Me after setting 10 alarms", options: ["Wake up","Snooze all","Turn off","Sleep peacefully"], answer: "Snooze all" },
  { question: "When teacher says 'any doubts?'", options: ["Ask","Stay silent","Nod","Pretend understanding"], answer: "Pretend understanding" },
  { question: "Internet slow for 2 sec:", options: ["Restart router","Call provider","Panic","Accept fate"], answer: "Panic" },
  { question: "Crush likes your story:", options: ["Reply fast","Wait","Overthink","Screenshot"], answer: "Screenshot" },
  { question: "Group chat at 3 AM:", options: ["Active","Muted","Watching silently","Reply next day"], answer: "Watching silently" },
  { question: "When battery hits 1%:", options: ["Run to charger","Panic","Ignore","Last message"], answer: "Panic" },
  { question: "Me after one productive day:", options: ["Motivated","Back to lazy","Sleep","Celebrate"], answer: "Back to lazy" }
],
gaming: [
  { question: "Popular battle royale?", options: ["PUBG","Chess","Ludo","Carrom"], answer: "PUBG" },
  { question: "GTA stands for?", options: ["Grand Theft Auto","Game Track App","Go To Area","None"], answer: "Grand Theft Auto" },
  { question: "Minecraft type?", options: ["Sandbox","Shooter","Racing","Puzzle"], answer: "Sandbox" },
  { question: "Mobile game?", options: ["BGMI","Valorant","FIFA","CSGO"], answer: "BGMI" },
  { question: "Gaming device?", options: ["Console","Phone","PC","All"], answer: "All" },
  { question: "Famous streamer?", options: ["Ninja","Messi","Dhoni","Modi"], answer: "Ninja" },
  { question: "FPS means?", options: ["First Person Shooter","Fast Play System","Full Power Shot","None"], answer: "First Person Shooter" },
  { question: "Esports is?", options: ["Gaming competition","Study","Movie","Music"], answer: "Gaming competition" },
  { question: "Valorant type?", options: ["Shooter","Racing","Puzzle","Sports"], answer: "Shooter" },
  { question: "Game lag means?", options: ["Slow","Fast","Smooth","None"], answer: "Slow" }
],
goals: [
  { question: "Healthy relationship?", options: ["Trust","Love","Respect","All"], answer: "All" },
  { question: "Communication?", options: ["Important","Not","Sometimes","None"], answer: "Important" },
  { question: "Support partner?", options: ["Yes","No","Maybe","Depends"], answer: "Yes" },
  { question: "Fights?", options: ["Normal","Avoid","Ignore","End"], answer: "Normal" },
  { question: "Time together?", options: ["Daily","Weekly","Rare","Never"], answer: "Daily" },
  { question: "Honesty?", options: ["Always","Sometimes","Rare","Never"], answer: "Always" },
  { question: "Trust level?", options: ["High","Low","Medium","None"], answer: "High" },
  { question: "Care?", options: ["Yes","No","Little","Depends"], answer: "Yes" },
  { question: "Future planning?", options: ["Yes","No","Maybe","Ignore"], answer: "Yes" },
  { question: "Respect?", options: ["Must","Optional","Rare","None"], answer: "Must" }
],
gentleman: [
  { question: "You see someone struggling with heavy bags, what do you do?", options: ["Help immediately","Ignore","Watch","Wait"], answer: "Help immediately" },
  { question: "A friend is upset but says 'I'm fine'", options: ["Leave them","Ask again","Ignore","Change topic"], answer: "Ask again" },
  { question: "You made a mistake, what do you do?", options: ["Admit & apologize","Blame others","Ignore","Hide"], answer: "Admit & apologize" },
  { question: "Someone disrespects you in public", options: ["Stay calm","Shout back","Ignore fully","Walk away"], answer: "Stay calm" },
  { question: "A girl feels unsafe around you", options: ["Give space","Ignore","Joke","Act normal"], answer: "Give space" },
  { question: "Friend is in trouble late night", options: ["Help","Ignore","Message only","Sleep"], answer: "Help" },
  { question: "You disagree with someone", options: ["Respectfully talk","Argue","Shout","Ignore"], answer: "Respectfully talk" },
  { question: "You see someone being bullied", options: ["Support victim","Ignore","Watch","Laugh"], answer: "Support victim" },
  { question: "Someone shares a secret", options: ["Keep it","Tell others","Hint","Forget"], answer: "Keep it" },
  { question: "You are angry at someone", options: ["Control & talk","Shout","Block","Ignore"], answer: "Control & talk" }
],
gentlewoman: [
  { question: "Someone disrespects you, what do you do?", options: ["Stay calm & respond","Ignore","React emotionally","Walk away"], answer: "Stay calm & respond" },
  { question: "Your friend is crying", options: ["Comfort","Ignore","Advise","Leave"], answer: "Comfort" },
  { question: "You feel uncomfortable in a place", options: ["Leave immediately","Stay silent","Ignore","Adjust"], answer: "Leave immediately" },
  { question: "Someone judges you", options: ["Ignore","Reply smartly","Get upset","Overthink"], answer: "Ignore" },
  { question: "You achieve something big", options: ["Stay humble","Show off","Hide","Ignore"], answer: "Stay humble" },
  { question: "A friend shares a secret", options: ["Keep it safe","Tell others","Hint","Forget"], answer: "Keep it safe" },
  { question: "You see someone in need", options: ["Help","Ignore","Think","Wait"], answer: "Help" },
  { question: "You are in an argument", options: ["Stay calm","React fast","Cry","Leave"], answer: "Stay calm" },
  { question: "Handling stress?", options: ["Stay strong","Break down","Ignore","Sleep"], answer: "Stay strong" },
  { question: "Self respect situation", options: ["Stand firm","Adjust","Ignore","Compromise"], answer: "Stand firm" }
],
genz: [
  { question: "What does 'rizz' mean?", options: ["Style 😎","Charm 😏","Money 💰","Luck 🍀"], answer: "Charm 😏" },

  { question: "If someone is 'delulu'?", options: ["Smart 🧠","Delusional 😂","Rich 💰","Confused 😵"], answer: "Delusional 😂" },

  { question: "'It's giving...' means?", options: ["Donation 😂","Vibe check 😎","Giving money 💰","Sharing 😄"], answer: "Vibe check 😎" },

  { question: "What is a 'situationship'?", options: ["Serious love ❤️","No-label relationship 😶","Friendship 🤝","Breakup 💔"], answer: "No-label relationship 😶" },

  { question: "'Slay' means?", options: ["Kill 🔪","Do amazing 🔥","Sleep 😴","Ignore 😶"], answer: "Do amazing 🔥" },

  { question: "If something is 'mid'?", options: ["Best 🔥","Average 😐","Worst 💀","Confusing 😵"], answer: "Average 😐" },

  { question: "'No cap' means?", options: ["No hat 🧢","No lie 💯","No idea 🤷","No fun 😶"], answer: "No lie 💯" },

  { question: "'Simp' refers to?", options: ["Strong person 💪","Overly caring 😅","Rich guy 💰","Funny friend 😂"], answer: "Overly caring 😅" },

  { question: "'Main character energy' means?", options: ["Leader vibe 🌟","Side role 😶","Extra 😂","Silent 😐"], answer: "Leader vibe 🌟" },

  { question: "'Ghosting' means?", options: ["Scaring 👻","Ignoring suddenly 😶","Talking secretly 🤫","Playing game 🎮"], answer: "Ignoring suddenly 😶" }
],
tamil_music: [
  { question: "“Why this kolaveri di?” – Which song?", options: ["Kolaveri","Arabic Kuthu","Vaathi Coming","Enjoy Enjaami"], answer: "Kolaveri" },

  { question: "“Vaathi coming, othu...” – Which movie?", options: ["Master","Leo","Beast","Jailer"], answer: "Master" },

  { question: "“Enjoy Enjaami…” – Who sang it?", options: ["Dhee","Anirudh","Sid Sriram","Yuvan"], answer: "Dhee" },

  { question: "“Arabic Kuthu…” is from which movie?", options: ["Beast","Master","Leo","Doctor"], answer: "Beast" },

  { question: "“Rowdy Baby…” – Which movie?", options: ["Maari 2","VIP","3","Master"], answer: "Maari 2" },

  { question: "“Tum Tum…” viral song is from?", options: ["Enemy","Master","Beast","Doctor"], answer: "Enemy" },

  { question: "“Private Party…” – Which movie?", options: ["Don","Doctor","Love Today","Beast"], answer: "Don" },

  { question: "“Megham Karukatha…” is from?", options: ["Thiruchitrambalam","Love Today","Don","VIP"], answer: "Thiruchitrambalam" },

  { question: "“Naa Ready…” song is from?", options: ["Leo","Jailer","Master","Beast"], answer: "Leo" },

  { question: "“Kaavaalaa…” viral song is from?", options: ["Jailer","Leo","Beast","Doctor"], answer: "Jailer" }
],
english_music: [
  { question: "“Cause baby you’re a firework…” – Which song?", options: ["Firework","Roar","Dark Horse","Halo"], answer: "Firework" },

  { question: "“I got that sunshine in my pocket…” – Song?", options: ["Can't Stop the Feeling","Happy","Shape of You","Blinding Lights"], answer: "Can't Stop the Feeling" },

  { question: "“This is gonna be the best day of my life…” – Song?", options: ["Best Day of My Life","Counting Stars","Thunder","Believer"], answer: "Best Day of My Life" },

  { question: "“I’m a savage…” viral song?", options: ["Savage Love","Levitating","Senorita","Havana"], answer: "Savage Love" },

  { question: "“I can buy myself flowers…” – Song?", options: ["Flowers","Someone Like You","Hello","Stay"], answer: "Flowers" },

  { question: "“We were good, we were gold…” – Song?", options: ["Flowers","Shallow","Stay","Bad Guy"], answer: "Flowers" },

  { question: "“Cause I’m in the stars tonight…” – Song?", options: ["Dynamite","Butter","Permission to Dance","Boy With Luv"], answer: "Dynamite" },

  { question: "“I said ooh, I’m blinded by the lights…” – Song?", options: ["Blinding Lights","Starboy","Save Your Tears","Stay"], answer: "Blinding Lights" },

  { question: "“Is it too late now to say sorry…” – Song?", options: ["Sorry","Love Yourself","Peaches","Baby"], answer: "Sorry" },

  { question: "“You know I’m not the only one…” – Song?", options: ["Stay With Me","Someone Like You","Hello","Let Her Go"], answer: "Stay With Me" }
]
};

// VARIABLES
let currentQuiz = [];
let currentQuestion = 0;
let score = 0;
let selected = null;

// ELEMENTS
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");

// HIDE ALL SCREENS
function hideAllScreens() {

  document.getElementById("category-screen")
    .classList.add("hidden");

  document.getElementById("quiz-box")
    .classList.add("hidden");

  document.getElementById("result")
    .classList.add("hidden");

  const createScreen =
    document.getElementById("create-screen");

  if (createScreen) {
    createScreen.classList.add("hidden");
  }
}

// START QUIZ
function startQuiz(category) {

  currentQuiz = quizzes[category];

  if (!currentQuiz) {
    alert("Category not found!");
    return;
  }

  currentQuiz.sort(() => Math.random() - 0.5);

  currentQuestion = 0;
  score = 0;

  hideAllScreens();

  document.getElementById("quiz-box")
    .classList.remove("hidden");
  document.getElementById("quiz-title").innerText =
  category.toUpperCase() + " Quiz";
  loadQuestion();
}

// LOAD QUESTION
function loadQuestion() {

  selected = null;

  nextBtn.disabled = true;

  const q = currentQuiz[currentQuestion];

  // QUESTION
  questionEl.innerText =
    `Q${currentQuestion + 1}. ${q.question}`;

  // QUESTION COUNT
  const questionCount =
    document.getElementById("question-count");

  if (questionCount) {

    questionCount.innerText =
      `Question ${currentQuestion + 1} of ${currentQuiz.length}`;
  }

  // PROGRESS BAR
  const progress =
    ( (currentQuestion+1)/ currentQuiz.length) * 100;

  const progressBar =
    document.getElementById("progress-bar");

  if (progressBar) {

    progressBar.style.width =
      `${progress}%`;
  }

  // OPTIONS
  optionsEl.innerHTML = "";

  q.options.forEach(option => {

    const div = document.createElement("div");

    div.classList.add("option");

    div.innerText = option;

    div.onclick = () => {

      document.querySelectorAll(".option")
        .forEach(opt => opt.classList.remove("selected"));

      div.classList.add("selected");

      selected = option;

      nextBtn.disabled = false;
    };

    optionsEl.appendChild(div);
  });
}

// NEXT BUTTON
nextBtn.onclick = () => {

  if (selected === currentQuiz[currentQuestion].answer) {

    score++;
  }

  currentQuestion++;

  if (currentQuestion < currentQuiz.length) {

    loadQuestion();

  } else {

    showResult();
  }
};

// SHOW RESULT
function showResult() {

  hideAllScreens();

  document.getElementById("result")
    .classList.remove("hidden");

  const progressBar =
    document.getElementById("progress-bar");

  if (progressBar) {

    progressBar.style.width = "100%";
  }

  document.getElementById("score").innerText =
    `Score: ${score}/${currentQuiz.length}`;

  let title = "";
  let message = "";

  const percentage =
    (score / currentQuiz.length) * 100;

  if (percentage === 100) {

    title = "👑 Quiz God";
    message = "You absolutely destroyed this quiz.";

  }

  else if (percentage >= 80) {

    title = "🔥 Legend";
    message = "That was seriously impressive.";
  }

  else if (percentage >= 60) {

    title = "😎 Smart Player";
    message = "You know your stuff pretty well.";
  }

  else if (percentage >= 40) {

    title = "🙂 Casual Player";
    message = "Not bad… but there’s room to improve.";
  }

  else {

    title = "💀 Meme Material";
    message = "That score was emotionally surprising.";
  }

  document.getElementById("result-title").innerText = title;

  document.getElementById("result-message").innerText = message;
}

// GO HOME
function goHome() {

  hideAllScreens();

  document.getElementById("category-screen")
    .classList.remove("hidden");
}

// SHOW CREATE QUIZ SCREEN
function showCreateQuiz() {

  hideAllScreens();

  const createScreen =
    document.getElementById("create-screen");

  if (createScreen) {

    createScreen.classList.remove("hidden");
  }
}

// SAVE QUESTION
function saveQuestion() {

  const question =
    document.getElementById("custom-question").value;

  const option1 =
    document.getElementById("option1").value;

  const option2 =
    document.getElementById("option2").value;

  const option3 =
    document.getElementById("option3").value;

  const option4 =
    document.getElementById("option4").value;

  const answer =
    document.getElementById("correct-answer").value;

  const options = [option1, option2, option3, option4];

    if (!options.includes(answer)) {
      alert("Correct answer must match an option");
      return;
    }
  const newQuestion = {
    question: question,
    options: [option1, option2, option3, option4],
    answer: answer
  };

  customQuiz.push(newQuestion);

  alert("Question Added!");

  // CLEAR INPUTS
  document.getElementById("custom-question").value = "";

  document.getElementById("option1").value = "";

  document.getElementById("option2").value = "";

  document.getElementById("option3").value = "";

  document.getElementById("option4").value = "";

  document.getElementById("correct-answer").value = "";
}

// PLAY CUSTOM QUIZ
function playCustomQuiz() {
  customQuizTitle =
  document.getElementById("quiz-name").value || "Custom Quiz";

  document.getElementById("quiz-title").innerText =
  customQuizTitle;
  if (customQuiz.length === 0) {

    alert("Add at least one question!");

    return;
  }

  currentQuiz = customQuiz;

  currentQuestion = 0;

  score = 0;

  hideAllScreens();

  document.getElementById("quiz-box")
    .classList.remove("hidden");

  loadQuestion();
}

// SHOW CATEGORY PAGE FIRST
window.onload = function () {

  goHome();
};
function generateShareLink() {

  const quizData = {
    title: document.getElementById("quiz-name").value,
    questions: customQuiz
  };

  const encoded =
    encodeURIComponent(JSON.stringify(quizData));

  const link =
    window.location.origin +
    window.location.pathname +
    "?quiz=" + encoded;

  navigator.clipboard.writeText(link);

  alert("Quiz link copied!");
}
// ================= SHARE QUIZ SYSTEM =================

const params = new URLSearchParams(window.location.search);

if (params.has("quiz")) {

  try {

    const data = JSON.parse(
      decodeURIComponent(params.get("quiz"))
    );

    currentQuiz = data.questions;

    document.getElementById("quiz-title").innerText =
      data.title || "Shared Quiz";

    currentQuestion = 0;
    score = 0;

    hideAllScreens();

    document.getElementById("quiz-box")
      .classList.remove("hidden");

    loadQuestion();

  } catch {

    alert("Invalid quiz link");

    goHome();
  }

} else {

  goHome();
}