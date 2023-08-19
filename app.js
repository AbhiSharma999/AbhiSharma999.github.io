
var j = 0;
function update(i) {

    if(i == 0) {

        let htmlCode = document.getElementById('html-code').value;
        let cssCode = document.getElementById('css-code').value;
        let jsCode = document.getElementById('js-code').value;
        // let output = document.getElementById('output');
    
        // output.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";
        let text = htmlCode + "<style>" + cssCode + "</style>" + "<script>" + jsCode + "</script>";
        let iframe = document.getElementById('output').contentWindow.document;
    
        iframe.open();
        iframe.write(text);
        iframe.close();
    }

    // output.contentWindow.eval(jsCode);
    else if(i == 1) {
        let htmlCode = document.getElementById('html-code').value;
        let html = htmlCode.slice(0, htmlCode.length);
        document.getElementById('html-code').value = html;
        j = 1;
    }
}

//Auto Tag Closing functionality
const closeChars = new Map([
	['{', '}'],
	['[', ']'],
	['(', ')'],
	['<','>'],
	['"','"'],
	["'","'"]
	
  ]);

//Handling Html Code Auto Closing	  
htmlCode=document.getElementById('html-code');
htmlCode.addEventListener('input', function (e) {
	if(j!=1){
		const pos = e.target.selectionStart;
		const val = [...e.target.value];
		const char = val.slice(pos-1, pos)[0];
		const closeChar = closeChars.get(char);
		if (closeChar) {
		val.splice(pos, 0, closeChar);
		e.target.value = val.join('');
		e.target.selectionEnd = pos;
		}
	}
	j=0;
});
// function changeColor(x) {
//     x.style.background = 'black';
// }

//Handling CSS Code Auto Closing
cssCode=document.getElementById('css-code');
cssCode.addEventListener('input', function (e) {
	if(j!=1){
		const pos = e.target.selectionStart;
		const val = [...e.target.value];
		const char = val.slice(pos-1, pos)[0];
		const closeChar = closeChars.get(char);
		if (closeChar) {
		val.splice(pos, 0, closeChar);
		e.target.value = val.join('');
		e.target.selectionEnd = pos;
		}
	}	
	j=0;
});


//Handling Javascript Code Auto Closing
javascriptCode=document.getElementById('js-code');
javascriptCode.addEventListener('input', function (e) {
	if(j!=1){
	  const pos = e.target.selectionStart;
	  const val = [...e.target.value];
	  
	  const char = val.slice(pos-1, pos)[0];
	  const closeChar = closeChars.get(char);
	  
	  if (closeChar) {
		val.splice(pos, 0, closeChar);
		e.target.value = val.join('');
		e.target.selectionEnd = pos;
	  }
	}
	j=0;
});



// ... Your existing code ...

const htmlButton = document.getElementById('html-clear-btn');
const cssButton = document.getElementById('css-clear-btn');
const jsButton = document.getElementById('js-clear-btn')

htmlButton.addEventListener('click', () => {
    htmlCode.value = ''; // Clear the code editor content
    suggestionsList.innerHTML = ''; // Clear the suggestions
});

cssButton.addEventListener('click', () => {
    cssCode.value = ''; // Clear the code editor content
    suggestionsList.innerHTML = ''; // Clear the suggestions
});

jsButton.addEventListener('click', () => {
	javascriptCode.value = '';
	suggestionsList.innerHTML = '';
})



// ... Inc/Dec Font Size ...

const incFontBtn = document.getElementById('inc-font-btn');
const decFontBtn = document.getElementById('dec-font-btn');
const codeEditors = document.querySelectorAll('.code-editor');

const defaultFontSizes = Array.from(codeEditors).map(editor =>
    parseFloat(getComputedStyle(editor).fontSize)
);

incFontBtn.addEventListener('click', () => {
    codeEditors.forEach((editor, index) => {
        const currentFontSize = parseFloat(getComputedStyle(editor).fontSize);
        const newFontSize = currentFontSize + 2;
        editor.style.fontSize = newFontSize + 'px';
    });
});

decFontBtn.addEventListener('click', () => {
    codeEditors.forEach((editor, index) => {
        const currentFontSize = parseFloat(getComputedStyle(editor).fontSize);
        const newFontSize = Math.max(defaultFontSizes[index], currentFontSize - 2);
        editor.style.fontSize = newFontSize + 'px';
    });
});


