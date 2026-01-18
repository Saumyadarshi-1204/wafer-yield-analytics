import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";

function LotComparison() {
  const [lots, setLots] = useState([
    { id: 1, lot: "LOT-1001", avgYield: 92, wafers: 32 },
    { id: 2, lot: "LOT-1002", avgYield: 88, wafers: 30 },
    { id: 3, lot: "LOT-1003", avgYield: 94, wafers: 34 },
  ]);

  const [form, setForm] = useState({ lot: "", avgYield: "", wafers: "" });
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({ lot: "", avgYield: "", wafers: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleAdd = () => {
    if (!form.lot || !form.avgYield || !form.wafers) return;
    setLots([...lots, { id: Date.now(), ...form }]);
    setForm({ lot: "", avgYield: "", wafers: "" });
  };

  const handleDelete = (id) => setLots(lots.filter((l) => l.id !== id));

  const startEdit = (lot) => {
    setEditId(lot.id);
    setEditForm(lot);
  };

  const handleEditChange = (e) =>
    setEditForm({ ...editForm, [e.target.name]: e.target.value });

  const saveEdit = () => {
    setLots(lots.map((l) => (l.id === editId ? editForm : l)));
    setEditId(null);
  };

  return (
    <MainLayout>
      <div className="container-fluid p-4">
        <h5 className="fw-semibold mb-1">Lot Comparison</h5>
        <p className="text-secondary-theme subtle-repeat mb-4">
          Analyze and manage fabrication lots at a glance.
        </p>

        {/* CREATE */}
        <div className="card-theme rounded p-3 mb-4" style={{ maxWidth: "760px" }}>
          <h6 className="fw-semibold mb-3">Add New Lot</h6>

          <div className="row g-3">
            {["lot", "avgYield", "wafers"].map((f) => (
              <div className="col-md-4" key={f}>
                <input
                  name={f}
                  placeholder={f === "lot" ? "Lot ID" : f === "avgYield" ? "Avg Yield %" : "Total Wafers"}
                  value={form[f]}
                  onChange={handleChange}
                  className="form-control"
                  style={{
                    backgroundColor: "var(--bg-main)",
                    color: "var(--text-primary)",
                    border: "1px solid var(--border-color)",
                  }}
                />
              </div>
            ))}
          </div>

          <button className="btn btn-primary mt-3" onClick={handleAdd}>
            Add Lot
          </button>
        </div>

        {/* TABLE */}
        <div className="card-theme rounded p-3">
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                <th>Lot ID</th>
                <th>Avg Yield (%)</th>
                <th>Wafers</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {lots.map((l) => (
                <tr key={l.id} style={{ borderBottom: "1px solid var(--border-color)" }}>
                  <td>{editId === l.id ? <input name="lot" value={editForm.lot} onChange={handleEditChange} /> : l.lot}</td>
                  <td>{editId === l.id ? <input name="avgYield" value={editForm.avgYield} onChange={handleEditChange} /> : l.avgYield}</td>
                  <td>{editId === l.id ? <input name="wafers" value={editForm.wafers} onChange={handleEditChange} /> : l.wafers}</td>
                  <td>
                    {editId === l.id ? (
                      <button className="btn btn-sm btn-success" onClick={saveEdit}>Save</button>
                    ) : (
                      <>
                        <button className="btn btn-sm btn-outline-primary me-2" onClick={() => startEdit(l)}>Edit</button>
                        <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(l.id)}>Delete</button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </MainLayout>
  );
}

export default LotComparison;
