// console.log(sna_description);
var tags = document.getElementById('ptags');
var notes = document.getElementById('notetags')
// var area = document.getElementById('')
// console.log(tags);
var textcontent = tags.textContent
tags.innerHTML = `sna_description: ${textcontent}`;

var notecontent = notes.textContent
notes.innerHTML = `sna_notes: ${notecontent}`;
// console.log(textcontent);