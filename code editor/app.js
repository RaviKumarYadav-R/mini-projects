  var editor = ace.edit("editor");
  editor.setTheme("ace/theme/monokai");
  editor.session.setMode("ace/mode/javascript");
  editor.setValue("function myFunction() {\n  // Your code here\n}");
  editor.setFontSize(14);
  editor.getSession().setTabSize(2);
  editor.setShowPrintMargin(false);
