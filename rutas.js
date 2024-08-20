import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Bienvenido a la pagina de inicio");
});

app.get("/listar", (req, res) => {
  res.send("Aquí se listan todos los usuarios");
});

app.post("/crear", (req, res) => {
  res.send("Usuario creado");
});

app.put("/actualizar/:id", (req, res) => {
  res.send(`Usuario con ID ${req.params.id} actualizado`);
});

app.delete("/eliminar/:id", (req, res) => {
  res.send(`Usuario con ID ${req.params.id} eliminado`);
});

const port = 3000;
app.listen(port, () => {
  console.log("Servidor corriendo en el puerto " + port);
});
