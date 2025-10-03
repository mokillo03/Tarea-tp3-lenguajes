import { useState } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    mensaje: ""
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.nombre || !form.correo || !form.mensaje) {
      setStatus("Por favor, completa todos los campos.");
      return;
    }

    if (!validateEmail(form.correo)) {
      setStatus("El correo no es válido.");
      return;
    }

    emailjs.send(
      "service_mx65gck",     
      "template_pl2fdaj",    
      {
        from_name: form.nombre,
        from_email: form.correo,
        message: form.mensaje,
      },
      "gqrgPNQoorZTfeLRe"      
    )
    .then(() => {
      setStatus("✅ Correo enviado correctamente");
      setForm({ nombre: "", correo: "", mensaje: "" });
    })
    .catch(() => {
      setStatus("❌ Error al enviar el correo.");
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label><br />
          <input type="text" name="nombre" value={form.nombre} onChange={handleChange} />
        </div>
        <div>
          <label>Correo:</label><br />
          <input type="email" name="correo" value={form.correo} onChange={handleChange} />
        </div>
        <div>
          <label>Mensaje:</label><br />
          <textarea name="mensaje" value={form.mensaje} onChange={handleChange}></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>

      {/* Mapa */}
      <div style={{ flex: 1 }}>
        <iframe
          src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50257.80383932356!2d-68.18289695330124!3d-24.55144465919298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96a64d061c31279b%3A0x63fa972f4d7932b3!2sLaguna%20Socompa!5e0!3m2!1ses-419!2sar!4v1759453756835!5m2!1ses-419!2sar"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {status && <p style={{ marginTop: "10px" }}>{status}</p>}
    </div>
  );
}

export default ContactForm;
