// ========================================
// Zeya's Little Love Game 💙
// Main Game Script
// ========================================

function startGame() {
    // Small button animation
    const button = document.querySelector(".start-button");

    if (button) {
        button.innerHTML = "LOADING... 💙";
        button.disabled = true;
    }

    // Open the first game screen
    setTimeout(() => {
        document.body.innerHTML = `
            <main class="start-screen">

                <div class="heart">💙</div>

                <h1>Ready?</h1>

                <p class="subtitle">
                    Your little love journey is about to begin ✨
                </p>

                <button class="start-button" onclick="showFirstQuestion()">
                    LET'S GO
                    <span>💙</span>
                </button>

                <p class="creator">
                    Created by
                    <a href="https://www.instagram.com/be.like_sahil?stkn=MTF3eWhrZ3o1NWdzeQ=="
                       target="_blank"
                       rel="noopener noreferrer">
                        @be.like_sahil
                    </a>
                </p>

            </main>
        `;
    }, 700);
}


// ========================================
// First Question
// ========================================

function showFirstQuestion() {

    document.body.innerHTML = `
        <main class="start-screen">

            <div class="heart">🍫</div>

            <h1>Question 1</h1>

            <p class="subtitle">
                Zeya's favourite food is...
            </p>

            <div class="answers">

                <button onclick="wrongAnswer()">
                    🍕 Pizza
                </button>

                <button onclick="correctAnswer()">
                    🍫 Chocolate
                </button>

                <button onclick="wrongAnswer()">
                    🍔 Burger
                </button>

                <button onclick="wrongAnswer()">
                    🍟 Fries
                </button>

            </div>

            <p class="creator">
                Created by
                <a href="https://www.instagram.com/be.like_sahil?stkn=MTF3eWhrZ3o1NWdzeQ=="
                   target="_blank"
                   rel="noopener noreferrer">
                    @be.like_sahil
                </a>
            </p>

        </main>
    `;
}


// ========================================
// Correct Answer
// ========================================

function correctAnswer() {

    document.body.innerHTML = `
        <main class="start-screen">

            <div class="heart">💙</div>

            <h1>Correct! ✨</h1>

            <p class="subtitle">
                You know Zeya pretty well 😌
            </p>

            <button class="start-button" onclick="showMaggieQuestion()">
                NEXT
                <span>→</span>
            </button>

            <p class="creator">
                Created by
                <a href="https://www.instagram.com/be.like_sahil?stkn=MTF3eWhrZ3o1NWdzeQ=="
                   target="_blank"
                   rel="noopener noreferrer">
                    @be.like_sahil
                </a>
            </p>

        </main>
    `;
}


// ========================================
// Wrong Answer
// ========================================

function wrongAnswer() {

    alert("Aww 😭 Wrong answer! Try again 💙");

}


// ========================================
// Maggie Question
// ========================================

function showMaggieQuestion() {

    document.body.innerHTML = `
        <main class="start-screen">

            <div class="heart">🍜</div>

            <h1>Question 2</h1>

            <p class="subtitle">
                Another favourite food?
            </p>

            <div class="answers">

                <button onclick="wrongAnswer()">
                    🍰 Cake
                </button>

                <button onclick="correctMaggie()">
                    🍜 Maggie
                </button>

                <button onclick="wrongAnswer()">
                    🍣 Sushi
                </button>

                <button onclick="wrongAnswer()">
                    🌮 Taco
                </button>

            </div>

            <p class="creator">
                Created by
                <a href="https://www.instagram.com/be.like_sahil?stkn=MTF3eWhrZ3o1NWdzeQ=="
                   target="_blank"
                   rel="noopener noreferrer">
                    @be.like_sahil
                </a>
            </p>

        </main>
    `;
}


function correctMaggie() {

    document.body.innerHTML = `
        <main class="start-screen">

            <div class="heart">🥰</div>

            <h1>Nice!</h1>

            <p class="subtitle">
                Okay... you're doing good 💙
            </p>

            <button class="start-button" onclick="showColourQuestion()">
                NEXT
                <span>→</span>
            </button>

            <p class="creator">
                Created by
                <a href="https://www.instagram.com/be.like_sahil?stkn=MTF3eWhrZ3o1NWdzeQ=="
                   target="_blank"
                   rel="noopener noreferrer">
                    @be.like_sahil
                </a>
            </p>

        </main>
    `;
}


// ========================================
// Colour Question
// ========================================

function showColourQuestion() {

    document.body.innerHTML = `
        <main class="start-screen">

            <div class="heart">💙</div>

            <h1>Question 3</h1>

            <p class="subtitle">
                What's Zeya's favourite colour?
            </p>

            <div class="answers">

                <button onclick="wrongAnswer()">
                    ❤️ Red
                </button>

                <button onclick="correctColour()">
                    💙 Blue
                </button>

                <button onclick="wrongAnswer()">
                    💚 Green
                </button>

                <button onclick="wrongAnswer()">
                    💜 Purple
                </button>

            </div>

            <p class="creator">
                Created by
                <a href="https://www.instagram.com/be.like_sahil?stkn=MTF3eWhrZ3o1NWdzeQ=="
                   target="_blank"
                   rel="noopener noreferrer">
                    @be.like_sahil
                </a>
            </p>

        </main>
    `;
}


function correctColour() {

    alert("Perfect! 💙");

    showBirthdayQuestion();
}


// ========================================
// Birthday Question
// ========================================

function showBirthdayQuestion() {

    document.body.innerHTML = `
        <main class="start-screen">

            <div class="heart">🎂</div>

            <h1>Question 4</h1>

            <p class="subtitle">
                Zeya's birthday month is...
            </p>

            <div class="answers">

                <button onclick="wrongAnswer()">
                    January
                </button>

                <button onclick="correctBirthday()">
                    March
                </button>

                <button onclick="wrongAnswer()">
                    July
                </button>

                <button onclick="wrongAnswer()">
                    December
                </button>

            </div>

            <p class="creator">
                Created by
                <a href="https://www.instagram.com/be.like_sahil?stkn=MTF3eWhrZ3o1NWdzeQ=="
                   target="_blank"
                   rel="noopener noreferrer">
                    @be.like_sahil
                </a>
            </p>

        </main>
    `;
}


function correctBirthday() {

    alert("March! 🎂💙 You got it!");

    showSongQuestion();
}


// ========================================
// Song Question
// ========================================

function showSongQuestion() {

    document.body.innerHTML = `
        <main class="start-screen">

            <div class="heart">🎵</div>

            <h1>Final Question</h1>

            <p class="subtitle">
                Zeya's favourite song is...
            </p>

            <div class="answers">

                <button onclick="wrongAnswer()">
                    Perfect
                </button>

                <button onclick="correctSong()">
                    Ishq Ke Jaan
                </button>

                <button onclick="wrongAnswer()">
                    Shape of You
                </button>

                <button onclick="wrongAnswer()">
                    Until I Found You
                </button>

            </div>

            <p class="creator">
                Created by
                <a href="https://www.instagram.com/be.like_sahil?stkn=MTF3eWhrZ3o1NWdzeQ=="
                   target="_blank"
                   rel="noopener noreferrer">
                    @be.like_sahil
                </a>
            </p>

        </main>
    `;
}


function correctSong() {

    document.body.innerHTML = `
        <main class="start-screen">

            <div class="heart">💙</div>

            <h1>You Did It!</h1>

            <p class="subtitle">
                You completed the first little challenge ✨
            </p>

            <button class="start-button" onclick="finalMessage()">
                CONTINUE
                <span>💙</span>
            </button>

            <p class="creator">
                Created by
                <a href="https://www.instagram.com/be.like_sahil?stkn=MTF3eWhrZ3o1NWdzeQ=="
                   target="_blank"
                   rel="noopener noreferrer">
                    @be.like_sahil
                </a>
            </p>

        </main>
    `;
}


// ========================================
// Temporary Final Screen
// ========================================

function finalMessage() {

    document.body.innerHTML = `
        <main class="start-screen">

            <div class="heart">💙</div>

            <h1>Zeya</h1>

            <p class="subtitle">
                This is only the beginning... ✨
            </p>

            <p style="
                position: relative;
                max-width: 310px;
                line-height: 1.7;
                color: #a9bfd3;
                font-size: 13px;
                margin-bottom: 28px;
            ">
                Someone made this little world just for you. 💙
            </p>

            <button class="start-button" onclick="location.reload()">
                PLAY AGAIN
                <span>↻</span>
            </button>

            <p class="creator">
                Created by
                <a href="https://www.instagram.com/be.like_sahil?stkn=MTF3eWhrZ3o1NWdzeQ=="
                   target="_blank"
                   rel="noopener noreferrer">
                    @be.like_sahil
                </a>
            </p>

        </main>
    `;
}
