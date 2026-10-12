
console.log("CodeBuddy JavaScript loaded!");
// ================= TRY IT YOURSELF =================

function runCode() {

    const input = document.getElementById("studentCode");
    const output = document.getElementById("codeOutput");

    const message = input.value.trim();

    if (message === "") {   

        output.textContent = "Please write something first! 😊";

        return;
    }

    output.textContent = message;
}       

// ================= GAME 1 =================
// ARRANGE THE CODE

let arrangeStep = 0;
let arrangeScore = 0;

function startArrangeGame() {

    const title = document.getElementById("gameTitle");
    const question = document.getElementById("gameQuestion");
    const area = document.getElementById("gameArea");

    // Change heading
    title.textContent = "🧩 Arrange the Code";

    // Change question
    question.textContent = "Which instruction should come first?";

    // Reset game
    arrangeStep = 0;
arrangeScore = 0;   

    // Create game buttons
    area.innerHTML = `
    <p id="gameScore">⭐ Score: ${arrangeScore}</p>

    <button onclick="checkArrange('name')">
        👋 Ask for the user's name
    </button>

    <button onclick="checkArrange('result')">
        🚀 Show the result
    </button>

    <button onclick="checkArrange('end')">
        💻 End the program
    </button>

    <p id="gameResult"></p>
`;
    // Make game area visible
    area.style.display = "flex";
} 

function updateArrangeScore() {
    const score = document.getElementById("gameScore");

    if (score) {
        score.textContent = "⭐ Score: " + arrangeScore;
    }
}


// Check player's answer

function checkArrange(answer) {

    const result = document.getElementById("gameResult");

    // STEP 1
    if (arrangeStep === 0) {

        if (answer === "name") {

            arrangeStep = 1;
            arrangeScore += 3;
            updateArrangeScore();

            result.textContent =
                "✅ Correct! Now show the result.";

        } else {

            result.textContent =
                "❌ Not quite! Ask for the user's name first.";
        }

        return;
    }


    // STEP 2
    if (arrangeStep === 1) {

        if (answer === "result") {

            arrangeStep = 2;
            arrangeScore += 3;
            updateArrangeScore();

            result.textContent =
                "✅ Correct! Now end the program.";

        } else {

            result.textContent =
                "❌ Not quite! Show the result next.";
        }

        return;
    }


    // STEP 3
    if (arrangeStep === 2) {

        if (answer === "end") {

            arrangeStep = 3;
            arrangeScore += 4;
            updateArrangeScore();

            result.innerHTML =
    "🎉 <strong>Game Completed!</strong><br>" +
    "⭐ Your Score: " + arrangeScore + "/10<br>" +
    "🏆 Excellent Work!<br><br>" +
    "<button onclick='startArrangeGame()'>🔄 Play Again</button>";

        } else {

            result.textContent =
                "❌ Not quite! End the program after showing the result.";
        }

        return;
    }
}


// ================= GAME 2 =================
let bugScore = 0;

function startBugGame() {

    const area = document.getElementById("bugGameArea");
    bugScore = 0;
    
    area.innerHTML = `
    <p id="bugScoreDisplay">🐞 Score: ${bugScore}</p>
        <div class="code-box">

            <pre>
name = "Alex"

print(name

            </pre>

        </div>

        <button onclick="bugAnswer('missing')">
            🔍 Missing a bracket
        </button>

        <button onclick="bugAnswer('name')">
            🔍 Wrong variable
        </button>

        <p id="bugGameResult"></p>
    `;
}


function bugAnswer(answer) {

    const result = document.getElementById("bugGameResult");
    const scoreDisplay = document.getElementById("bugScoreDisplay");

    if (answer === "missing") {

        bugScore = 10;
        scoreDisplay.textContent = "🐞 Score: " + bugScore;

       result.innerHTML =
    "🎉 <strong>Bug Found!</strong><br>" +
    "🐞 You found the mistake correctly!<br>" +
    "💡 The closing bracket <strong>)</strong> was missing.<br>" +
    "✅ Correct code: <strong>print(name)</strong><br>" +
    "⭐ Your Score: " + bugScore + "/10<br><br>" +
    "<button onclick='startBugGame()'>🔄 Try Again</button>";
    
    } else {

        result.textContent =
            "❌ Try again! Look carefully at the print statement.";

    }
}



// ================= GAME 3 =================

let challengeScore = 0;


        function startChallenge() {

    challengeScore = 0;

    const area = document.getElementById("challengeGameArea");

    // Hide the old shared game area
    const oldTitle = document.getElementById("gameTitle");
    const oldQuestion = document.getElementById("gameQuestion");
    const oldArea = document.getElementById("gameArea");

    if (oldTitle) oldTitle.style.display = "none";
    if (oldQuestion) oldQuestion.style.display = "none";

    if (oldArea) {
        oldArea.innerHTML = "";
        oldArea.style.display = "none";
    }

    area.innerHTML = `
        <p><strong>🧠 Question:</strong></p>

        <p>What is a variable used for?</p>

        <p id="challengeScoreDisplay">
            🧠 Score: ${challengeScore}
        </p>

        <button onclick="challengeAnswer('wrong')">
            🎮 To play games
        </button>

        <button onclick="challengeAnswer('correct')">
            📦 To store information
        </button>

        <button onclick="challengeAnswer('wrong')">
            🌐 To connect to Wi-Fi
        </button>

        <p id="challengeResult"></p>
    `;

    area.style.display = "block";

    area.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}


function challengeAnswer(answer) {

    const result = document.getElementById("challengeResult");

   if (answer === "correct") {

    challengeScore = 10;

    document.getElementById("challengeScoreDisplay").textContent =
        "🧠 Score: " + challengeScore;

    result.innerHTML =
        "🎉 <strong>Challenge Completed!</strong><br>" +
        "💡 A variable is used to store information.<br>" +
        "⭐ Your Score: " + challengeScore + "/10<br><br>" +
        "<button onclick='startChallenge()'>🔄 Try Again</button>";
    } else {

        result.textContent =
            "❌ That's not correct. Try again!";

    }
}
