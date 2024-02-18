window.onload = function() {
    const form = document.querySelector("#commentForm");
    
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const comment=form.elements['input_comment'].value;
        if(comment.length==0)
            alert ('שגיאה! \nיש להכניס תגובה');
        else{
            addComment(comment,'רחלי אליהו'+ ':')
            alert('תגובתך הוספה בהצלחה')
            const input= document.getElementsByName('input_comment')[0];
            input.value="";// clear the input row

        }
        return false;
    })

}

function addComment (comment, user){//func that add comment to the comments list
    
const commentRow = document.createElement('div');
commentRow.classList.add('commentRow');

const commenterName = document.createElement('h4');
commenterName.textContent = user;

const commentText = document.createElement('h4');
commentText.textContent = comment;

const br = document.createElement('br');

commentRow.appendChild(commenterName);
commentRow.appendChild(commentText);
commentRow.appendChild(br);

const parentDiv = document.querySelector('.commentsList');
parentDiv.appendChild(commentRow);

}