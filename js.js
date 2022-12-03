
        let uncomtask = document.querySelector(".taskDiv")
        let inputValue = document.querySelector("input")
        let cpDiv = document.getElementById("complete")
        let pDiv = document.getElementById("pending")
  
  
        let tickTask = [];

        const addValue = () => {
            let inputData = [];
            if (inputValue.value) {
                inputData.push(inputValue.value)
                inputValue.value = "";

                // Creating Div ul and li
              let  untask = document.createElement("div")
                let uL = document.createElement("ul")
                let newli = document.createElement("li")
                untask.className = "task";
                uncomtask.appendChild(untask)
                uL.className = "ulData";
                untask.appendChild(uL)
                newli.className = "liTask";
                uL.appendChild(newli)
                let liData = document.createTextNode(inputData)
                newli.append(liData)

                // Creating The Icon
                let icons = document.createElement("div")
                icons.className = "funcIcons"
                untask.append(icons)
                let edit = document.createElement("i")
               let tick = document.createElement("i")
                tick.className = "fa-solid fa-check fa-border  fa-pull-right"
                edit.className = "fa-solid fa-pen-to-square fa-border fa-pull-right"
                icons.append(tick)
                icons.append(edit)

                // style the icons
                tick.style.color = "green"
                tick.style.backgroundColor = "white"
                tick.style.borderRadius = "200px"
                edit.style.color = "blue"
                edit.style.borderRadius = "200px"
                edit.style.backgroundColor = "white"


                // edit task through clicking on edit icon 
                let items = document.querySelectorAll(".ulData li");
                for (let i = 0; i < items.length; i++) {
                    edit.onclick = function () {
                        let editText = [];
                        editText.push(items[i].innerHTML)
                        document.getElementById("inp").value = editText;
                        console.log(items);
                    };
                }
                // removing div for uncomplete tasks 
                tick.onclick = function () {
                    untask.className = "compl"
                    tick.style.color = "white"
                    tick.style.backgroundColor = "green"
                    
                    
                } 

            }   
        }
        