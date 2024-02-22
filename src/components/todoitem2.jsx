function TodoItem2() {
    let todoName = "Go to fight";
    let todoDate = "2022-08-12";

    return(<div class="container">
    <div class="row td-row">
      <div class="col-6">
        {todoName}
      </div>
      <div class="col-4">
        {todoDate}
      </div>
      <div class="col-2">
        <button type="button" class="btn btn-danger td-button">
          Delete
        </button>
      </div>
        </div>
        </div>
        );
}
export default TodoItem2;
       