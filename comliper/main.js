    // Function to run the code
    function run() {
        let htmlCode = document.getElementById("html-code").value;
        let cssCode = document.getElementById("css-code").value;
        let jsCode = document.getElementById("js-code").value;
        let output = document.getElementById("output");

        output.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";
        output.contentWindow.eval(jsCode);
    }

    // Function to save the code
    function saveCode() {
        let htmlCode = document.getElementById("html-code").value;
        let cssCode = document.getElementById("css-code").value;
        let jsCode = document.getElementById("js-code").value;

        // Combine all code into a single object
        let savedCode = {
            html: htmlCode,
            css: cssCode,
            js: jsCode
        };

        // Convert object to JSON and save to local storage
        localStorage.setItem('savedCode', JSON.stringify(savedCode));
    }

    // Function to load saved code on page load
    window.onload = function () {
        // Get saved code from local storage
        let savedCode = JSON.parse(localStorage.getItem('savedCode'));

        // If saved code exists, populate textareas with it
        if (savedCode) {
            document.getElementById("html-code").value = savedCode.html;
            document.getElementById("css-code").value = savedCode.css;
            document.getElementById("js-code").value = savedCode.js;
        }
    }

    // Function to run the code in the html code window 
    function runCode() {
        var code = document.getElementById("code").value;
        var iframe = document.getElementById("output");
        var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        iframeDoc.open();
        iframeDoc.write(code);
        iframeDoc.close();
    }