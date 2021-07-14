document.querySelector('#btn').onclick = function () 
{
    
    if (document.querySelector('#newtask input').value.length == 0) 
    {
        alert("please enter a task");
    }

    else 
    {
        document.querySelector('#tasks').innerHTML
            += `
                <div class="task">
                    <div>
                        <button class="check"><i class="far fa-check-square"></i></button>
                        <span id ="taskname">
                            ${document.querySelector('#newtask input').value}
                        </span>
                    </div>
                    <button class="delete">
                        <i class="far fa-trash-alt"></i> 
                    </button>
                </div>
            `;

        var current = document.querySelectorAll(".delete");
        for (var i = 0; i < current.length; i++) 
        {
            current[i].onclick = function () 
            {
                this.parentNode.remove();
            } 
        }

        var taskcompleted = document.querySelectorAll(".task");
        for (var i = 0; i < taskcompleted.length; i++) 
        {
            taskcompleted[i].onclick = function () 
            {
                this.querySelector("#taskname").classList.toggle("txt");
                this.querySelector(".check").classList.toggle("completed");
            }
        }

        document.querySelector('#newtask input').value = "";
    }
}
