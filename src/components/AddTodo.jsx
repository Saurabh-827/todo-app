function AddTodo() {
  return (
      <div class="row td-row">
        <div class="col-6">
          <input type="text" placeholder="Enter Todo Here"></input>
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success td-button">
            Add
          </button>
        </div>
      </div>
  );
}

export default AddTodo;
