function extractText() {
    let elements = document.getElementById('items');
    let result = document.getElementById('result');
    result.textContent = elements.textContent;
}