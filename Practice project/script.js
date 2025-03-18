// fetch("data.json")
//   .then((res) => res.json())
//   .then((data) => {
//     let project = data.find((p) => p.id === "project3");
//     if (project) {
//       console.log(project);
//     } else {
//       console.error("project not found");
//     }
//   });

function convertMarkdownToHTML(markdownText) {
  // Replace markdown bold (**) with HTML <strong> tags
  const htmlText = markdownText.replaceAll(/\*\*(.*?)\*\*/g, '<h3>$1</h3>');
  return htmlText;
}

const output = document.querySelector(".output")
document.querySelector("button").addEventListener("click", () => {
  let input = document.querySelector("#input").value;
  input = convertMarkdownToHTML(input)
  let json = JSON.stringify(input);
  console.log(json);
  console.log(input);
  
  output.innerHTML = input
});

// console.log(JSON.parse("\"Sure! Here’s a more detailed but user-friendly explanation:\\n\\nThis counter lets you:\\n1.  Adjust the count by a custom value  : \\n   - You can set how much you want to increase or decrease the counter by using the input field. For example, if you type `5` in the input, each time you click the \\\"+\\\" button, the counter will increase by 5, and each time you click the \\\"-\\\" button, the counter will decrease by 5.\\n   \\n2.   Increase the count  : \\n   - Clicking the \\\"+\\\" button will add the value from the input field to the current count. If the input is set to `1`, clicking \\\"+\\\" will increase the number by 1.\\n   \\n3.   Decrease the count  : \\n   - Clicking the \\\"-\\\" button will subtract the value in the input field from the current count. For example, if the input is set to `3`, clicking \\\"-\\\" will reduce the counter by 3.\\n   \\n4.   Reset the count to 0  : \\n   - The \\\"Reset\\\" button will bring the counter back to 0, no matter what the current count is.\\n\\nThis setup allows you to easily control how much to add or subtract from the counter by changing the value in the input field.\""));

