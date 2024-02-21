function TodoItem1() {
    let todoName = "Buy milk";
    let todoDate = "2021-08-12";

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
export default TodoItem1;
       