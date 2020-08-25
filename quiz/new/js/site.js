let questions = [
    {
      id: 1,
      question: "What does COVID-19 stand for ?",
      answer: "Coronavirus Disease 19",
      status:"",
      options: [
        "Coronavirus Disease 19",
        "Plauge Epidemic",
        "Hantavirus Disease",
        "None of these"
      ]
    },
    {
      id: 2,
      question: "Name the vaccine that is jointly developed by the German company BioNTexh and US pharma giant Pfizer for COVID-19?",
      answer: "BNT162",
      status:"",
      options: [
        "PICOVACC",
        "BNT162",
        "Both A and B",
        "Neither A and B"
      ]
    },
    {
        id: 3,
        question: "How many countries, areas or territories are suffering from novel coronavirus outbreak in the world?",
        answer: "More than 200",
        status:"",
        options: [
          "More than 200",
          "More than 100",
          "More than 50",
          "More than 500"
        ]
      },
      {
        id: 4,
        question: "Thailand announced that it has proceeded to test its novel coronavirus vaccine on whicj animal/bird?",
        answer: "Monkeys",
        status:"",
        options: [
          "Lizard",
          "Monkeys",
          "Hens",
          "Kites"
        ]
      },
      {
        id: 5,
        question: "In a study, which cells are found in COVID-19 patients 'bode well' for long term immunity? ",
        answer: "T-cell",
        status:"",
        options: [
          "D-cell",
          "T-cell",
          "Endothelial Cells",
          "P-cell"
        ]
      },
      {
        id: 6,
        question: "How many countries, areas or territories are suffering from novel coronavirus outbreak in the world?",
        answer: "More than 200",
        status:"",
        options: [
          "More than 200",
          "More than 100",
          "More than 50",
          "More than 500"
        ]
      },
      {
        id: 7,
        question: "In which age group the COVID-19 spreads?",
        answer: "All of the above are correct",
        status:"",
        options: [
          "COVID-19 occur in all age group",
          "Coronavirus infection is mild in childern",
          "Older person and person with pre-existing medical conditions are at high risk to develop serious illness",
          "All of the above are correct"
        ]
      },
      {
        id: 8,
        question: "What is coronavirus?",
        answer: "Both A and B",
        status:"",
        options: [
          "It is a large family of viruses",
          "It belongs to the family of Nidovirus",
          "Both A and B",
          "Only A is correct"
        ]
      },
      {
        id: 9,
        question: "The first case of novel coronavirus was identified in ....",
        answer: "Wuhan",
        status:"",
        options: [
          "Beijing",
          "Shanghai",
          "Wuhan",
          "Tianjin"
        ]
      },
    {
      id: 10,
      question: "How many vaccine caandidates for COVID-19 have been proposed",
      answer: "120+",
      status:"",
      options: [
        "120+",
        "1000+",
        "50+",
        "None of these"
      ]
    }
  ];
  
  let question_count = 0;
  let points = 0;
  let cquestion=0;
  let wquestion=0;
  // let arr=[1,2,3,4,5,6,7,8,9,10];
  questions=questions.sort(() => Math.random()-0.5);
  // let i=0;
  // arr=shuffle(arr);
  window.onload = function() {
    show(question_count);
    document.getElementById("namep").innerHTML=sessionStorage.getItem("name");
  
  };
  
  function next() {
   
       
    // cons shuffledq ,currentq;
    // if the question is last then redirect to final page
    if (question_count == questions.length - 1) {
      sessionStorage.setItem("time", time);
      clearInterval(mytime);
      location.href = "end.html";
    }
    console.log(question_count);
  
    // let user_answer = document.querySelector("li.option.active").innerHTML;
    //  var element=document.querySelector("li.option.active");
    // check if the answer is right or wrong
    // if (user_answer == questions[question_count].answer) {
      // points += 10;
      // alert("correct answer");
    //   document.getElementById("option.active").style.backgroundColor="green";
    //   document.getElementsById("wrapper").style.backgroundColor="green";
    //  element.classList.toggle("active");
      // sessionStorage.setItem("points", points);
    // }
    // else{
        // document.getElementById("quiz_body").style.backgroundColor="red";
        // alert("incorrect answer");
        // }
    console.log(points);
  
    question_count++;
    show(question_count);
  }
  


  function previous() {
    console.log(question_count);
    question_count--;
    show(question_count);
  }
let cnt=0;

  function show(count) {
  
    let question = document.getElementById("questions");
    let [first, second, third, fourth] =(questions[count].options);
    question.innerHTML = `
    <h2>Q${cnt + 1}. ${questions[count].question}</h2>
     <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
  </ul> 
    `;
    // i++;
    cnt++;
    toggleActive();
  }
  // function submt(){
  function toggleActive() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
      option[i].onclick = function() {

        for (let i = 0; i < option.length; i++) {
             
          if (option[i].classList.contains("active")) {
            option[i].classList.remove("active");
            
          }
         
        }

        option[i].classList.add("active");
          // {
            //  let user_answer = (option[i]).innerHTML;
            //  if (user_answer == questions[question_count].answer)
            //  {
            //    option[i].classList.add("active");
            //       // alert("correct answer");
            //   //  next();
            //  }
            //  else{
            //    option[i].classList.add("activei");
            //   //  alert("incorrect answer")
            //   //  next();
            //  }
            //  next();
          // }
          // alert(user_answer);
        // document.getElementByClassName("li.option[i].active").style.backgroundColor="green";
      };
    }
  }
  function submt(){
       let user_answer = document.querySelector("li.option.active").innerHTML;
      //  alert(user_answer);
       if (user_answer == questions[question_count].answer)
             {
              document.querySelector("li.option.active").style.backgroundColor="green";
      //             // alert("correct answer");
              points += 10;
      // alert("correct answer");
    //   document.getElementById("option.active").style.backgroundColor="green";
    //   document.getElementsById("wrapper").style.backgroundColor="green";
    //  element.classList.toggle("active");
               sessionStorage.setItem("points", points);
               cquestion++;
               sessionStorage.setItem("cquestion",cquestion);
    }
      //         //  next();
             
             else if(user_answer!=questions[question_count].answer){
                 document.querySelector("li.option.active").style.backgroundColor="red";
              //  option[i].classList.add("activew");
      //         //  alert("incorrect answer")
                 wquestion++;
                sessionStorage.setItem("wquestion",wquestion);
      //         //  next();
             }
      //        next();
      //     }

  }
  // }
  function bclk(numberq)
  {
    // alert(numberq);
    if(numberq=='one'){
    question_count=0;
    cnt=0;
    show(question_count);
    }
    else if(numberq=='two'){
      question_count=1;
      cnt=1;
    show(question_count);
    }
    else if(numberq=='three'){
      question_count=2;
      cnt=2;
    show(question_count);
    
  }
    else if(numberq=='four'){
      question_count=3;
      cnt=3;
    show(question_count);
  }
    else if(numberq=='five'){
      question_count=4;
      cnt=4;
    show(question_count);
  }
    else if(numberq=='six'){
      question_count=5;
      cnt=5;
    show(question_count);
  }
    else if(numberq=='seven'){
      question_count=6;
      cnt=6;
    show(question_count);
  }
    else if(numberq=='eight'){
      question_count=7;
      cnt=7;
    show(question_count);
  }
    else if(numberq=='nine'){
      question_count=8;
      cnt=8;
    show(question_count);
  }
    else if(numberq=='ten'){
      question_count=9;
      cnt=9;
    show(question_count);
  }

    // alert(i);
  //   if(numberq=='one'){
  //   i=0;
  //   }
  //   let question = document.getElementById("questions");
  //   let [first, second, third, fourth] =(questions[count].options);
  //   question.innerHTML = `
  //   <h2>Q${count + 1}. ${questions[arr[i]-1].question}</h2>
  //    <ul class="option_group">
  //   <li class="option">${first}</li>
  //   <li class="option">${second}</li>
  //   <li class="option">${third}</li>
  //   <li class="option">${fourth}</li>
  // </ul> 
  // //   `;
  //   i++;
    // toggleActive();
  }
