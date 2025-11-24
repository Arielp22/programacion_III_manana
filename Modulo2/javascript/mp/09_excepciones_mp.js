try {
    console.log(registroSacramentalNoDeclarado);
} catch (error) {
    console.log("Se ha producido un error al consultar el registro sacramental:", error.message);
}

try {
    console.log("Intentando acceder al archivo de catequesis...");
    throw new Error("Archivo de inscripciones no encontrado");
} catch (error) {
    console.log("Error al acceder al archivo de catequesis:", error.message);
} finally {
    console.log("Cerrando el proceso de verificacion del archivo.");
}
