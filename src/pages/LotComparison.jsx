import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";

function LotComparison() {
  const [lots, setLots] = useState([
    { id: 1, lot: "LOT-1001", avgYield: 92, wafers: 32 },
    { id: 2, lot: "LOT-1002", avgYield: 88, wafers: 30 },
    { id: 3, lot: "LOT-1003", avgYield: 94, wafers: 34 },
  ]);

  const [form, setForm] = useState({
    lot: "",
    avgYield: "",
    wafers: "",
  });

  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({
    lot: "",
    avgYield: "",
    wafers: "",
  });

  /* ---------- CREATE ---------- */
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (!form.lot || !form.avgYield || !form.wafers) return;

    setLots([
      ...lots,
      {
        id: Date.now(),
        lot: form.lot,
        avgYield: Number(form.avgYield),
        wafers: Number(form.wafers),
      },
    ]);

    setForm({ lot: "", avgYield: "", wafers: "" });
  };

  /* ---------- DELETE ---------- */
  const handleDelete = (id) => {
    setLots(lots.filter((l) => l.id !== id));
  };

  /* ---------- UPDATE ---------- */
  const startEdit = (lot) => {
    setEditId(lot.id);
    setEditForm({
      lot: lot.lot,
      avgYield: lot.avgYield,
      wafers: lot.wafers,
    });
  };

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const saveEdit = () => {
    setLots(
      lots.map((l) =>
        l.id === editId
          ? {
              ...l,
              lot: editForm.lot,
              avgYield: Number(editForm.avgYield),
              wafers: Number(editForm.wafers),
            }
          : l
      )
    );
    setEditId(null);
  };

  const cancelEdit = () => {
    setEditId(null);
  };

  return (
    <MainLayout>
      <div className="container-fluid p-4">
        <h5 className="fw-semibold mb-4">Lot Comparison</h5>

        {/* CREATE */}
        <div className="card-theme rounded p-3 mb-4" style={{ maxWidth: "760px" }}>
          <h6 className="fw-semibold mb-3">Add New Lot</h6>

          <div className="row g-3">
            <div className="col-md-4">
              <input
                name="lot"
                placeholder="Lot ID"
                value={form.lot}
                onChange={handleChange}
                className="form-control"
                style={{
                  backgroundColor: "var(--bg-main)",
                  color: "var(--text-primary)",
                  border: "1px solid var(--border-color)",
                }}
              />
            </div>

            <div className="col-md-4">
              <input
                name="avgYield"
                placeholder="Avg Yield %"
                value={form.avgYield}
                onChange={handleChange}
                className="form-control"
                style={{
                  backgroundColor: "var(--bg-main)",
                  color: "var(--text-primary)",
                  border: "1px solid var(--border-color)",
                }}
              />
            </div>

            <div className="col-md-4">
              <input
                name="wafers"
                placeholder="Total Wafers"
                value={form.wafers}
                onChange={handleChange}
                className="form-control"
                style={{
                  backgroundColor: "var(--bg-main)",
                  color: "var(--text-primary)",
                  border: "1px solid var(--border-color)",
                }}
              />
            </div>
          </div>

          <button className="btn btn-primary mt-3" onClick={handleAdd}>
            Add Lot
          </button>
        </div>

        {/* READ + UPDATE + DELETE */}
        <div className="card-theme rounded p-3">
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                <th style={{ padding: "10px", color: "var(--text-secondary)" }}>
                  Lot ID
                </th>
                <th style={{ padding: "10px", color: "var(--text-secondary)" }}>
                  Avg Yield (%)
                </th>
                <th style={{ padding: "10px", color: "var(--text-secondary)" }}>
                  Wafers
                </th>
                <th style={{ padding: "10px" }}></th>
              </tr>
            </thead>

            <tbody>
              {lots.map((l) => (
                <tr key={l.id} style={{ borderBottom: "1px solid var(--border-color)" }}>
                  {editId === l.id ? (
                    <>
                      <td style={{ padding: "10px" }}>
                        <input
                          name="lot"
                          value={editForm.lot}
                          onChange={handleEditChange}
                          className="form-control form-control-sm"
                          style={{
                            backgroundColor: "var(--bg-main)",
                            color: "var(--text-primary)",
                            border: "1px solid var(--border-color)",
                          }}
                        />
                      </td>

                      <td style={{ padding: "10px" }}>
                        <input
                          name="avgYield"
                          value={editForm.avgYield}
                          onChange={handleEditChange}
                          className="form-control form-control-sm"
                          style={{
                            backgroundColor: "var(--bg-main)",
                            color: "var(--text-primary)",
                            border: "1px solid var(--border-color)",
                          }}
                        />
                      </td>

                      <td style={{ padding: "10px" }}>
                        <input
                          name="wafers"
                          value={editForm.wafers}
                          onChange={handleEditChange}
                          className="form-control form-control-sm"
                          style={{
                            backgroundColor: "var(--bg-main)",
                            color: "var(--text-primary)",
                            border: "1px solid var(--border-color)",
                          }}
                        />
                      </td>

                      <td style={{ padding: "10px" }}>
                        <button
                          className="btn btn-sm btn-success me-2"
                          onClick={saveEdit}
                        >
                          Save
                        </button>
                        <button
                          className="btn btn-sm btn-outline-secondary"
                          onClick={cancelEdit}
                        >
                          Cancel
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td style={{ padding: "10px" }}>{l.lot}</td>
                      <td style={{ padding: "10px" }}>{l.avgYield}</td>
                      <td style={{ padding: "10px" }}>{l.wafers}</td>
                      <td style={{ padding: "10px" }}>
                        <button
                          className="btn btn-sm btn-outline-primary me-2"
                          onClick={() => startEdit(l)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => handleDelete(l.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </>
                  )}
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
