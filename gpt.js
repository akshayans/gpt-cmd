const { bing } = require("gpti");
const { gpt } = require("gpti");
const prompts = require("prompts");
(async () => {
  console.log(`
  1. GPT-4
  2. Bing
  3. GPT-3
  `)
  const modelresponse = await prompts({
    type: 'number',
    name: 'model',
    message: 'Which GPT model would you like to use?',
    validate: model => model > 3 ? `Not a valid option` : true
  });
  const response = await prompts({
    type: 'text',
    name: 'question',
    message: 'What is your prompt?',
  });
  if (modelresponse.model === 1) {  
    gpt({
        prompt: response.question,
        model: "GPT-4",
        markdown: false
    }, (err, data) => {
        if(err != null){
            console.log(err);
        } else {
            console.log(` `)
            console.log(` `)
            console.log(`🤖 AI's Response > ${data.gpt}`);
        }
    });
  } else if (modelresponse.model === 2) {
  bing({
    messages: [
        {
            role: "user",
            content: response.question
        }
    ],
    conversation_style: "Balanced",
    markdown: false,
    stream: false,
}, (err, data) => {
    if(err != null){
        console.log(err);
    } else {
        console.log(` `)
        console.log(` `)
        console.log(`🤖 AI's Response > ${data.message}`)
    }
});
    } else if (modelresponse.model === 3) {
    gpt({
        prompt: response.question,
        model: "GPT-3",
        markdown: false
    }, (err, data) => {
        if(err != null){
            console.log(err);
        } else {
            console.log(` `)
            console.log(` `)
            console.log(`🤖 AI's Response > ${data.gpt}`);
        }
    });
   }
})();