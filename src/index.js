import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  //liタグ生成
  const li = document.createElement("li");

  //divタグ生成
  const div = document.createElement("div");
  div.className = "list-row";

  //pタグ生成、入力した内容追加
  const todo = document.createElement("p");
  todo.innerText = text;

  //button（完了）タグ作製
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //リストから削除
    deleteFromIncompleteList(completeButton.parentNode);
    //完了リストに追加する内容
    const addTarget = completeButton.parentNode;
    //TODO内容テキスト取得
    const text = addTarget.firstElementChild.innerText;
    //div以下を初期化
    addTarget.textContent = null;
    //li、pタグ作製
    const completeList = document.createElement("li");
    const completeText = document.createElement("p");
    completeText.innerText = text;
    //戻すbutton作成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    //戻す機能
    backButton.addEventListener("click", () => {
      const backTarget = backButton.parentNode;
      document
        .getElementById("complete-list")
        .removeChild(backTarget.parentNode);

      //TODO内容テキスト取得
      const text = backTarget.firstElementChild.innerText;
      createIncompleteList(text);
    });
    //各要素を設定
    completeList.appendChild(addTarget);
    addTarget.appendChild(completeText);
    addTarget.appendChild(backButton);
    //完了リストに追加
    document.getElementById("complete-list").appendChild(completeList);

    // const completeTaret = div.parentNode;
    // //ボタンの削除と追加
    // div.removeChild(completeButton);
    // div.removeChild(deleteButton);
    // const backButton = document.createElement("button");
    // backButton.innerText = "戻す";
    // backButton.addEventListener("click", () => {
    //   console.log(completeTaret);
    // });
    // div.appendChild(backButton);
    // //完了へ移動
    // document.getElementById("complete-list").appendChild(completeTaret);
  });

  //button（削除）タグ作製
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ（li）を削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //各要素を設定
  li.appendChild(div);
  div.appendChild(todo);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target.parentNode);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
