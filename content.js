const newStyle = document.createElement("style");

newTheme = `

#board-single, #board-primary, #board-analysis-board, #board-play-computer, #board-chessboard, .fade-in-overlay
{
    background-image: url('https://lichess.org/assets/hashed/brown.d4a5fe34.png');
}

.coordinate-light
{
    fill: #B58863;
}

.coordinate-dark
{
    fill: #F0D9B5;
}

.highlight
{
    background-color: #5ed7f1;
}

.piece.wk, .promotion-piece.wk
{
    background-image: url('https://lichess.org/assets/hashed/wK.09837f1f.svg');
}

.piece.wq, .promotion-piece.wq
{
    background-image: url('	https://lichess.org/assets/hashed/wQ.9c0a960b.svg');
}

.piece.wr, .promotion-piece.wr
{
    background-image: url('	https://lichess.org/assets/hashed/wR.05746153.svg');
}

.piece.wb, .promotion-piece.wb
{
    background-image: url('https://lichess.org/assets/hashed/wB.8bf4f38c.svg');
}

.piece.wn, .promotion-piece.wn
{
    background-image: url('https://lichess.org/assets/hashed/wN.43d8bed9.svg');
}

.piece.wp, .promotion-piece.wp
{
    background-image: url('https://lichess.org/assets/hashed/wP.a8bd79f3.svg');
}

.piece.bk, .promotion-piece.bk
{
    background-image: url('https://lichess.org/assets/hashed/bK.2dc3caba.svg');
}

.piece.bq, .promotion-piece.bq
{
    background-image: url('https://lichess.org/assets/hashed/bQ.2d0162d1.svg');
}

.piece.br, .promotion-piece.br
{
    background-image: url('https://lichess.org/assets/hashed/bR.5928b869.svg');
}

.piece.bb, .promotion-piece.bb
{
    background-image: url('https://lichess.org/assets/hashed/bB.48ff9dba.svg');
}

.piece.bn, .promotion-piece.bn
{
    background-image: url('https://lichess.org/assets/hashed/bN.72e1565f.svg');
}

.piece.bp, .promotion-piece.bp
{
    background-image: url('https://lichess.org/assets/hashed/bP.93e11e46.svg');
}

`

newStyle.textContent = newTheme
newStyle.id = "unofficial-new-theme";
document.body.appendChild(newStyle);

const delay = ms => new Promise(res => setTimeout(res, ms));
const loadTimeMS = 1000;

const replaceTheme = async() =>
{
    await delay(loadTimeMS);

    if (document.getElementById("board-styles-single"))
        document.getElementById("board-styles-single").textContent = document.getElementById("unofficial-new-theme").textContent;
    if (document.getElementById("board-styles-analysis-board"))
        document.getElementById("board-styles-analysis-board").textContent = document.getElementById("unofficial-new-theme").textContent;
    if (document.getElementById("board-styles-play-computer"))
        document.getElementById("board-styles-play-computer").textContent = document.getElementById("unofficial-new-theme").textContent;
    if (document.getElementById("board-styles-primary"))
        document.getElementById("board-styles-primary").textContent = document.getElementById("unofficial-new-theme").textContent;
    if (document.getElementById("board-styles-chessboard"))
        document.getElementById("board-styles-chessboard").textContent = document.getElementById("unofficial-new-theme").textContent;
}

replaceTheme();