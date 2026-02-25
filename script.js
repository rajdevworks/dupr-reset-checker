function calculate() {

let current = parseFloat(document.getElementById("current").value);
let trueSkill = parseFloat(document.getElementById("trueSkill").value);
let matches = parseInt(document.getElementById("matches").value);
let winrate = parseInt(document.getElementById("winrate").value);

if (!current || !trueSkill) {
    alert("Please enter required fields");
    return;
}

let gap = trueSkill - current;

let score = 0;

// Base score from gap
score += gap * 100;

// Confidence adjustment
if (matches < 20) score += 10;
if (matches > 50) score -= 5;

// Winrate adjustment
if (winrate > 60) score += 10;
if (winrate < 50) score -= 10;

// Clamp score
score = Math.max(0, Math.min(100, score));

let verdict = "";

if (score >= 70)
    verdict = "STRONG YES — Reset will likely increase your DUPR significantly.";
else if (score >= 50)
    verdict = "YES — Reset is likely beneficial.";
else if (score >= 30)
    verdict = "MAYBE — Reset may help slightly.";
else
    verdict = "NO — Reset unlikely to help.";

document.getElementById("result").innerHTML =
`
Score: ${score.toFixed(0)}/100<br><br>
Verdict: ${verdict}
`;

}
