document.addEventListener('DOMContentLoaded', solve);

function solve() {

    const formEncodeElement = document.getElementById('encode');
    const encodeTextArea = formEncodeElement.querySelector('textarea');
    const encodeButton = formEncodeElement.querySelector('button');

    const formDecodeElement = document.getElementById('decode');
    const decodeTextArea = formDecodeElement.querySelector('textarea');
    const decodeButton = formDecodeElement.querySelector('button');

    function encode(e) {
        e.preventDefault();
        const encodedString = encodeTextArea.value
            .split('')
            .map(ch => (ch.charCodeAt(ch) + 1))
            .map(code => String.fromCharCode(code))
            .join('');

        decodeTextArea.value = encodedString;
        encodeTextArea.value = '';
    };

    function decode(e) {
        e.preventDefault();
        const decodedString = decodeTextArea.value
            .split('')
            .map(ch => (ch.charCodeAt(ch) - 1))
            .map(code => String.fromCharCode(code))
            .join('');
        console.log(decodedString);

        decodeTextArea.value = decodedString;
    };

    encodeButton.addEventListener('click', encode);
    decodeButton.addEventListener('click', decode);

}
