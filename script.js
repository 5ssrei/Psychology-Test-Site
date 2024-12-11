function showResult() {
    const resultDiv = document.getElementById('result');
    const selectedOption = document.querySelector('input[name="forest"]:checked');

    if (!selectedOption) {
        resultDiv.textContent = '請選擇一個選項！';
        resultDiv.style.color = 'red';
        return;
    }

    const value = selectedOption.value;
    let result = '';

    switch (value) {
        case '1':
            result = '你是一個樂觀、注重美感的人，喜歡享受生活的小確幸。';
            break;
        case '2':
            result = '你是一個內向而富有哲思的人，喜歡沉浸在自己的世界中。';
            break;
        case '3':
            result = '你是一個細心且溫柔的人，對身邊的小細節特別敏感。';
            break;
        default:
            result = '發生錯誤，請再試一次！';
    }

    resultDiv.textContent = result;
    resultDiv.style.color = 'green';
}
