window.onload = function () {
  showComponentsList();
  showProcess();
  showComments();
  const form = document.querySelector("#commentForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const comment = form.elements["input_comment"].value;
    if (comment.length == 0) alert("שגיאה! \nיש להכניס תגובה");
    else {
      addComment(
        comment,
        `${usersList[0].firstName} ${usersList[0].lastName}:`
      );
      alert("תגובתך הוספה בהצלחה");
      const input = document.getElementsByName("input_comment")[0];
      input.value = ""; // clear the input row
    }

    return false;
  });
};

function showComponentsList() {
  // show the components
  const componentsList = document.querySelector("#componentsList");
  const components = usersList[0].recipes[0].ingredients;
  componentsList.innerHTML = components.join("<br>");
}

function showProcess() {
  const processhtml = document.querySelector("#process");
  const process = usersList[0].recipes[0].instructions;
  processhtml.innerHTML = process;
}

function showComments() {
  const comments = usersList[0].recipes[0].comment;
  comments.forEach((comment) => {
    console.log(comment);
    createCommentRow(comment);
  });
}

const createCommentRow = (comment) => {
  const commentRowDiv = document.createElement("div");
  commentRowDiv.classList.add("commentRow");

  const userComment = document.createElement("h4");
  userComment.textContent = `${comment.userName}: ${comment.contentComment}`;

  commentRowDiv.appendChild(userComment);

  const commentsList1 = document.getElementById("nameRecipe");
  console.log(commentsList1);
  commentsList1.appendChild(commentRowDiv);
};

function addComment(comment, user) {
  //func that add comment to the comments list

  const commentRow = document.createElement("div");
  commentRow.classList.add("commentRow");

  const commenterName = document.createElement("h4");
  commenterName.textContent = user;

  const commentText = document.createElement("h4");
  commentText.textContent = comment;

  const br = document.createElement("br");

  commentRow.appendChild(commenterName);
  commentRow.appendChild(commentText);
  commentRow.appendChild(br);

  const parentDiv = document.querySelector("#commentsList");
  parentDiv.appendChild(commentRow);
}
