
        let chance="p1"
        const playercard=document.getElementById("playercard")
        const gamecard=document.getElementById("gamecard")

        let player1=document.getElementById("player1")
        let player2=document.getElementById("player2")

        const player1WinCount = document.getElementById("player1WinCount")
        const player2WinCount = document.getElementById("player2WinCount")
        const drowCount = document.getElementById("drowCount")
        const totalCount = document.getElementById("totalcount")
        let p1count=0,p2count =0,dcount=0, tcount=0
        let player1Name,player2Name
        function startgame() {
            
            player1Name = document.getElementById("p1").value
            player2Name = document.getElementById("p2").value
            // console.log(player1Name,player2Name);
            if(player1Name===""|| player2Name === ""){
                console.log("name required");
                document.getElementById("output").innerHTML = `
                <div class="alert alert-danger">please Enter Name</div>
                ` 
                setTimeout(() => {
           document.getElementById("output").innerHTML =""
                } ,2000);
            } else {
             player1.innerHTML=player1Name
             player2.innerHTML=player2Name
                playercard.classList.add("d-none")
            gamecard.classList.remove("d-none")
            }
        }

        function game(id) {
            // console.log("game running.......");
            const box=document.getElementById(id)
            const isred = box.classList.contains("bg-danger")
            const isgreen = box.classList.contains("bg-success")
            if(!isred && !isgreen) {

                if(chance==="p1"){
                    box.classList.add("bg-danger")
                    box.innerHTML = `<h1>X</h1>`
                    chance="p2"
                }else {
                    box.classList.add("bg-success")
                    box.innerHTML = `<h1>O</h1>`
                    chance="p1"

                }

            }
            if(!winner() && checkAllFill ()) {
                dcount++
                // console.log("match draw");
                resetGame()
            } 
            
            // winner()
            // checkAllFill()
        }
        function winner(){
            return(
                
                checkwinner("b1","b2","b3","bg-danger") ||
                checkwinner("b4","b5","b6","bg-danger") ||
                checkwinner("b7","b8","b9","bg-danger") ||
                checkwinner("b1","b4","b7","bg-danger") ||
                checkwinner("b2","b5","b8","bg-danger") ||
                checkwinner("b3","b6","b9","bg-danger") ||
                checkwinner("b1","b5","b9","bg-danger") ||
                checkwinner("b3","b5","b7","bg-danger") ||
                checkwinner("b1","b2","b3","bg-success") ||
                checkwinner("b4","b5","b7","bg-success") ||
                checkwinner("b7","b8","b9","bg-success") ||
                checkwinner("b1","b4","b7","bg-success") ||
                checkwinner("b2","b5","b8","bg-success") ||
                checkwinner("b3","b6","b9","bg-success") ||
                checkwinner("b1","b5","b9","bg-success") ||
                checkwinner("b3","b5","b7","bg-success") 
                )   
            }
            function checkwinner(id1,id2,id3,color) {
                const isBox1 = document.getElementById(id1).classList.contains(color)
                const isBox2 = document.getElementById(id2).classList.contains(color)
                const isBox3 = document.getElementById(id3).classList.contains(color)
                if ( isBox1 && isBox2 && isBox3 ) {
                    console.log(`🎉 ${color}is winner`)
                    document.getElementById("output").innerHTML =`
                    <div class="alert alert-success">
                        ${color==="bg-danger"? "player 1":"player 2"}
                        win </div>
                        `
                        setTimeout(function () {
                            document.getElementById("output").innerHTML=""
                        } , 3000)
                        setTimeout(function(){
                            resetGame()
                        } , 2000)
                    color === "bg-danger"
                    ? p1count++
                    : p2count++
        
                    return true
                }
                return false
            }
            function resetGame(){
                for(let i=1; i<=9;i++){
                    document.getElementById(`b${i}`).innerHTML = i

                    document.getElementById(`b${i}`).classList.remove("bg-success")
                    document.getElementById(`b${i}`).classList.remove("bg-danger")
                }
                tcount++
                stat()
                // console.log(tcount);
                
            }
            function stat(){
                totalCount.innerHTML = tcount
                drowCount.innerHTML = dcount
                player1WinCount.innerHTML = p1count
                player2WinCount.innerHTML = p2count
            }
              function checkAllFill(){
                  let boxCount=0
                for(let i=1; i<=9;i++){
                    const isred =document.getElementById(`b${i}`).classList.contains("bg-danger")
                    const isGreen =document.getElementById(`b${i}`).classList.contains("bg-success")
                    if(isred || isGreen){
                        boxCount ++
                    }
                }
                return  boxCount ===9 ? true:false;
            //    boxCount === 9 && console.log("sagle box fill zale");
              }
              


    