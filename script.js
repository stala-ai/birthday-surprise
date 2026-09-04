// =========================
// العناصر
// =========================

const startBtn = document.getElementById("start-btn");
const welcome = document.getElementById("welcome");

const message = document.getElementById("message");
const memoriesBtn = document.getElementById("memories-btn");
const memories = document.getElementById("memories");

const memoryButtons = document.querySelectorAll(".memory-btn");

const photoDisplay = document.getElementById("photo-display");
const memoryPhoto = document.getElementById("memory-photo");
const photoText = document.getElementById("photo-text");

const backBtn = document.getElementById("back-btn");

const lastBtn = document.getElementById("last-btn");
const final = document.getElementById("final");


// =========================
// الصفحة الأولى
// =========================

startBtn.addEventListener("click", function () {

    welcome.style.display = "none";

    message.style.display = "flex";

});


// =========================
// الصفحة الثانية
// =========================

memoriesBtn.addEventListener("click", function () {

    message.style.display = "none";

    memories.style.display = "flex";

});


// =========================
// كلام الصور
// =========================

const photoTexts = [

    "بعض الذكريات لا تحتاج إلى أن تكون مثالية، يكفي أنها كانت برفقتك… فضحكتنا فيها وحدها تجعلها من أجمل أيامي. 🤍",

    "وفي يومٍ واحد، كانت لنا ذكرى جميلة تشبهنا… هادئة، دافئة، ومليئة بتفاصيل أحب أن أتذكرها دائمًا. 🌷",

    "يومٌ طويل، مرّ بالكثير من التفاصيل، لكنه كان لطيفًا لأنكِ كنتِ فيه… وكأن صحبتكِ تجعل حتى الأيام الطويلة أخفّ وأجمل. 🫶🏻",

    "حتى في الأيام التي أنهكتنا، كانت هناك دائمًا لحظة صغيرة تستحق أن تُحفظ… وهذه واحدة منها. 🤍\n\nأرجو أن تتّسع لكِ الطرق، وأن تتوالى عليكِ المسرّات، وأن يكفيكِ الله بفضله، وأن تستمر مباهجكِ الصغيرة بالنمو، وأن تري الربيع في أيامكِ القادمة. 🌷",

    "لأن أجمل ما في أيام الجامعة لم يكن ما تعلمناه فقط، بل تلك اللحظات العفوية التي عشناها معًا… وضحكنا فيها وكأن لا شيء في العالم يشغلنا. 🎀",

    "وكيف لي أن أترك هذه الصورة تمرّ دون أن أقول لكِ كم أنتِ جميلة؟ فيكِ جمالٌ لا يُرى بالعين وحدها، بل يُشعر به القلب. 🌸",

    "انعكاسٌ في المرآة، لكنه يحمل ذكرى لا تعكسها الصور… أنا وأنتِ، وتفصيل صغير من أيامنا التي أحبها. 🪞🤍",

    "قبلةٌ صغيرة للكاميرا، لكنها تحمل في داخلها كل الودّ الذي لا تكفي الكلمات لوصفه. 💋🤍",

    "صورٌ كثيرة، وذكريات أكثر… تفاصيل صغيرة ربما تبدو عابرة، لكنها بالنسبة لي أجزاء جميلة من حكايتنا.\n\nأنيسةٌ للروح، رفيقةٌ للقلب، ومن بعد الله ملجأٌ دائمًا وملاذٌ ثابت. 🤍",

    "كل عام وأنتِ فراشةٌ تلوّن الحياة بجمالها، وشمسٌ تضيء الطريق بأملها.\n\nمثاليةٌ في خُلُقكِ، طموحةٌ في سعيكِ، ورائعةٌ في كل تفاصيلكِ. 🤍"

];


// =========================
// فتح الصور
// =========================

memoryButtons.forEach(function (button, index) {

    button.addEventListener("click", function () {

        memories.style.display = "none";

        photoDisplay.style.display = "flex";

        memoryPhoto.src = "./images/" + (index + 1) + ".jpeg";

        photoText.textContent = photoTexts[index];

        // إخفاء زر النهاية
        lastBtn.style.display = "none";


        // إذا كانت الصورة العاشرة
        if (index === 9) {

            lastBtn.style.display = "block";

        }

    });

});


// =========================
// الرجوع
// =========================

backBtn.addEventListener("click", function () {

    photoDisplay.style.display = "none";

    memories.style.display = "flex";

});


// =========================
// الصورة 10 → النهاية
// =========================

lastBtn.addEventListener("click", function () {

    photoDisplay.style.display = "none";

    final.style.display = "flex";

});