import servicios from "../data/servicios";

function Servicios() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Servicios del Hotel</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {servicios.map((servicio) => (
          <div key={servicio.id} style={{ border: "1px solid #ccc", padding: "10px", width: "300px" }}>
            <img src={servicio.imagen} alt={servicio.nombre} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
            <h3>{servicio.nombre}</h3>
            <p>{servicio.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Servicios;
