
export default function AddNewTransation() {
  return (
    <div>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="">Item</label>
          <input type="text" placeholder="Enter Your Items" required />
        </div>
        <div className="form-control">
          <label htmlFor="">Price</label>
          <input type="text" placeholder="Enter Your Price" required />
        </div>
        <button className="btn">ADD</button>
      </form>
    </div>
  );
}
